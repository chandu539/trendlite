// import React from "react";
// import Head from 'next/head';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ArticleCard from '../components/ArticleCard';
// import { client } from '../sanity/lib/client'; // Sanity client setup

// export default function InventionsPage({ inventionArticles }) {
//   return (
//     <>
//       <Head>
//         <title>Inventions - TrendLite</title>
//         <meta
//           name="description"
//           content="Discover the latest technological inventions and innovations with in-depth articles in English on TrendLite. Stay ahead with future-ready insights."
//         />
//         <meta
//           name="keywords"
//           content="Inventions, Technology, Innovations, Future Tech, AI, Robotics, English Tech Articles, TrendLite"
//         />
//         <meta name="author" content="TrendLite Team" />

//         {/* Open Graph / Facebook */}
//         <meta property="og:title" content="Inventions - TrendLite" />
//         <meta
//           property="og:description"
//           content="Explore cutting-edge inventions and tech breakthroughs in English only on TrendLite."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://trendlite.vercel.app/inventions" />
//         <meta property="og:image" content="https://trendlite.vercel.app/trendlite-inventions-og.png" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Inventions - TrendLite" />
//         <meta
//           name="twitter:description"
//           content="Get the latest updates on revolutionary tech inventions in English from TrendLite."
//         />
//         <meta name="twitter:image" content="https://trendlite.vercel.app/trendlite-inventions-og.png" />

//         {/* Canonical URL */}
//         <link rel="canonical" href="https://trendlite.vercel.app/inventions" />
//       </Head>

//       <Header />
//       <main className="container mx-auto px-4 mt-6">
//         <h1 className="text-3xl font-bold mb-6">💡 All Inventions Articles</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">
//             {inventionArticles.length > 0 ? (
//               inventionArticles.map(article => (
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
//               <p>No inventions articles found.</p>
//             )}
//           </div>

//           {/* Sidebar */}
//           <aside className="lg:col-span-4 space-y-4">
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl font-semibold mb-2">📢 Sponsored Ad</h2>
//               <p>Explore the newest groundbreaking inventions of this year!</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <h2 className="text-xl font-semibold mb-2">🔍 Related Articles</h2>
//               <ul className="list-disc ml-4 text-sm text-gray-700">
//                 <li>AI Inventions 2024</li>
//                 <li>Future of Robotics</li>
//                 <li>Quantum Computing Basics</li>
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
//   const query = `*[_type == "post" && "inventions" in categories[]->title] | order(publishedAt desc){
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
//     const inventionArticles = await client.fetch(query);

//     return {
//       props: {
//         inventionArticles,
//       },
//       revalidate: 60, // Optional: Rebuild page every 60 seconds if new request comes in
//     };
//   } catch (error) {
//     console.error("Sanity fetch error:", error);
//     return {
//       props: {
//         inventionArticles: [],
//       },
//     };
//   }
// }
