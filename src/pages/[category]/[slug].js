import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
//import { PortableText } from '@portabletext/react';
import PortableTextRenderer from '../../components/PortableTextRenderer';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { client } from '../../sanity/lib/client';

const ArticlePage = ({ article, recentPosts, initialComments }) => {
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

        <meta name="description" content={article.introduction || 'Read this amazing article on our blog.'} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={article.categories.map(cat => cat.title).join(', ')} />
        <meta name="author" content={article.author} />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.introduction || 'Check out this article.'} />
        <meta property="og:image" content={article.image}/>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.trendlite.online/${article.slug.current}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.introduction || 'Explore this post on our blog.'} />
        <meta name="twitter:image" content={article.image}/>
        <link rel="canonical" href={`https://www.trendlite.online/${article.slug.current}`} />
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
                  priority
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded">
                  No Image
                </div>
              )}
            </div>

            <div className="text-lg leading-relaxed space-y-4 text-justify max-w-3xl mx-auto px-4 hyphens-auto">
              <PortableTextRenderer value={article.body} />
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
                  {/* Sidebar with Recent Posts */}
        <div className="w-full lg:w-[30%] bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">📰 Recent Posts</h2>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post._id} className="flex gap-4 items-start">
                <div className="w-16 h-16 relative flex-shrink-0">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="64px"
                      className="rounded object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-sm text-gray-600 rounded">
                      No Image
                    </div>
                  )}
                </div>
                <Link
                      key={post._id}
                      href={`/${post.categories?.[0]?.title.toLowerCase() || 'general'}/${post.slug.current}`}
                      className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded transition"
                    >
                  <p className="text-blue-700 hover:underline font-medium text-sm leading-snug">{post.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        </div>

        
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
    "image": mainImage.asset->url, categories[]->{title}, introduction
  }`;

  const article = await client.fetch(queryArticleBySlug, { slug });

  if (!article) {
    return { notFound: true };
  }

  const queryRecentPosts = `*[_type == "post"] | order(publishedAt desc)[0...5] {
    _id, title, slug, "image": mainImage.asset->url, categories[]->{ title }
  }`;
  const recentPosts = await client.fetch(queryRecentPosts);


  

  // Use baseURL here:
  const commentsRes = await fetch(`${baseURL}/api/comments/${slug}`);
  const initialComments = await commentsRes.json();

  return {
    props: {
      article,
      initialComments,
      recentPosts, 
    },
    revalidate: 60, // ISR support: rebuild every 60 seconds
  };
}
