import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import articles from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [visibleCount, setVisibleCount] = useState(4);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    if (article) {
      const related = articles
        .filter(a => a.slug !== article.slug) // or use category matching
        .slice(0, visibleCount);
      setRelatedPosts(related);
    }
  }, [article, visibleCount]);

  if (!article) return <p className="text-center mt-10">Article not found</p>;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 my-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-[70%] bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded mb-6"
            />
            <div
              className="text-lg leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:w-[30%] space-y-6">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-3">సంబంధిత కథనాలు</h2>
              <ul className="space-y-2">
                {articles
                  .filter(a => a.category === article.category && a.slug !== article.slug)
                  .slice(0, 3)
                  .map((rel) => (
                    <li key={rel.slug}>
                      <Link href={`/article/${rel.slug}`} className="text-blue-600 hover:underline">
                        {rel.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Ad */}
            <div className="bg-yellow-100 p-4 rounded shadow-sm text-center">
              <p className="text-sm text-gray-700 font-medium">🌟 Sponsored Ad</p>
              <div className="my-2">
                <img src="/images/ad-placeholder.jpg" alt="Ad" className="rounded w-full h-40 object-cover" />
              </div>
              <p className="text-gray-600 text-sm">మీ ఇంటిని మిగతావారికంటే ముందుగా మార్చుకోండి! ఇప్పుడు ఆర్డర్ చేయండి!</p>
            </div>
          </div>
        </div>

        {/* Related/Recent Posts Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">📚 Related Posts You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map(post => (
              <div key={post.slug} className="bg-white p-4 rounded shadow-md">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-3" />
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
                <Link href={`/${post.slug}`} className="text-blue-500 hover:underline text-sm mt-2 inline-block cursor-pointer">
                  Read more →
                </Link>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < articles.length - 1 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
