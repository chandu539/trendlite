import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | TrendLite - The Pulse of Tech & Life</title>
        <meta
          name="description"
          content="Learn more about TrendLite, our mission, vision, and the team behind the pulse of tech and life."
        />
        <meta
          name="keywords"
          content="About TrendLite, Tech Blog, Lifestyle Blog, Our Mission, Our Team"
        />
        <meta name="author" content="TrendLite Team" />
        <link rel="canonical" href="https://trendlite.vercel.app/about" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | TrendLite - The Pulse of Tech & Life" />
        <meta
          property="og:description"
          content="Discover the story behind TrendLite and how we bring you the latest in tech and lifestyle."
        />
        <meta property="og:url" content="https://trendlite.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://trendlite.vercel.app/Trendlite-about-og.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | TrendLite" />
        <meta
          name="twitter:description"
          content="Learn about TrendLite’s mission, vision, and values."
        />
        <meta name="twitter:image" content="https://trendlite.vercel.app/Trendlite-about-og.jpg" />
      </Head>

      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

          <p className="mb-6 text-lg leading-relaxed">
            Welcome to <strong>TrendLite</strong>, your go-to source for the latest news, trends, and insights in technology and lifestyle.
            Our mission is to provide readers with high-quality content that informs, inspires, and empowers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6 text-lg leading-relaxed">
            At TrendLite, we strive to keep you updated with the pulse of tech innovations and lifestyle advancements.
            We believe that technology shapes our future, and staying informed helps you make better decisions in your personal and professional life.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-6 text-lg leading-relaxed">
            We envision a world where technology and lifestyle blend seamlessly to improve well-being and productivity.
            Through our articles, tutorials, and guides, we want to build a knowledgeable community passionate about innovation and growth.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Meet the Team</h2>
          <p className="mb-6 text-lg leading-relaxed">
            TrendLite is powered by a diverse group of tech enthusiasts, writers, and creatives dedicated to delivering accurate and engaging content.
            Our team works hard to research, write, and curate articles that resonate with you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6 text-lg leading-relaxed">
            We’d love to hear from you! Whether you have questions, feedback, or collaboration ideas, feel free to reach out.
          </p>
          <ul className="list-disc ml-6 mb-12">
            <li>Email: <a href="mailto:contact@trendlite.com" className="text-blue-600 underline">contact@trendlite.com</a></li>
            <li>Address: TrendLite, AndhraPradesh, India</li>
          </ul>

          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline">
              Back to Home
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
