import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { client } from '../../sanity/lib/client';

const ArticlePage = ({ article, relatedPosts, initialComments }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [comments, setComments] = useState(initialComments || []);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);

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
      <Head>
        <title>{`${article.title} | TrendLite`}</title>
        <meta name="description" content={article.description || 'Read this amazing article on our blog.'} />
        <meta name="keywords" content={article.categories.map(cat => cat.title).join(', ')} />
        <meta name="author" content={article.author} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description || 'Check out this article.'} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://trendlite.vercel.app/${article.slug.current}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description || 'Explore this post on our blog.'} />
        <meta name="twitter:image" content={article.image} />
        <link rel="canonical" href={`https://trendlite.vercel.app/${article.slug.current}`} />
      </Head>

      <Header />
      <main className="container mx-auto px-4 my-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[70%] bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <p className="text-sm text-gray-600 mb-1">
              By <span className="font-medium">{article.author}</span> •{' '}
              {format(new Date(article.publishedAt), 'yyyy-MM-dd')}
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
                  //priority
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
                    type="text"
                    autoComplete='name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={message}
                    autoComplete='on'
                    onChange={(e) => setMessage(e.target.value)}
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
                      {format(new Date(cmt.createdAt), 'yyyy-MM-dd HH:mm:ss')}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[30%] space-y-6 top-24 self-start">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-3">సంబంధిత కథనాలు</h2>
              <ul className="space-y-2">
                {relatedPosts.length === 0 && <li>No related posts found.</li>}
                {relatedPosts.slice(0, visibleCount).map((rel) => (
                  <li key={rel._id}>
                    <Link href={`/${rel.slug.current}`} className="text-blue-600 hover:underline">
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

// ✅ Pre-rendering with getStaticPaths
export async function getStaticPaths() {
  const query = `*[_type == "post"]{ slug, categories[]->{title} }`;
  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      category: post.categories?.[0]?.title || 'general',
      slug: post.slug.current,
    },
  }));

  return { paths, fallback: 'blocking' };
}

// ✅ Pre-rendering with getStaticProps
export async function getStaticProps({ params }) {
  const { slug } = params;

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const queryArticleBySlug = `*[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, publishedAt, body, "author": author->name,
    "image": mainImage.asset->url, categories[]->{title}, description
  }`;

  const article = await client.fetch(queryArticleBySlug, { slug });

  if (!article) {
    return { notFound: true };
  }

  const category = article.categories?.[0]?.title;

  const queryRelatedArticles = `*[_type == "post" && $category in categories[].title && slug.current != $slug] | order(_createdAt desc) {
    _id, title, slug, description, "image": mainImage.asset->url
  }`;

  const relatedPosts = await client.fetch(queryRelatedArticles, { category, slug });

  // Use baseURL here:
  const commentsRes = await fetch(`${baseURL}/api/comments/${slug}`);
  const initialComments = await commentsRes.json();

  return {
    props: {
      article,
      relatedPosts,
      initialComments,
    },
    revalidate: 60, // ISR support: rebuild every 60 seconds
  };
}
