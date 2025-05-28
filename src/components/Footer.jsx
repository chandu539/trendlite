const Footer = () => (
  <footer className="bg-gray-800 mt-12 p-6 text-white">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">

      {/* Brand Message */}
      <p className="text-center sm:text-left text-base font-semibold max-w-md mx-auto sm:mx-0">
        TrendLite – The pulse of Tech & Health. Stay informed, stay healthy.
      </p>

      {/* Navigation Links */}
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-medium">
          {["About", "Contact", "Privacy Policy", "Disclaimer"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="inline-block px-3 py-2 min-w-[44px] min-h-[44px] hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Social Media & Contact */}
    <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">

      {/* Social Media */}
      

      {/* Contact Email */}
      <p className="text-center sm:text-left break-words">
        📩 Email:{" "}
        <a
          href="mailto:contact@trendlite.com"
          className="inline-block px-3 py-2 min-w-[44px] min-h-[44px] hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
        >
          contact@trendlite.com
        </a>
      </p>
    </div>

    {/* Copyright */}
    <p className="mt-8 text-center text-gray-400 text-xs">
      © 2025 TrendLite. All rights reserved.
    </p>
  </footer>
);

export default Footer;
