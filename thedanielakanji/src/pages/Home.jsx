import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard"; 
import danielImage from "../assets/The-daniel-Akanji.jpeg";

const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "Who is this service best suited for?",
      answer:
        "Business owners, corporate professionals, public figures, and anyone who cares about how they are perceived and communicated with in public.",
    },
    {
      question: "Do you work with organizations or only individuals?",
      answer:
        "Daniel supports both individuals and organizations, tailoring each engagement to the size, structure, and communication needs of the client.",
    },
    {
      question: "What happens after I send a booking request?",
      answer:
        "You’ll receive a follow-up email with next steps and, where relevant, a proposed time and structure for your consultation session.",
    },
    {
      question: "Can engagements be fully remote?",
      answer:
        "Yes. Consultations and strategy sessions can be held virtually, making it easy to work together regardless of location and time zone.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      
      <motion.section
        {...sectionAnimation}
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{ backgroundColor: "#F5F5F5", color: "#000000" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight"
            style={{ color: "#FF9A4A" }}
          >
            Elevating Brands through Strategic Public Relations & Purposeful Communication
          </h1>

          <p
            className="mt-6 text-lg max-w-2xl"
            style={{ color: "#000000" }}
          >
            For business owners, public figures, and organizations demanding clarity, integrity, and impact. Led by Daniel Akanji, Founder of Insight & Influence Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/book"
              className="px-8 py-4 rounded-md font-medium"
              style={{ backgroundColor: "#FF9A4A", color: "#132347" }}
            >
              Book a Consultation
            </a>
            <a
              href="/about"
              className="px-8 py-4 rounded-md border font-medium"
              style={{ borderColor: "#132347", color: "#132347" }}
            >
              Learn More About Daniel
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#FF9A4A" }}
            >
              Why Daniel Akanji Is the Right Fit for Your Brand
            </h2>
            <p style={{ color: "#000000" }} className="leading-relaxed mb-4">
              Daniel Akanji is a seasoned Public Relations and Communications
              consultant with a deep understanding of brand perception,
              stakeholder engagement, and reputation management.
            </p>
            <p style={{ color: "#000000" }} className="leading-relaxed">
              He works closely with business owners and public personalities
              to craft narratives that inspire trust and authority.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={danielImage}
              alt="Daniel Akanji"
              className="rounded-lg object-cover w-full h-full max-h-96 md:max-h-125"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="py-16"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF9A4A" }}
          >
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Public Relations Strategy",
                text: "Custom-tailored communication blueprints that bridge the gap between your brand's vision and public perception.",
              },
              {
                title: "Corporate Communications",
                text: "Building resilient communication frameworks that foster trust, clarity, and consistency with every stakeholder.",
              },
              {
                title: "Event Consultation",
                text: "Expert oversight for high-stakes events, ensuring every detail amplifies your message and brand identity.",
              },
              {
                title: "Reputation Management",
                text: "Proactive guardianship of your brand’s integrity, turning public sentiment into a long-term asset.",
              },
              {
                title: "Crisis Communications",
                text: "Calm, strategic guidance during critical moments to protect your narrative and restore confidence.",
              },
              {
                title: "Media Relations",
                text: "Leveraging deep media networks to secure meaningful coverage that tells your story accurately and effectively.",
              },
            ].map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                text={service.text}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF9A4A" }}
          >
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "PeculiarViews",
                text: "Daniel’s strategic approach completely transformed how our brand communicates with the public.",
              },
              {
                name: "The TSI Company",
                text: "Professional, insightful, and deeply intentional. Highly recommended.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg shadow-sm"
                style={{ backgroundColor: "#F5F5F5", color: "#000000" }}
              >
                <p className="mb-4">“{testimonial.text}”</p>
                <span className="font-semibold text-sm" style={{ color: "#FF9A4A" }}>
                  — {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="py-16"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF9A4A" }}
          >
            Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg shadow-sm bg-white">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#FF9A4A" }}>
                Strengthening a Growing Brand’s Public Image
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                A creative brand needed to clarify its messaging and improve how it
                showed up publicly.
              </p>
              <p className="text-sm text-gray-700">
                Through a refreshed PR strategy and consistent communication support,
                the brand improved audience trust and engagement across channels.
              </p>
              <p className="font-semibold text-lg mb-2" style={{ color: "#FF9A4A" }}>-Regent Villa</p>
            </div>

            <div className="p-8 rounded-lg shadow-sm bg-white">
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#FF9A4A" }}>
                Guiding a Professional Through Reputation Management
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                A corporate professional needed support navigating a sensitive
                communication situation.
              </p>
              <p className="text-sm text-gray-700">
                With a structured communication plan and careful messaging, they were
                able to maintain credibility and move forward confidently.
              </p>
                <p className="font-semibold text-lg mb-2" style={{ color: "#FF9A4A" }}>-The Event Mistress</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF9A4A" }}
          >
            How the Process Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <span className="text-sm font-semibold" style={{ color: "#FF9A4A" }}>
                Step 1
              </span>
              <h3 className="font-semibold text-lg mt-2 mb-2">
                Book a consultation
              </h3>
              <p className="text-sm text-gray-700">
                Share your goals, current challenges, and where you need the most PR and
                communication support.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <span className="text-sm font-semibold" style={{ color: "#FF9A4A" }}>
                Step 2
              </span>
              <h3 className="font-semibold text-lg mt-2 mb-2">
                Receive a tailored plan
              </h3>
              <p className="text-sm text-gray-700">
                Daniel develops a clear approach aligned with your brand, audience,
                and reputation goals.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <span className="text-sm font-semibold" style={{ color: "#FF9A4A" }}>
                Step 3
              </span>
              <h3 className="font-semibold text-lg mt-2 mb-2">
                Implement and refine
              </h3>
              <p className="text-sm text-gray-700">
                Work together to roll out the strategy, refine messaging, and monitor
                results over time.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="py-16"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#FF9A4A" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <span
                      className="font-semibold text-sm md:text-base"
                      style={{ color: "#132347" }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="ml-4 text-xl leading-none"
                      style={{ color: "#FF9A4A" }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
