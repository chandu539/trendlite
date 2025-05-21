import React from "react";
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { client } from '../sanity/lib/client'; // Sanity client setup

export default function HealthPage({ healthArticles }) {
  return (
    <>
      <Head>
        <title>Health - TrendLite</title>
        <meta
          name="description"
          content="Explore expert-written health articles, wellness tips, and lifestyle advice in English on TrendLite. Stay healthy and informed!"
        />
        <meta
          name="keywords"
          content="Health, Wellness, Lifestyle, English Health Articles, Mental Health, Fitness Tips, TrendLite Health"
        />
        <meta name="author" content="TrendLite Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Health - TrendLite" />
        <meta
          property="og:description"
          content="Get practical health and wellness tips with curated articles in English from TrendLite."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendlite.vercel.app/health" />
        <meta property="og:image" content="https://trendlite.vercel.app/trendlite-health-og.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Health - TrendLite" />
        <meta
          name="twitter:description"
          content="Stay updated with health and wellness insights in English from TrendLite."
        />
        <meta name="twitter:image" content="https://trendlite.vercel.app/trendlite-health-og.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://trendlite.vercel.app/health" />
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
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">📢 Sponsored Ad</h2>
              <p>Stay fit with our new range of wellness products!</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">🔍 Related Articles</h2>
              <ul className="list-disc ml-4 text-sm text-gray-700">
                <li>10 Healthy Morning Habits</li>
                <li>Mental Health Awareness</li>
                <li>Superfoods You Should Try</li>
              </ul>
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
  const query = `*[_type == "post" && "health" in categories[]->title] | order(publishedAt desc){
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

  try {
    const healthArticles = await client.fetch(query);

    return {
      props: {
        healthArticles,
      },
      revalidate: 60, // Optional: Regenerates every 60 seconds if a request comes in
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return {
      props: {
        healthArticles: [],
      },
    };
  }
}
