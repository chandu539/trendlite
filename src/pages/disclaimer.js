import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>Disclaimer | TrendLite - The Pulse of Tech &amp; Life</title>
        <meta
          name="description"
          content="This Disclaimer outlines the limitations of liability and accuracy of information on the TrendLite website."
        />
        <meta
          name="keywords"
          content="Disclaimer, TrendLite, Content Responsibility, Website Information, Liability Limitation"
        />
        <meta name="author" content="TrendLite Team" />
        <link rel="canonical" href="https://www.trendlite.online/disclaimer" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Disclaimer | TrendLite - The Pulse of Tech &amp; Life"
        />
        <meta
          property="og:description"
          content="Understand the scope of liability and responsibilities for content shared on TrendLite."
        />
        <meta property="og:url" content="https://www.trendlite.online/disclaimer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.trendlite.online/Trendlite-disclaimer-og.webp"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Disclaimer | TrendLite" />
        <meta
          name="twitter:description"
          content="Read the disclaimer regarding the use of content and information on TrendLite."
        />
        <meta
          name="twitter:image"
          content="https://www.trendlite.online/Trendlite-disclaimer-og.webp"
        />

        {/* Schema.org JSON-LD Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Disclaimer",
              "description": "Disclaimer outlining limitations of liability and content responsibility on TrendLite.",
              "url": "https://www.trendlite.online/disclaimer",
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
          <h1 className="text-4xl font-bold mb-6 text-center">Disclaimer</h1>
          <p className="mb-4 text-lg leading-relaxed">
            Last updated: May 15, 2025
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            The information provided by TrendLite (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on our website is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Site.
          </p>


          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
          <p className="mb-6">
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, or completeness by us.
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Responsibility</h2>
          <p className="mb-6">
            You acknowledge that you are using our website voluntarily and that any choices, actions, and results now and in the future are solely your responsibility. We will not be liable to you or any other party for any decision made or action taken in reliance on the information provided on the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Disclaimer</h2>
          <p className="mb-6">
            The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. We encourage you to consult with the appropriate professionals before taking any actions based on such information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall TrendLite be liable for any indirect, incidental, special, consequential or punitive damages arising out of your access to, or use of, or inability to access or use the Site or any materials or content available through the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions regarding this Disclaimer, you may contact us at:
            <br />
            <a href="mailto:contact@chchandu554@gmail.com" className="text-blue-600 underline">contact@trendlite.online</a>
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
