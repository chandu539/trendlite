"use client";

import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { client } from '../sanity/lib/client'; // Sanity client setup

export default function HealthPage() {
  const [healthArticles, setHealthArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    client.fetch(query)
      .then(data => {
        setHealthArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 mt-6 text-center">
          <p>Loading health articles...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
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
