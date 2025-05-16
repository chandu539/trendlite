import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import articles from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [visibleCount, setVisibleCount] = useState(4);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const article = articles.find((a) => a.slug === slug);
  const relatedPosts = articles
    .filter((a) => a.slug !== slug)
    .slice(0, visibleCount);

  useEffect(() => {
    if (slug) {
      fetch(`/api/comments/${slug}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  }, [slug]);

  if (!article) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="text-gray-600 mt-4">
            Go back to{' '}
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 my-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-[70%] bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <div className="w-full h-64 relative mb-6 rounded overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
            <div
              className="text-lg leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Comments Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4">🗣 Comments</h2>

              {/* Comment Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await fetch(`/api/comments/${slug}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, message }),
                  });
                  const newComment = await res.json();
                  setComments([newComment, ...comments]);
                  setUsername('');
                  setMessage('');
                }}
                className="mb-6 space-y-4"
              >
                <div>
                  <label htmlFor="username" className="block mb-1 font-semibold">
                    Your Name
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    autoComplete="name"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-semibold">
                    Write your comment
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    autoComplete="on" 
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your comment..."
                    required
                    rows={4}
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.length === 0 && <p>No comments yet.</p>}
                {comments.map((cmt) => (
                  <div key={cmt._id} className="bg-gray-100 p-4 rounded">
                    <p className="font-semibold">{cmt.username}</p>
                    <p className="text-gray-700">{cmt.message}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(cmt.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[30%] space-y-6">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-3">సంబంధిత కథనాలు</h2>
              <ul className="space-y-2">
                {articles
                  .filter((a) => a.category === article.category && a.slug !== article.slug)
                  .slice(0, 3)
                  .map((rel) => (
                    <li key={rel.slug}>
                      <Link href={`/${rel.slug}`} className="text-blue-600 hover:underline">
                        {rel.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Ad */}
            <div className="bg-yellow-100 p-4 rounded shadow-sm text-center">
              <p className="text-sm text-gray-700 font-medium">🌟 Sponsored Ad</p>
              <div className="my-2 relative w-full h-40 rounded overflow-hidden">
                <Image
                  src="/images/ai-life.jpg"
                  alt="Ad"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
              <p className="text-gray-600 text-sm">
                మీ ఇంటిని మిగతావారికంటే ముందుగా మార్చుకోండి! ఇప్పుడు ఆర్డర్ చేయండి!
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">📚 Related Posts You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((post) => (
              <div key={post.slug} className="bg-white p-4 rounded shadow-md">
                <div className="relative w-full h-40 mb-3 rounded overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
                <Link
                  href={`/${post.slug}`}
                  className="text-blue-500 hover:underline text-sm mt-2 inline-block cursor-pointer"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < articles.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
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
