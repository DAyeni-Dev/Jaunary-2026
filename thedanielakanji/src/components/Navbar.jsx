import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-700 w-full">
      <nav className="max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Daniel Akanji
        </Link>

        <div className="flex items-center space-x-6 gap-15">
          <Link to="/about" className="text-white hover:opacity-80">
            About
          </Link>
          <Link to="/contact" className="text-white hover:opacity-80">
            Contact
          </Link>

          <Link
            to="/book"
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition"
          >
            Book Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
