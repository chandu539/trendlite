import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TrendLite - The Pulse of Tech & Life</title>
        <meta
          name="description"
          content="Read TrendLite's Privacy Policy to understand how we collect, use, and protect your personal data. We are committed to safeguarding your information."
        />
        <meta name="keywords" content="Privacy Policy, TrendLite, Data Protection, Cookies, User Rights, Telugu Blogs" />
        <meta name="author" content="TrendLite Team" />
        <link rel="canonical" href="https://www.trendlite.com/privacy-policy" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Privacy Policy | TrendLite - The Pulse of Tech & Life" />
        <meta property="og:description" content="Understand how TrendLite collects, uses, and protects your personal data. Your privacy matters to us." />
        <meta property="og:url" content="https://www.trendlite.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.trendlite.com/og-image.jpg" /> {/* Replace with actual OG image URL */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | TrendLite" />
        <meta name="twitter:description" content="Read how TrendLite protects your data and ensures privacy." />
        <meta name="twitter:image" content="https://www.trendlite.com/og-image.jpg" /> {/* Replace with actual OG image URL */}

        {/* Schema.org JSON-LD Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Learn how TrendLite collects and protects user data.",
              "url": "https://www.trendlite.com/privacy-policy",
              "publisher": {
                "@type": "Organization",
                "name": "TrendLite"
              },
              "datePublished": "2025-05-15",
              "dateModified": "2025-05-15"
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

          <p className="mb-4 text-lg text-gray-700">
            At <strong>TrendLite</strong>, accessible at trendlite.com, we respect your privacy and are committed to protecting any personal information you may provide while using our website. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
          <p className="mb-2 text-gray-700">
            We may collect the following types of information:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>Your name and email when submitting contact forms or comments</li>
            <li>Anonymous data through cookies for analytics and user experience</li>
            <li>Browser and device information (IP address, browser type, etc.)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
          <p className="mb-2 text-gray-700">
            We use collected data to:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>Respond to your queries or feedback</li>
            <li>Improve website performance and content</li>
            <li>Analyze user behavior for better content creation</li>
          </ul>
          <p className="mb-4 text-gray-700">
            We do not sell, rent, or trade your personal information with third parties.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cookies</h2>
          <p className="mb-4 text-gray-700">
            Our site uses cookies to enhance user experience and track anonymous analytics. You can disable cookies in your browser settings if you prefer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">4. Third-Party Services</h2>
          <p className="mb-4 text-gray-700">
            We may use third-party tools like Google Analytics to monitor traffic and improve site content. These tools may collect limited information, but we ensure they comply with standard data protection policies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
          <p className="mb-2 text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>Request access to your personal data</li>
            <li>Ask us to delete or update your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mb-4 text-gray-700">
            To exercise your rights, please contact us via the form on our{" "}
            <Link href="/contact" className="text-blue-600 underline">Contact Page</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
          <p className="mb-4 text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last Updated” date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact Us</h2>
          <p className="mb-4 text-gray-700">
            If you have any questions about this Privacy Policy, you can reach us through our{" "}
            <Link href="/contact" className="text-blue-600 underline">Contact Page</Link>.
          </p>

          <p className="mt-6 text-sm text-gray-500">Last Updated: May 15, 2025</p>
        </main>

        <Footer />
      </div>
    </>
  );
}
