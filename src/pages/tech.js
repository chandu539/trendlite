// pages/tech/index.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { createClient } from 'next-sanity';
import Head from 'next/head';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: true,
});

export async function getStaticProps() {
  const query = `*[_type == "post" && references(*[_type=="category" && title=="tech"]._id)] | order(publishedAt desc){
    title,
    slug,
    "image": mainImage.asset->url,
    introduction,
    categories[]->{ title },
    publishedAt
  }`;

  const techArticles = await client.fetch(query);

  return {
    props: {
      techArticles,
    },
    revalidate: 60, // optional: regenerate every 60 seconds
  };
}

export default function TechPage({ techArticles }) {
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

        {/* Open Graph Tags */}
        <meta property="og:title" content="English Tech Articles | TrendLite" />
        <meta
          property="og:description"
          content="Stay updated with trending tech articles written in English, covering AI, gadgets, innovations, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendlite.vercel.app/tech" />
        <meta property="og:image" content="https://trendlite.vercel.app/Trendlite-tech-og.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="English Tech News | TrendLite" />
        <meta
          name="twitter:description"
          content="Discover the latest tech trends, gadgets, and AI updates, all written in English on TrendLite."
        />
        <meta name="twitter:image" content="https://trendlite.vercel.app/Trendlite-tech-og.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://trendlite.vercel.app/tech" />
      </Head>



      <Header />
      <main className="container mx-auto px-4 mt-6">
        <h1 className="text-3xl font-bold mb-6">📱 All Tech Articles</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {techArticles.length > 0 ? (
              techArticles.map(article => (
                <ArticleCard
                  key={article.slug?.current}
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
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">📢 Sponsored Ad</h2>
              <p>Check out our latest tech gadgets and offers!</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">🔍 Related Articles</h2>
              <ul className="list-disc ml-4 text-sm text-gray-700">
                <li>AI Inventions 2024</li>
                <li>Future of Robotics</li>
                <li>Quantum Computing Basics</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
