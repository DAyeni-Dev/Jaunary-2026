import React from "react";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Contact() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start px-6 py-16"
      style={{ backgroundColor: "#0E1D34", color: "#FFFFFF" }}
    >
      <h1 className="text-3xl font-semibold mb-8" style={{ color: "#FF9A4A" }}>
        Contact Daniel Akanji
      </h1>

      <p className="max-w-xl text-center text-sm text-gray-200 mb-10">
        For collaborations, consulting, speaking engagements, or media-related
        inquiries, you can reach Daniel directly by phone or connect through
        any of the social platforms below.
      </p>

      <motion.section
        {...sectionAnimation}
        className="mb-10 w-full max-w-xl text-center"
      >
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p className="text-lg">
          <a href="tel:+2347010025486" style={{ color: "#FFFFFF" }}>
            +234 701 002 5486
          </a>
        </p>
      </motion.section>

      
      <section className="w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold mb-4">Social Media</h2>
        <div className="flex flex-wrap justify-center gap-8">

         
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
        </div>
      </section>
    </main>
  );
}
