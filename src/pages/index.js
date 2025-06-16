import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { createClient } from 'next-sanity';
import Head from 'next/head';
import { useState } from 'react';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: true,
});

export async function getStaticProps() {
  const query = `*[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    mainImage{
      asset->{url}
    },
    categories[]->{
      title
    },
    publishedAt,
    introduction
  }`;

  const articles = await client.fetch(query);

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}

export default function Home({ articles }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Head>
        <title>TrendLite | Tech & Health Blogs in English</title>
        <meta name="description" content="Stay updated with the latest articles on Technology and Health in English. TrendLite brings trending tech news, health tips, and expert reviews for everyone." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="English Blog, Tech News, Health Tips, Latest Gadgets, Articles, TrendLite" />
        <meta name="author" content="TrendLite Team" />
        <meta property="og:title" content="TrendLite | Tech & Health Blogs in English" />
        <meta property="og:description" content="Explore trending content on technology and health written in English for native and global readers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trendlite.online/" />
        <meta property="og:image" content="https://www.trendlite.online/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TrendLite | Tech & Health Blogs in English" />
        <meta name="twitter:description" content="Trending articles in English on Technology and Health. Follow TrendLite for daily updates." />
        <meta name="twitter:image" content="https://www.trendlite.online/logo.webp" />
        <link rel="canonical" href="https://www.trendlite.online/" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 mt-8 space-y-10">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Articles - 60% */}
          <div className="w-full md:w-[70%]">
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.slug?.current}
                    title={article.title}
                    slug={article.slug?.current}
                    image={article.mainImage?.asset?.url}
                    category={article.categories?.[0]?.title?.toLowerCase() || 'uncategorized'}
                    publishedAt={article.publishedAt}
                    introduction={article.introduction}
                  />
                ))}
              </div>
            ) : (
              <p>No articles found.</p>
            )}
          </div>

          {/* Empty right column for future ads - 40% */}
          <div className="w-full md:w-[30%] bg-gray-50 rounded-xl min-h-[400px] border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-lg">
            Future Ad Space
          </div>
        </div>

        {/* Recent Posts */}
        
      </main>

      <Footer />
    </>
  );
}
