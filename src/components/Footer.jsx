const Footer = () => (
  <footer className="bg-gray-900 text-white text-sm py-6 mt-12">
    <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      {/* Site Info & Freepik Credit */}
      <div className="text-center sm:text-left">
        <p>© 2025 <strong>TrendLite</strong> — The pulse of Tech & Health.</p>
        <p className="text-gray-400 mt-1">
          AI-generated images by{' '}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            Freepik
          </a>
        </p>
      </div>

      {/* Navigation */}
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Privacy Policy", path: "/privacy-policy" }
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded px-2 py-1"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  </footer>
);

export default Footer;
