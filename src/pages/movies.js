// import React from "react";
// import Head from 'next/head';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ArticleCard from '../components/ArticleCard';
// import { client } from '../sanity/lib/client'; // sanity client setup

// export default function MoviesPage({ moviesArticles }) {
//   return (
//     <>
//       <Head>
//         <title>Movies - TrendLite</title>
//         <meta
//           name="description"
//           content="Read the latest Telugu movie articles, reviews, and entertainment news in English only on TrendLite."
//         />
//         <meta
//           name="keywords"
//           content="Telugu Movies, English Movie Reviews, TrendLite, Entertainment News, Telugu Film Industry"
//         />
//         <meta name="author" content="TrendLite Team" />

//         {/* Open Graph / Facebook */}
//         <meta property="og:title" content="Movies - TrendLite" />
//         <meta
//           property="og:description"
//           content="Explore English-language Telugu movie reviews, articles, and entertainment stories on TrendLite."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://trendlite.vercel.app/movies" />
//         <meta property="og:image" content="https://trendlite.vercel.app/trendlite-movies-og.png" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Movies - TrendLite" />
//         <meta
//           name="twitter:description"
//           content="Latest English-language articles and updates on Telugu cinema – powered by TrendLite."
//         />
//         <meta name="twitter:image" content="https://trendlite.vercel.app/trendlite-movies-og.png" />

//         {/* Canonical URL */}
//         <link rel="canonical" href="https://trendlite.vercel.app/movies" />
//       </Head>


//       <Header />
//       <main className="container mx-auto px-4 mt-6">
//         <h1 className="text-3xl font-bold mb-6">🎬 All Movies Articles</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {moviesArticles.length > 0 ? (
//               moviesArticles.map(article => (
//                 <ArticleCard
//                   key={article._id}
//                   title={article.title}
//                   slug={article.slug?.current}
//                   image={article.image}
//                   introduction={article.introduction}
//                   publishedAt={article.publishedAt}
//                   category={article.categories[0]?.title.toLowerCase()}
//                 />
//               ))
//             ) : (
//               <p>No movie articles found.</p>
//             )}
//           </div>

//           {/* Sidebar */}
//           <aside className="lg:col-span-4 space-y-4">
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl font-semibold mb-2">📢 Sponsored Ad</h2>
//               <p>Check out the latest movies and entertainment tech!</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl font-semibold mb-2">🔍 Related Articles</h2>
//               <ul className="list-disc ml-4 text-sm text-gray-700">
//                 <li>Top 10 Sci-Fi Movies</li>
//                 <li>Oscar Winners 2024</li>
//                 <li>Best Cinematography Tricks</li>
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// // ✅ Fetch data at build time
// export async function getStaticProps() {
//   const query = `*[_type == "post" && "movies" in categories[]->title] | order(publishedAt desc){
//     _id,
//     title,
//     slug,
//     "image": mainImage.asset->url,
//     introduction,
//     categories[]->{
//         title
//       },
//     publishedAt
//   }`;

//   try {
//     const moviesArticles = await client.fetch(query);

//     return {
//       props: {
//         moviesArticles,
//       },
//       revalidate: 60, // Optional: revalidate every 60 seconds (ISR)
//     };
//   } catch (error) {
//     console.error("Sanity fetch error:", error);
//     return {
//       props: {
//         moviesArticles: [],
//       },
//     };
//   }
// }
