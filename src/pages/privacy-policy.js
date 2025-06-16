import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TrendLite - The Pulse of Tech &amp; Life</title>
        <meta
          name="description"
          content="This Privacy Policy explains how TrendLite collects, uses, and protects your personal data while you use our website and services."
        />
        <meta
          name="keywords"
          content="Privacy Policy, TrendLite, Data Protection, Cookies, User Rights, English Blogs"
        />
        <meta name="author" content="TrendLite Team" />
        <link rel="canonical" href="https://www.trendlite.online/privacy-policy" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Privacy Policy | TrendLite - The Pulse of Tech &amp; Life"
        />
        <meta
          property="og:description"
          content="Learn how TrendLite collects, uses, and safeguards your personal data. Your privacy is our priority."
        />
        <meta property="og:url" content="https://www.trendlite.online/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.trendlite.online/logo.webp"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | TrendLite" />
        <meta
          name="twitter:description"
          content="Read about how TrendLite protects your data and respects your privacy."
        />
        <meta
          name="twitter:image"
          content="https://www.trendlite.online/logo.webp"
        />

        {/* Schema.org JSON-LD Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Learn how TrendLite collects and protects user data.",
              "url": "https://www.trendlite.online/privacy-policy",
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

        <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
  <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
  <p className="mb-4 text-lg leading-relaxed">Last updated: May 15, 2025</p>

  <p className="mb-6 text-lg leading-relaxed">
    This Privacy Policy outlines how TrendLite (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects the personal data of our visitors (&quot;you&quot; or &quot;your&quot;) while browsing our website <a href="https://www.trendlite.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.trendlite.online</a>. By using our website, you agree to the practices described in this policy.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>

  <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information</h3>
  <p className="mb-4">
    We may collect personal information such as your name and email address when you contact us via forms or subscribe to newsletters.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">Usage Data</h3>
  <p className="mb-4">
    Usage data may include information such as your device&apos;s IP address, browser type, operating system, referring URLs, page views, and time spent on our pages. We use this data to analyze user behavior and improve our content.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
  <p className="mb-4">
    We use cookies to enhance user experience, store preferences, and gather anonymous usage statistics. You can modify your browser settings to refuse cookies, but this may limit functionality.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
  <p className="mb-4">
    We may use tools like Google Analytics to monitor website traffic. These tools may collect data through cookies to provide reports and analytics. We do not share your personal data with these services.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Use of AI-Generated and Free Images</h2>
  <p className="mb-4">
    We use freely available images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Unsplash</a> and AI-generated resources from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Freepik</a>. Credits are provided under each image as required by the respective license agreements.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
  <p className="mb-4">
    You have the right to:
  </p>
  <ul className="list-disc ml-6 mb-6">
    <li>Request access to personal data we hold about you</li>
    <li>Request correction or deletion of your data</li>
    <li>Withdraw consent where applicable</li>
    <li>Object to or restrict data processing</li>
  </ul>
  <p className="mb-6">
    To exercise these rights, contact us at <a href="mailto:chchandu554@gmail.com" className="text-blue-600 underline">chchandu554@gmail.com</a>.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
  <p className="mb-6">
    We implement security measures to protect your data; however, no method of transmission or storage over the internet is 100% secure.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
  <p className="mb-6">
    Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe your child has provided us with data, please contact us.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
  <p className="mb-6">
    We may update this Privacy Policy from time to time. Changes will be posted on this page with the &quot;Last updated&quot; date.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
  <p className="mb-6">
    If you have any questions about this Privacy Policy, feel free to email us at <a href="mailto:chchandu554@gmail.com" className="text-blue-600 underline">chchandu554@gmail.com</a>.
  </p>
</main>

        <Footer />
      </div>
    </>
  );
}
