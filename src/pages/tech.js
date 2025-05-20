// pages/tech/index.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { createClient } from 'next-sanity';

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
