import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { client } from '../../sanity/lib/client';
import { PortableText } from '@portabletext/react';

const ArticlePage = () => {
  const router = useRouter();
  const { category, slug } = router.query;


  const [article, setArticle] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);  // store full list
  const [visibleCount, setVisibleCount] = useState(4);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const queryArticleBySlug = `*[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, publishedAt, body, "author": author->name,
    "image": mainImage.asset->url, categories[]->{title}, description
  }`;

  const queryRelatedArticles = `*[_type == "post" && $category in categories[].title && slug.current != $slug] | order(_createdAt desc) {
    _id, title, slug, description, "image": mainImage.asset->url
  }`;

  useEffect(() => {
    if (!slug) return;

    // Fetch the article
    client.fetch(queryArticleBySlug, { slug }).then((data) => {
      setArticle(data);

      if (data?.categories?.length > 0) {
        const category = data.categories[0].title;
        // Fetch all related posts (no slice here)
        client.fetch(queryRelatedArticles, { category, slug }).then((posts) => {
          setRelatedPosts(posts);
        });
      } else {
        setRelatedPosts([]);
      }
    });

    // Fetch comments
    fetch(`/api/comments/${slug}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
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
        {/* Flex container for article content + sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="w-full lg:w-[70%] bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <p className="text-sm text-gray-600 mb-1">
              By <span className="font-medium">{article.author}</span> •{' '}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Categories:{' '}
              {article.categories.map((cat, index) => (
                <span key={index} className="inline-block mr-1">
                  {cat.title}
                  {index < article.categories.length - 1 && ','}
                </span>
              ))}
            </p>

            <div className="w-full aspect-video relative mb-6 rounded overflow-hidden">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded">
                  No Image
                </div>
              )}
            </div>

            <div className="text-lg leading-relaxed space-y-4 text-justify max-w-3xl mx-auto px-4 hyphens-auto">
              <PortableText value={article.body} />
            </div>

            {/* Comments Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4">🗣 Comments</h2>

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
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your Name"
                    autoComplete="name"
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
                    autoComplete="on"
                    value={message}
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
          <aside className="w-full lg:w-[30%] space-y-6  top-24 self-start">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-3">సంబంధిత కథనాలు</h2>
              <ul className="space-y-2">
                {relatedPosts.length === 0 && <li>No related posts found.</li>}
                {relatedPosts.slice(0, visibleCount).map((rel) => (
                  <li key={rel._id}>
                    <Link
                      href={`/${rel.slug.current}`}
                      className="text-blue-600 hover:underline"
                    >
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-100 p-4 rounded shadow-sm text-center">
              <p className="text-sm text-gray-700 font-medium">🌟 Sponsored Ad</p>
              <div className="my-2 relative w-full aspect-video rounded overflow-hidden">
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
          </aside>
        </div>

        {/* Related Posts Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">📚 Related Posts You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.slice(0, visibleCount).map((post) => (
              <div key={post._id} className="bg-white p-4 rounded shadow-md">
                <div className="relative w-full aspect-video mb-3 rounded overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      className="rounded"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded">
                      No Image
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
                <Link
                  href={`/${post.slug.current}`}
                  className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>

          {relatedPosts.length > visibleCount && (
            <button
              onClick={() => setVisibleCount(visibleCount + 4)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Load More
            </button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
