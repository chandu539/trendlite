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

// Server-side fetch to avoid CORS issues
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
    revalidate: 60, // Optional: revalidate every 60 seconds (ISR)
  };
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
          <title>TrendLite | Tech & Health Blogs in English</title>
          <meta
            name="description"
            content="Stay updated with the latest articles on Technology and Health in English. TrendLite brings trending tech news, health tips, and expert reviews for everyone."
          />
          <meta
            name="keywords"
            content="English Blog, Tech News, Health Tips, Latest Gadgets, Articles, TrendLite"
          />
          <meta name="author" content="TrendLite Team" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="TrendLite | Tech & Health Blogs in English" />
          <meta
            property="og:description"
            content="Explore trending content on technology and health written in English for native and global readers."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://trendlite.vercel.app/" />
          <meta property="og:image" content="https://trendlite.vercel.app/Trendlite-home-og.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="TrendLite | Tech & Health Blogs in English" />
          <meta
            name="twitter:description"
            content="Trending articles in English on Technology and Health. Follow TrendLite for daily updates."
          />
          <meta name="twitter:image" content="https://trendlite.vercel.app/Trendlite-home-og.jpg" />

          {/* Canonical Link */}
          <link rel="canonical" href="https://trendlite.vercel.app/" />
      </Head>



      <Header />
      <main className="container mx-auto px-4 mt-6">
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Left side: Show all articles */}
          <div className="w-full md:w-[70%]">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">📰 Latest Articles</h2>
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {articles.map((article) => (
                    <ArticleCard
                      key={article.slug?.current}
                      title={article.title}
                      slug={article.slug?.current}
                      image={article.mainImage?.asset?.url}
                      category={article.categories[0]?.title.toLowerCase()}
                      publishedAt={article.publishedAt}
                      introduction={article.introduction}
                    />
                  ))}
                </div>
              ) : (
                <p>No articles found.</p>
              )}
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="w-full md:w-[30%] space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">🔔 Sponsored Ad</h3>
              <div class="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-900">
                Ad Space
              </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">📢 Trending Topics</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Best Budget Phones 2025</li>
                <li>Mahesh Babu Movie Buzz</li>
                <li>AI in Daily Life</li>
                <li>Healthy Eating Tips</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">🕘 Recent Posts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>ChatGPT & You: Tips & Tricks</li>
                <li>Top 5 Movies This Month</li>
                <li>React vs Next.js: What to Choose?</li>
                <li>Cyber Safety in 2025</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">📌 Editor&apos;s Picks</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Top Coding Resources for Beginners</li>
                <li>Must-Watch Telugu Thrillers</li>
                <li>Free Tools for Content Creators</li>
                <li>Minimalist Lifestyle Tips</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
