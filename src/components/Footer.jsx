const Footer = () => (
  <footer className="bg-gray-900 text-white text-sm py-6 mt-12">
    <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">

      {/* Site Info */}
      <p className="text-center sm:text-left">
        © 2025 <strong>TrendLite</strong> — The pulse of Tech & Health.
      </p>

      {/* Navigation */}
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center gap-4">
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
