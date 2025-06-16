import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | TrendLite - The Pulse of Tech & Health</title>
        <meta
          name="description"
          content="Learn more about TrendLite - your trusted source for tech, health, gadgets, and affiliate product reviews."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="About TrendLite, Tech Blog, Health Blog, Gadget Reviews, Amazon Affiliate, Our Mission"
        />
        <meta name="author" content="TrendLite Team" />
        <link rel="canonical" href="https://www.trendlite.online/about" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | TrendLite - The Pulse of Tech &amp; Health" />
        <meta
          property="og:description"
          content="Discover TrendLite - blending technology, health insights, and honest affiliate reviews to empower modern living."
        />
        <meta property="og:url" content="https://www.trendlite.online/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.trendlite.online/logo.webp" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | TrendLite" />
        <meta
          name="twitter:description"
          content="Explore TrendLite&apos;s mission to deliver authentic health tips, tech blogs, and gadget reviews."
        />
        <meta name="twitter:image" content="https://www.trendlite.online/logo.webp" />
      </Head>

      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

          <p className="mb-6 text-lg leading-relaxed">
            Welcome to <strong>TrendLite</strong> — your trusted destination for trending insights in <strong>technology</strong>, <strong>health &amp; wellness</strong>, <strong>latest gadgets</strong>, and <strong>Amazon affiliate product reviews</strong>.
            We&apos;re passionate about bringing you content that is practical, engaging, and up-to-date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6 text-lg leading-relaxed">
            At TrendLite, our mission is to empower readers with reliable and actionable content. From decoding the latest health trends to reviewing cutting-edge gadgets and tech, we aim to simplify information so you can make smarter choices.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Cover</h2>
          <ul className="list-disc ml-6 mb-6 text-lg leading-relaxed">
            <li>In-depth tech tutorials and trends</li>
            <li>Evidence-based health and lifestyle advice</li>
            <li>Hands-on gadget reviews</li>
            <li>Amazon affiliate product roundups with honest opinions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-6 text-lg leading-relaxed">
            We envision a future where technology and well-being go hand in hand. By combining both worlds, we create a platform that not only educates but also adds value to everyday lives.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Disclaimer</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Some of our articles contain <Link href="//disclaimer" className="text-blue-600 underline">affiliate links</Link>, meaning we may earn a small commission at no extra cost to you. Rest assured, all product reviews are based on honest evaluations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Meet the Team</h2>
          <p className="mb-6 text-lg leading-relaxed">
            TrendLite is driven by a team of tech lovers, writers, health researchers, and gadget geeks who share a common goal — delivering quality content that matters.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Got suggestions, feedback, or partnership inquiries? We&apos;d love to hear from you.
          </p>
          <ul className="list-disc ml-6 mb-12">
            <li>
              Email: <a href="mailto:chchandu554@gmail.com" className="text-blue-600 underline">
                chchandu554@gmail.com
              </a>
            </li>
            <li>Address: TrendLite, Andhra Pradesh, India</li>
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
