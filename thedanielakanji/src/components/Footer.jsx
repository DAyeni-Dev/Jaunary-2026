import { NavLink } from "react-router-dom";

function Footer() {
  const footerLinkClass = ({ isActive }) =>
    `transition ${
      isActive ? "text-[#FF9A4A] font-semibold" : "text-gray-300 hover:text-[#FF9A4A]"
    }`;

  return (
    <footer
      className="mt-20 text-white"
      style={{ backgroundColor: "#132347" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <p className="text-lg font-semibold" style={{ color: "#FF9A4A" }}>
              Daniel Akanji
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Strategic Public Relations and Communications for brands and business owners/leaders.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <NavLink to="/" className={footerLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={footerLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={footerLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/book" className={footerLinkClass}>
              Book Consultation
            </NavLink>
          </nav>
        </div>

        <div className="pt-4 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Daniel Akanji. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
