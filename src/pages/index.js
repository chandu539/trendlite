import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles';

export default function Home() {
  const latestArticles = articles.slice(0, 6);
  const latestSlugs = new Set(latestArticles.map(a => a.slug));

  // Updated: Allow tech articles even if they are in latestArticles
  const techArticles = articles.filter(a => a.category === 'tech').slice(0, 3);

  // Continue excluding latestArticles for other categories
  const movieArticles = articles.filter(a => a.category === 'movies' && !latestSlugs.has(a.slug)).slice(0, 3);
  const healthArticles = articles.filter(a => a.category === 'health' && !latestSlugs.has(a.slug)).slice(0, 3);
  const inventionArticles = articles.filter(a => a.category === 'inventions' && !latestSlugs.has(a.slug)).slice(0, 3);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-6">
        <HeroBanner />

        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Main Content - 70% */}
          <div className="w-full md:w-[70%]">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">📰 Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestArticles.map(article => (
                  <div key={article.slug}>
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">📱 Latest from Tech</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techArticles.map(article => (
                  <div key={article.slug}>
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">🎬 Latest from Movies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {movieArticles.map(article => (
                  <div key={article.slug}>
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">❤️ Latest from Health</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthArticles.map(article => (
                  <div key={article.slug}>
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">💡 Latest from Inventions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inventionArticles.map(article => (
                  <div key={article.slug}>
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - 30% */}
          <aside className="w-full md:w-[30%] space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">🔔 Sponsored Ad</h3>
              <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
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
              <h3 className="text-lg font-semibold mb-2">📌 Editor's Picks</h3>
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
