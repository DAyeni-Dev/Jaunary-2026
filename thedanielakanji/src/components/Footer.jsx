function Footer() {

  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Daniel Akanji. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;