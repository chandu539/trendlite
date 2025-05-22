const Footer = () => (
  <footer className="bg-gray-800 mt-12 p-6 text-center text-sm text-white">
    <p className="text-base font-semibold">
      TrendLite – The pulse of Tech & Health. Stay informed, stay healthy.
    </p>

    <div className="mt-3 space-x-4">
      <a href="/" className="hover:text-yellow-300">Home</a>
      <a href="/tech" className="hover:text-yellow-300">Tech</a>
      <a href="/health" className="hover:text-yellow-300">Health</a>
      <a href="/about" className="hover:text-yellow-300">About</a>
      <a href="/contact" className="hover:text-yellow-300">Contact</a>
      <a href="/privacy-policy" className="hover:text-yellow-300">Privacy Policy</a>
      <a href="/disclaimer" className="hover:text-yellow-300">Disclaimer</a>

      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="inline-flex items-center hover:text-yellow-300"
      >
        <svg
          className="h-5 w-5 mr-1 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.098 2.797.142v3.24l-1.918.001c-1.505 0-1.797.716-1.797 1.766v2.316h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.598 1.324-1.334V1.333C24 .598 23.404 0 22.675 0z" />
        </svg>
        Facebook
      </a>
    </div>

    <div className="mt-4">
      <p>📩 Email: contact@trendlite.com</p>
    </div>

    <p className="mt-4 text-gray-400">
      © 2025 TrendLite. All rights reserved.
    </p>
  </footer>
);

export default Footer;
