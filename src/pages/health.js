import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { client } from '../sanity/lib/client';

export default function HealthPage({ healthArticles, recentPosts }) {
  return (
    <>
      <Head>
        <title>Health - TrendLite</title>
        <meta name="description" content="Explore expert-written health articles, wellness tips, and lifestyle advice in English on TrendLite. Stay healthy and informed!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Health, Wellness, Lifestyle, English Health Articles, Mental Health, Fitness Tips, TrendLite Health" />
        <meta name="author" content="TrendLite Team" />
        <meta property="og:title" content="Health - TrendLite" />
        <meta property="og:description" content="Get practical health and wellness tips with curated articles in English from TrendLite." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trendlite.online/health" />
        <meta property="og:image" content="https://www.trendlite.online/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Health - TrendLite" />
        <meta name="twitter:description" content="Stay updated with health and wellness insights in English from TrendLite." />
        <meta name="twitter:image" content="https://www.trendlite.online/logo.webp" />
        <link rel="canonical" href="https://www.trendlite.online/health" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 mt-6">
        <h1 className="text-3xl font-bold mb-6">❤️ All Health Articles</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {healthArticles.length > 0 ? (
              healthArticles.map(article => (
                <ArticleCard
                  key={article._id}
                  title={article.title}
                  slug={article.slug?.current}
                  image={article.image}
                  introduction={article.introduction}
                  publishedAt={article.publishedAt}
                  category={article.categories[0]?.title.toLowerCase()}
                />
              ))
            ) : (
              <p>No health articles found.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-4 ">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">📰 Recent Posts</h2>
              <div className="space-y-3">
                {recentPosts.length > 0 ? (
                  recentPosts.map(post => (
                    <Link
                      key={post._id}
                      href={`/${post.categories?.[0]?.title.toLowerCase() || 'general'}/${post.slug.current}`}
                      className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded transition"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                          priority
                        />
                      </div>
                      <p className="text-sm text-gray-800 font-medium">{post.title}</p>
                    </Link>
                  ))
                ) : (
                  <p>No recent posts found.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ✅ Fetch data at build time
export async function getStaticProps() {
  const healthQuery = `*[_type == "post" && "health" in categories[]->title] | order(publishedAt desc){
    _id,
    title,
    slug,
    "image": mainImage.asset->url,
    introduction,
    categories[]->{
      title
    },
    publishedAt
  }`;

  const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...5]{
    _id,
    title,
    slug,
    "image": mainImage.asset->url,
    categories[]->{ title }
  }`;

  try {
    const [healthArticles, recentPosts] = await Promise.all([
      client.fetch(healthQuery),
      client.fetch(recentPostsQuery),
    ]);

    return {
      props: {
        healthArticles,
        recentPosts,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return {
      props: {
        healthArticles: [],
        recentPosts: [],
      },
    };
  }
}
