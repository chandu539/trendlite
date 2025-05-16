import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | TrendLite - The Pulse of Tech & Life</title>
        <meta
          name="description"
          content="Learn more about TrendLite - a blog that brings you trending insights in Tech, Movies, Health, and Inventions. We inspire, inform, and entertain our Telugu readers."
        />
        <meta name="keywords" content="About TrendLite, Telugu Tech Blog, Telugu Movies Review, Health Tips Telugu, Inventions, Lifestyle, Blogging" />
        <meta name="author" content="TrendLite Team" />
      </Head>

      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6 text-center">About TrendLite</h1>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            <strong>TrendLite</strong> is your go-to source for staying in tune with the pulse of modern life — from the latest in <strong>Technology</strong> to reviews of trending <strong>Movies</strong>, valuable <strong>Health</strong> tips, and breakthrough <strong>Inventions</strong>. We write in both English and Telugu to connect deeply with our native-speaking audience.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Our mission is to bring high-quality, trustworthy, and engaging content to readers looking to stay updated, entertained, and informed. Whether you're curious about the newest smartphone under ₹20,000, interested in health benefits of eating vegetables, or exploring futuristic AI gadgets — we’ve got you covered!
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            <strong>Why follow TrendLite?</strong><br />
            - 📱 Detailed tech reviews in your language<br />
            - 🎬 Honest movie reviews with cultural depth<br />
            - ❤️ Health and wellness tips backed by research<br />
            - 💡 Cutting-edge invention updates & science news<br />
            - 📝 Articles tailored for Telugu-speaking readers worldwide
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            We believe information should be accessible, reliable, and enjoyable. That’s why we aim to create content that’s easy to understand and hard to forget.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Thank you for being a part of the TrendLite community. We’re just getting started — and we’re thrilled to have you along for the journey!
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
