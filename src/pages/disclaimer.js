import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>Disclaimer | TrendLite - The Pulse of Tech & Life</title>
        <meta
          name="description"
          content="Read the disclaimer for TrendLite regarding informational content, third-party links, affiliate programs, and content accuracy."
        />
        <meta
          name="keywords"
          content="Disclaimer, TrendLite, content responsibility, liability, affiliate disclosure, image credit, AI images"
        />
        <meta name="author" content="TrendLite Team" />
        <link rel="canonical" href="https://www.trendlite.online/disclaimer" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Disclaimer | TrendLite - The Pulse of Tech & Life" />
        <meta property="og:description" content="Understand the scope of liability and responsibilities for content shared on TrendLite." />
        <meta property="og:url" content="https://www.trendlite.online/disclaimer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.trendlite.online/logo.webp" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Disclaimer | TrendLite" />
        <meta name="twitter:description" content="Disclaimer about content accuracy, third-party links, and AI-generated assets on TrendLite." />
        <meta name="twitter:image" content="https://www.trendlite.online/logo.webp" />

        {/* Schema.org JSON-LD Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Disclaimer",
              "description": "Disclaimer outlining limitations of liability, image usage, AI content, and affiliate disclaimers for TrendLite.",
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
          <p className="mb-4 text-lg leading-relaxed">Last updated: May 15, 2025</p>

          <p className="mb-6 text-lg leading-relaxed">
            The content provided by TrendLite (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is for general informational and educational purposes only. While we strive to provide up-to-date and accurate information, we make no warranties of any kind, expressed or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
          <p className="mb-6">
            This website may contain links to other websites or content belonging to third parties. These external links are provided for convenience and information purposes only. We do not control or endorse the content of these third-party websites and are not responsible for their practices or reliability.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate & Advertisement Disclaimer</h2>
          <p className="mb-6">
            Some of the links on this website may be affiliate links, meaning we may earn a small commission if you click on them and make a purchase at no additional cost to you. We may also display ads through platforms like Google AdSense. These advertisements are provided by third-party networks, and we are not responsible for the content or claims made by these advertisers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Image and Media Credits</h2>
          <p className="mb-6">
            Images and graphics used on this website are either:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>AI-generated for illustrative purposes</li>
              <li>Sourced from royalty-free platforms like <a href="https://www.unsplash.com" className="text-blue-600 underline" target="_blank">Unsplash</a> and <a href="https://www.freepik.com" className="text-blue-600 underline" target="_blank">Freepik</a></li>
            </ul>
          <p> All assets are used under the appropriate licenses and credit is given where required.</p>
          

          <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Responsibility</h2>
          <p className="mb-6">
            By using this website, you acknowledge your personal responsibility for any decisions or actions you take based on the information found on the site. We shall not be held responsible for any outcomes or consequences resulting from such actions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">No Professional Advice</h2>
          <p className="mb-6">
            All information presented is for general informational purposes only. It should not be considered professional advice of any kind (medical, legal, financial, etc.). Always consult with a qualified professional before making decisions based on content from this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall TrendLite, its team members, or contributors be held liable for any indirect or consequential loss or damage arising from your use of the website or reliance on the content provided herein.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions regarding this disclaimer or require further information, please contact us at:
            <br />
            <a href="mailto:chchandu554@gmail.com" className="text-blue-600 underline">support@trendlite.online</a>
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
