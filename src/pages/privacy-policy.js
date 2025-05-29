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
        <link rel="canonical" href="https://www.trendlite.com/privacy-policy" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Privacy Policy | TrendLite - The Pulse of Tech &amp; Life"
        />
        <meta
          property="og:description"
          content="Learn how TrendLite collects, uses, and safeguards your personal data. Your privacy is our priority."
        />
        <meta property="og:url" content="https://www.trendlite.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.trendlite.com/Trendlite-privacy-og.jpg"
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
          content="https://www.trendlite.com/Trendlite-privacy-og.jpg"
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

        <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="mb-4 text-lg leading-relaxed">
            Last updated: May 15, 2025
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            This Privacy Policy describes Our policies and procedures on the collection,
            use, and disclosure of Your information when You use the TrendLite website and
            services, and informs You about Your privacy rights and how the law protects You.
            By using TrendLite, You agree to the collection and use of information in
            accordance with this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Interpretation</h3>
          <p className="mb-4">
            Words with the initial letter capitalized have meanings defined under the
            following conditions. These definitions apply whether they appear in singular or plural.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
          <p className="mb-4">
            For the purposes of this Privacy Policy:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Company</strong> (referred to as &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;) refers to TrendLite.</li>
            <li><strong>Cookies</strong> are small files placed on Your device by a website to track browsing activity and enhance user experience.</li>
            <li><strong>Country</strong> refers to AndhraPradesh, India.</li>
            <li><strong>Device</strong> means any device such as a computer, cellphone or tablet that can access the Service.</li>
            <li><strong>Personal Data</strong> means any information relating to an identified or identifiable individual.</li>
            <li><strong>Service</strong> refers to the TrendLite website accessible at <code>https://www.trendlite.online</code>.</li>
            <li><strong>Service Provider</strong> means third-party companies or individuals employed by the Company to facilitate the Service.</li>
            <li><strong>Usage Data</strong> refers to data collected automatically from the Service, such as IP address, browser type, and pages visited.</li>
            <li><strong>You</strong> means the individual or entity accessing or using the Service.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Types of Data Collected</h3>

          <h4 className="font-semibold mt-4 mb-2">Personal Data</h4>
          <p className="mb-4">
            While using Our Service, We may ask You to provide certain personally identifiable information that can be used to contact or identify You. This includes:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Email address</li>
            <li>Name</li>
            <li>Any other information you provide through contact forms or comments</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Usage Data</h4>
          <p className="mb-4">
            Usage Data is collected automatically and may include your IP address, browser type, version, the pages you visit, time and date of visit, time spent on pages, device identifiers, and other diagnostic data.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Tracking Technologies and Cookies</h4>
          <p className="mb-4">
            We use Cookies and similar tracking technologies to track activity on our Service and store certain information. Cookies may be Session or Persistent cookies. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent, but refusing cookies may affect your experience on the site.
          </p>
          <p className="mb-4">
            We use Cookies for:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Essential Cookies: Necessary for the operation of our Service and to prevent fraudulent use.</li>
            <li>Cookies Policy Acceptance: To remember if you have accepted our cookies policy.</li>
            <li>Functionality Cookies: To remember your preferences like language and login details.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Your Personal Data</h2>
          <p className="mb-4">
            We use your Personal Data for the following purposes:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>To provide and maintain our Service, including monitoring its usage.</li>
            <li>To manage your Account and registration.</li>
            <li>To contact You with updates, security alerts, or administrative messages.</li>
            <li>To provide You with news, special offers, and information about products and services similar to those you have expressed interest in, unless you opt out.</li>
            <li>To respond to your inquiries and manage your requests.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p className="mb-4">
            We may use third-party service providers such as Google Analytics to monitor and analyze the use of our Service. These providers have access to limited information needed to perform their functions and are required to protect your data in accordance with applicable laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw your consent to data processing where applicable.</li>
            <li>Object to or restrict the processing of your personal data.</li>
            <li>Request data portability.</li>
          </ul>
          <p className="mb-6">
            To exercise these rights, please contact us at <a href="mailto:privacy@trendlite.com" className="text-blue-600 underline">privacy@trendlite.com</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="mb-6">
            Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and believe your child has provided us personal data, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@trendlite.com" className="text-blue-600 underline">support@trendlite.com</a>.
          </p>

         <div className="text-center mt-10">
          <Link href="/" className="text-blue-600 underline">
            ← Back to Home
          </Link>
        </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
