import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatus(result.message);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Us | TrendLite - Connect with Our Team</title>
        <meta
          name="description"
          content="Get in touch with the TrendLite team for feedback, collaborations, or any inquiries. We're here to connect with our readers and partners."
        />
        <meta name="keywords" content="Contact TrendLite, Contact English Blog, Feedback, Collaboration, TrendLite Team" />
        <meta name="author" content="TrendLite Team" />

        {/* Open Graph (OG) Tags for Social Sharing */}
        <meta property="og:title" content="Contact Us | TrendLite" />
        <meta property="og:description" content="Reach out to TrendLite for feedback, partnerships, or any questions. We'd love to hear from you!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trendlite.online/contact" />
        <meta property="og:image" content="https://www.trendlite.online/logo.webp" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.trendlite.online/contact" />
      </Head>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-12 flex justify-center items-center">
        <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">Get in Touch</h1>
          <p className="text-center text-gray-500 mb-6">
            We&apos;d love to hear from you! Whether it&apos;s feedback, collaboration, or just a hello.
          </p>

          {submitted && (
            <div className="mb-4 text-green-600 font-semibold text-center">
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
      <div className="text-center mt-10">
        <Link href="/" className="text-blue-600 ">
          ← Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
}
