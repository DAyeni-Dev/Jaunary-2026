import { motion } from "framer-motion"; 
import danielImage from "../assets/The-daniel-Akanji.jpeg";

const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function About() {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      
      <section
        className="bg-blue-900 text-white py-24"
        style={{ backgroundColor: "#0D1932" }}
      >
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
          
          <div className="shrink-0">
            <img
              src={danielImage}
              alt="Daniel Akanji"
              className="rounded-lg object-cover w-64 h-64 md:w-80 md:h-80"
            />
          </div>

          <motion.section {...sectionAnimation}>
            <div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: "#FF9A4A" }}>
                About Daniel Akanji
              </h1>
              <p className="text-lg max-w-3xl" style={{ color: "#FFFFFF" }}>
                A detail-oriented Public Relations and communications professional driven by excellence,
                integrity, and purposeful impact.
              </p>
              <ul className="mt-4 space-y-2 text-lg" style={{ color: "#FFFFFF" }}>
  <li>Experience across government, corporate, and media spaces</li>
  <li>Focused on reputation, strategy, and storytelling</li>
</ul>
            </div>
          </motion.section>
        </div>
      </section>

      <motion.section {...sectionAnimation} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: "#FF9A4A" }}
          >
            Professional Philosophy
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Excellence",
                text: "Daniel approaches every assignment with precision and intentionality, ensuring the highest standards.",
              },
              {
                title: "Passion",
                text: "His passion for Public Relations and communication translates into thoughtful strategies aligned with brand identity.",
              },
              {
                title: "Integrity",
                text: "Every engagement is handled with discretion, professionalism, and trust.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-lg shadow-sm"
                style={{ backgroundColor: "#F5F5F5", color: "#000000" }}
              >
                <h3
                  className="font-semibold text-lg mb-3"
                  style={{ color: "#FF9A4A" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            A Communicator Rooted in Excellence
          </h2>
         <p style={{ color: "#0E1D34" }} className="leading-relaxed mb-4">
  Daniel Akanji is a passionate and highly detail-oriented Public
  Relations and Communications professional. Known for his strong work
  ethic and commitment to excellence, Daniel approaches every task
  with intentionality, precision, and a deep sense of responsibility.
</p>
<p style={{ color: "#0E1D34" }} className="leading-relaxed">
  His work is guided by the belief that communication should be clear,
  strategic, and impactful.
</p>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            What I Do
          </h2>
          <div className="grid gap-6 md:grid-cols-3" style={{ color: "#0E1D34" }}>
            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <h3 className="font-semibold mb-2">PR & Media Strategy</h3>
              <p className="text-sm">
                Designing communication strategies that align with brand identity and goals.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <h3 className="font-semibold mb-2">Event Communications</h3>
              <p className="text-sm">
                Consulting, planning, managing, and visibility for conferences, concerts, and campaigns.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <h3 className="font-semibold mb-2">Reputation Management</h3>
              <p className="text-sm">
                Supporting brands, organisation, individuals and institutions with thoughtful and value-driven communication.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-10" style={{ color: "#FF9A4A" }}>
            Government & Corporate Experience
          </h2>

          <div className="space-y-6" style={{ color: "#0E1D34" }}>
  <div className="p-4 rounded-lg" style={{ backgroundColor: "#F5F5F5" }}>
    <h3 className="font-semibold text-lg">
      Personal Assistant – Office of the Special Adviser to the Governor of Oyo State
    </h3>
    <p className="text-sm text-gray-700"> Housing and Urban Development | Oyo State Housing Corporation</p>
    <p className="mt-2">
      Daniel served as Personal Assistant to Hon. Olakunle Akinsete, Special Adviser
                to Governor Seyi Makinde on Housing and Urban Development. In this
                role, he supported high-level administrative operations,
                stakeholder engagement, and strategic communication within a
                government environment. 

    </p >
    <p className="mt-2">Also managed his schedule and media relations</p>
  </div>

  <div className="p-4 rounded-lg" style={{ backgroundColor: "#F5F5F5" }}>
    <h3 className="font-semibold text-lg">
      Lagos State Internal Revenue Service (LIRS)
    </h3>
    <p className="text-sm text-gray-700">Human Resource Mangaement</p>
    <p className="mt-2">
      Daniel has also worked with the Lagos State Internal Revenue Service, HR Unit
                contributing to structured public communication and institutional
                engagement within the employees of the organization.

    </p>
  </div>
</div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-10" style={{ color: "#FF9A4A" }}>
            Events & Media 
          </h2>

          <div className="grid gap-6 md:grid-cols-2" style={{ color: "#0E1D34" }}>
            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Concert & Worship Event
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Ibadan City Praise
              </h3>
              <p className="text-sm">
                Planning committee member supporting event coordination and communications.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Music Tour
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Davido’s “5 Alive Tour”
              </h3>
              <p className="text-sm">
                Part of the PR team, supporting visibility and audience engagement.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Expo & Conference
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Nigerian Photo Cinema Expo
              </h3>
              <p className="text-sm">
                PR support to highlight key sessions, partners, and creative talents.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Conference & Gathering
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Ekabo Africa
              </h3>
              <p className="text-sm">
                PR team member helping shape messaging and event communication.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Conference
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Unriddled Conference
              </h3>
              <p className="text-sm">
                PR support to drive awareness and attendance for the conference.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Influencer & Cinema Campaign
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Filmhouse Cinema
              </h3>
              <p className="text-sm">
                Influencer marketing and media amplification for cinema campaigns.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Government Event
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Oyo State Real Estate Conference
              </h3>
              <p className="text-sm">
                Media team role, supporting coverage and stakeholder communication.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#FF9A4A" }}>
                Concert
              </p>
              <h3 className="font-semibold text-sm mb-1">
                Babatunmise Live in Concert (BLIC)
              </h3>
              <p className="text-sm">
                Planning committee member with focus on communications and event experience.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            Trusted by Leaders & Institutions
          </h2>
          <p style={{ color: "#0E1D34" }} className="leading-relaxed">
            Daniel has worked closely with kings, traditional rulers, and other
            respected dignitaries across Oyo State. His professionalism, discretion,
            and cultural intelligence have earned him trust in high-level and
            sensitive engagements.

          </p>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            Service Beyond Professional Work
          </h2>
          <p style={{ color: "#0E1D34" }} className="leading-relaxed">
            Beyond corporate and government work, Daniel actively volunteers for
            rural and urban outreach programs as well as mission work. His
            commitment to service reflects his belief that true impact goes
            beyond visibility and recognition.
            </p>
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="bg-blue-900 text-white py-20"
        style={{ backgroundColor: "#132347" }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: "#FF9A4A" }}>
            Why Work With Daniel Akanji
          </h2>

          <ul
            className="space-y-4 list-disc list-inside"
            style={{ color: "#FFFFFF" }}
          >
            <li>Detail-oriented with a strong culture of excellence</li>
            <li>Proven experience across government, corporate, and media spaces</li>
            <li>Trusted by leaders, institutions, and creatives</li>
            <li>Purpose-driven, people-focused, and values-led</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
  {...sectionAnimation}
  className="py-16"
  style={{ backgroundColor: "#FFFFFF" }}
>
  <div className="max-w-5xl mx-auto px-8 text-center">
    <h2 className="text-3xl font-semibold mb-4" style={{ color: "#FF9A4A" }}>
      Ready to Work Together?
    </h2>
    <p className="mb-6" style={{ color: "#0E1D34" }}>
      If you are a brand owner, individual/cooperate brand, organization looking for
      thoughtful PR and communication support, Daniel is available for consulting,
      collaborations, and long-term engagements.
    </p>
    <a
      href="/contact"
      className="inline-block px-8 py-3 rounded-md font-semibold"
      style={{ backgroundColor: "#FF9A4A", color: "#0D1932" }}
    >
      Contact Daniel
    </a>
  </div>
</motion.section>

    </main>
  );
}
