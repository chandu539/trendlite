import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { client } from '../sanity/lib/client'; // sanity client setup

export default function MoviesPage({ moviesArticles }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-6">
        <h1 className="text-3xl font-bold mb-6">🎬 All Movies Articles</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {moviesArticles.length > 0 ? (
              moviesArticles.map(article => (
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
              <p>No movie articles found.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">📢 Sponsored Ad</h2>
              <p>Check out the latest movies and entertainment tech!</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">🔍 Related Articles</h2>
              <ul className="list-disc ml-4 text-sm text-gray-700">
                <li>Top 10 Sci-Fi Movies</li>
                <li>Oscar Winners 2024</li>
                <li>Best Cinematography Tricks</li>
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
  const query = `*[_type == "post" && "movies" in categories[]->title] | order(publishedAt desc){
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
    const moviesArticles = await client.fetch(query);

    return {
      props: {
        moviesArticles,
      },
      revalidate: 60, // Optional: revalidate every 60 seconds (ISR)
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return {
      props: {
        moviesArticles: [],
      },
    };
  }
}
