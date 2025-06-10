import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { createClient } from 'next-sanity';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: true,
});

export async function getStaticProps() {
  const techQuery = `*[_type == "post" && "tech" in categories[]->title] | order(publishedAt desc){
    _id,
    title,
    slug,
    "image": mainImage.asset->url,
    introduction,
    categories[]->{ title },
    publishedAt
  }`;

  const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...5]{
    _id,
    title,
    slug,
    "image": mainImage.asset->url,
    categories[]->{ title }
  }`;


  const [techArticles, recentPosts] = await Promise.all([
    client.fetch(techQuery),
    client.fetch(recentPostsQuery),
  ]);

  return {
    props: {
      techArticles,
      recentPosts,
    },
    revalidate: 60,
  };
}

export default function TechPage({ techArticles, recentPosts }) {
  return (
    <>
      <Head>
        <title>Tech - TrendLite</title>
        <meta
          name="description"
          content="Explore English-language tech articles on gadgets, AI, mobile apps, and innovation. Stay ahead with TrendLite Tech."
        />
        <meta
          name="keywords"
          content="Tech Blog, English Tech News, AI Updates, Gadgets 2025, Mobile Reviews, TrendLite Tech, Tech Articles in English"
        />
        <meta name="author" content="TrendLite Team" />
        <meta property="og:title" content="English Tech Articles | TrendLite" />
        <meta
          property="og:description"
          content="Stay updated with trending tech articles written in English, covering AI, gadgets, innovations, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trendlite.online/tech" />
        <meta
          property="og:image"
          content="https://www.trendlite.online/Trendlite-tech-og.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="English Tech News | TrendLite" />
        <meta
          name="twitter:description"
          content="Discover the latest tech trends, gadgets, and AI updates, all written in English on TrendLite."
        />
        <meta
          name="twitter:image"
          content="https://www.trendlite.online/Trendlite-tech-og.webp"
        />
        <link rel="canonical" href="https://www.trendlite.online/tech" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 mt-6">
        <h1 className="text-3xl font-bold mb-6">📱 All Tech Articles</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Articles Section - 60% */}
          <section className="lg:col-span-8 space-y-6">
            {techArticles.length > 0 ? (
              techArticles.map((article) => (
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
              <p>No tech articles found.</p>
            )}
          </section>

          {/* Sidebar Section - 40% */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">📰 Recent Posts</h2>
              <div className="space-y-4">
                {recentPosts.length > 0 ? (
                  recentPosts.map((post) => (
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
