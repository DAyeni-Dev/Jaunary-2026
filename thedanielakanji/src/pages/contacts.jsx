import React, { useState } from "react";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start px-6 py-16"
      style={{ backgroundColor: "#0E1D34", color: "#FFFFFF" }}
    >
      <h1 className="text-3xl font-semibold mb-8" style={{ color: "#FF9A4A" }}>
        Contact Daniel Akanji
      </h1>

      <p className="max-w-xl text-center text-sm text-gray-200 mb-4">
        For consulting, collaborations, speaking engagements, or media-related
        inquiries, please fill out the form below or connect via social media.
      </p>

      <p className="max-w-xl text-center text-xs text-gray-300 mb-10">
        Daniel typically responds within 24–48 hours on business days.
      </p>

      {/* Contact Form */}
      <motion.div 
        className="w-full max-w-xl bg-[#152a4a] p-8 rounded-lg shadow-lg mb-16"
        {...sectionAnimation}
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Send a Message</h2>
        
        {success ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-medium text-[#FF9A4A] mb-2">Message Sent!</h3>
            <p className="text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-4 px-6 py-2 bg-transparent border border-[#FF9A4A] text-[#FF9A4A] rounded hover:bg-[#FF9A4A] hover:text-[#0E1D34] transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded text-sm text-center">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-[#0E1D34] border border-gray-700 focus:border-[#FF9A4A] focus:outline-none text-white transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-[#0E1D34] border border-gray-700 focus:border-[#FF9A4A] focus:outline-none text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-sm text-gray-300">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#0E1D34] border border-gray-700 focus:border-[#FF9A4A] focus:outline-none text-white transition-colors"
                placeholder="Topic of discussion"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded bg-[#0E1D34] border border-gray-700 focus:border-[#FF9A4A] focus:outline-none text-white transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-4 rounded font-semibold text-[#0D1932] bg-[#FF9A4A] hover:bg-[#ff8f36] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

      <section className="w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold mb-4">Or Connect via Social Media</h2>
        <div className="flex flex-wrap justify-center gap-8">

          <motion.a
            href="https://www.instagram.com/thedanielakanji"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-[#E1306C]"
              fill="currentColor"
            >
              <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3.5A4.5 4.5 0 0 0 7.5 12 4.5 4.5 0 0 0 12 16.5 4.5 4.5 0 0 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 0 1 14.5 12 2.5 2.5 0 0 1 12 14.5 2.5 2.5 0 0 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM18 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
            </svg>
            <span className="font-medium">Instagram</span>
            <span className="text-xs text-gray-300">@thedanielakanji</span>
          </motion.a>

          <motion.a
            href="https://x.com/TheDanielAkanji"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-black"
              fill="currentColor"
            >
              <path d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Z" />
            </svg>
            <span className="font-medium">X</span>
            <span className="text-xs text-gray-300">@TheDanielAkanji</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/the-daniel-akanji-931276198"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-[#0A66C2]"
              fill="currentColor"
            >
              <path d="M4 8h4v12H4zM6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 6h4v2c.6-1.2 2-2.2 4-2.2 4 0 4 3 4 6v6h-4v-5c0-1.2 0-3-2-3s-2 1.6-2 3v5h-4Z" />
            </svg>
            <span className="font-medium">LinkedIn</span>
            <span className="text-xs text-gray-300">the-daniel-akanji-931276198</span>
          </motion.a>

          <motion.a
            href="https://wa.me/2347010025486"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-[#25D366]"
              fill="currentColor"
            >
              <path d="M12 2C6.5 2 2 6.1 2 11c0 1.7.5 3.3 1.4 4.7L2 22l6-1.9c1.2.4 2.4.6 3.6.6 5.5 0 10-4.1 10-9s-4.5-9-10-9zm0 16.1c-1.1 0-2.3-.3-3.3-.7l-.3-.1-3.5 1.1 1.1-3.3-.2-.3C5.2 13.7 4.8 12.3 4.8 11 4.8 7.6 8 5 12 5s7.2 2.6 7.2 6-3.2 7.1-7.2 7.1zm3-5.3c-.2-.1-1.1-.6-1.2-.6-.2-.1-.3-.1-.5.1-.1.2-.4.6-.5.7-.1.1-.2.1-.4 0-.8-.3-1.5-.9-2.1-1.7-.1-.2-.1-.3 0-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.4.1-.5.2-.5.5-.8 1.2-.8 1.9 0 .2 0 .5.1.7.4 1.3 1.3 2.3 2.4 3 .9.6 1.6.8 2.1.9.2 0 .4 0 .5 0 .2 0 .5-.2.6-.4.2-.3.3-.7.3-.8 0-.1 0-.2-.2-.3z" />
            </svg>
            <span className="font-medium">WhatsApp</span>
            <span className="text-xs text-gray-300">+234 701 002 5486</span>
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://tiktok.com/@thedanielakanji"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-[#69C9D0]"
              fill="currentColor"
            >
              <path d="M9 13a3 3 0 1 0 3 3V5h2c.4 2 2 3 4 3v2c-1.5 0-3-.5-4-1.5V16a5 5 0 1 1-5-5Z" />
            </svg>
            <span className="font-medium">TikTok</span>
            <span className="text-xs text-gray-300">@thedanielakanji</span>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/1DPx3fpRU9/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-[#1877F2]"
              fill="currentColor"
            >
              <path d="M13 6h3V3h-3a4 4 0 0 0-4 4v2H7v3h2v9h3v-9h3l1-3h-4V7a1 1 0 0 1 1-1Z" />
            </svg>
            <span className="font-medium">Facebook</span>
            <span className="text-xs text-gray-300">Daniel Akanji</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:akanjidaniel03@gmail.com"
            className="flex flex-col items-center gap-2 text-sm"
            {...sectionAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-[#EA4335]"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="font-medium">Email</span>
            <span className="text-xs text-gray-300">akanjidaniel03@gmail.com</span>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
