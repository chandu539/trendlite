import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | TrendLite - The Pulse of Tech & Life</title>
        <meta
          name="description"
          content="Learn more about TrendLite - a blog that brings you trending insights in Tech, Movies, Health, and Inventions. We inspire, inform, and entertain with quality English content."
        />
        <meta
          name="keywords"
          content="About TrendLite, Tech Blog, Movie Reviews, Health Tips, Inventions, Lifestyle, Blogging"
        />
        <meta name="author" content="TrendLite Team" />

        {/* Open Graph (OG) tags for better sharing on social media */}
        <meta property="og:title" content="About Us | TrendLite - The Pulse of Tech & Life" />
        <meta
          property="og:description"
          content="Learn more about TrendLite - a blog that brings trending insights in Tech, Movies, Health, and Inventions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trendlite.vercel.app/about" />
        <meta property="og:image" content="https://trendlite.vercel.app/trendlite-og.png" />

        {/* Canonical link to avoid duplicate SEO issues */}
        <link rel="canonical" href="https://trendlite.vercel.app/about" />
      </Head>

      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6 text-center">About TrendLite</h1>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            <strong>TrendLite</strong> is your go-to source for staying in tune with the pulse of modern life — from the latest in <strong>Technology</strong> to reviews of trending <strong>Movies</strong>, valuable <strong>Health</strong> tips, and breakthrough <strong>Inventions</strong>. We focus on providing high-quality, engaging, and reliable English content that keeps you informed and entertained.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Our mission is to bring trustworthy and insightful content to readers who want to stay updated on technology, health, entertainment, and innovation. Whether you’re looking for the newest smartphone reviews, wellness advice, or exciting breakthroughs in science and technology — TrendLite has you covered!
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            <strong>Why follow TrendLite?</strong><br />
            - 📱 In-depth tech reviews and news<br />
            - 🎬 Honest and insightful movie reviews<br />
            - ❤️ Health and wellness tips backed by research<br />
            - 💡 Latest updates on inventions and innovations<br />
            - 📝 Thoughtfully crafted articles for curious minds
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            We believe information should be accessible, reliable, and enjoyable. That’s why we strive to create content that’s easy to understand and hard to forget.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Thank you for being a part of the TrendLite community. We’re excited to grow and share this journey with you!
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
