import { useState } from "react";
import { motion } from "framer-motion";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { validateName, validateEmail } from "../utils/validation";

const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    categoryOther: "",
    service: "",
    serviceOther: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const { loading, success, submitForm } = useFormSubmit('/api/bookings');

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    !validateEmail(formData.email) &&
    formData.category.trim() &&
    (formData.category !== "Other" || formData.categoryOther.trim()) &&
    formData.service.trim() &&
    (formData.service !== "Other" || formData.serviceOther.trim()) &&
    formData.message.trim();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    if (!formData.category.trim())
      newErrors.category = "Please select a category";
    if (formData.category === "Other" && !formData.categoryOther.trim())
      newErrors.categoryOther = "Please specify your category";
    if (!formData.service.trim())
      newErrors.service = "Please select a service";
    if (formData.service === "Other" && !formData.serviceOther.trim())
      newErrors.serviceOther = "Please specify your service of interest";
    if (!formData.message.trim())
      newErrors.message = "Please provide a brief message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const emailConfig = {
      serviceId: "service_2ld1mqk",
      publicKey: "d-yO8sfsteJA757u0",
      adminTemplate: "template_0m9r2xv",
      adminData: {
        from_name: formData.name,
        from_email: formData.email,
        category: formData.category === "Other" ? formData.categoryOther : formData.category,
        service: formData.service === "Other" ? formData.serviceOther : formData.service,
        message: formData.message,
      },
      clientTemplate: "template_n6l7nva",
      clientData: {
        to_name: formData.name,
        to_email: formData.email,
        from_name: formData.name,
        to_service: formData.service === "Other" ? formData.serviceOther : formData.service,
        message: formData.message,
      },
    };

    const isSubmitted = await submitForm(formData, emailConfig);

    if (isSubmitted) {
      setFormData({
        name: "",
        email: "",
        category: "",
        categoryOther: "",
        service: "",
        serviceOther: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <main className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="mb-8 px-4 py-3 rounded-md border text-sm"
          style={{ borderColor: "#FF9A4A", backgroundColor: "#FFF5EC", color: "#132347" }}
        >
          <span className="font-semibold" style={{ color: "#FF9A4A" }}>
            How to book:
          </span>{" "}
          <span>
            Choose the option that works best for you: book directly via Calendly
            or send a request using the form.
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <motion.section {...sectionAnimation}>
          <h1 className="text-4xl font-bold mb-6 text-[#FF9A4A]">
            Book a Consultation
          </h1>

          <p className="text-gray-700 mb-10 leading-relaxed">
            This private consultation is designed to help you gain clarity on
            your communication challenges, brand positioning, and reputation
            strategy.
          </p>

          <ul className="space-y-6 text-[#B7743F]">
            <li>
              <span className="font-semibold">What to expect</span>
              <p className="text-gray-600">
                A focused, one-on-one discussion tailored to your needs.
              </p>
            </li>
            <li>
              <span className="font-semibold">Who it’s for</span>
              <p className="text-gray-600">
                Business owners,Individuals, corporate professionals, and public figures.
              </p>
            </li>
            <li>
              <span className="font-semibold">Duration</span>
              <p className="text-gray-600">30–60 minutes depending on scope.</p>
            </li>
            <li>
              <span className="font-semibold">Confidentiality</span>
              <p className="text-gray-600">
                All conversations are handled professionally.
              </p>
            </li>
          </ul>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-[#FF9A4A] mb-4">
              Prefer to book instantly?
            </h2>
            <p className="text-gray-600 mb-8">
              Choose a time that works for you and secure your session
              immediately.
            </p>

            <div className="w-full h-125 border rounded-lg overflow-hidden">
              <iframe
                src="https://calendly.com/akanjidaniel03"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Booking"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          {...sectionAnimation}
          className="bg-[#FFFFFF] border border-[#132347]/10 p-8 md:p-10 rounded-xl shadow-sm"
        >
          {!success ? (
            <>
              <h2 className="text-2xl font-semibold mb-2 text-[#FF9A4A]">
                Request a Consultation
              </h2>
              <p className="text-sm text-gray-500 mb-6 italic">
                Note: All fields are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email"].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-2 capitalize">
                      {field === "name" ? "Full Name" : "Email Address"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF9A4A]"
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    You are enquiring as
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-3"
                  >
                    <option value="">Select an option</option>
                    <option>Brand owner</option>
                    <option>Individual</option>
                    <option>Corporate organisation</option>
                    <option>NGO</option>
                    <option>Other</option>
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                  {formData.category === "Other" && (
                    <div className="mt-3">
                      <label className="block text-sm font-medium mb-2">
                        Please specify
                      </label>
                      <input
                        type="text"
                        name="categoryOther"
                        value={formData.categoryOther}
                        onChange={handleChange}
                        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF9A4A]"
                      />
                      {errors.categoryOther && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.categoryOther}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-3"
                  >
                    <option value="">Select a Service</option>
                    <option>Public Relations Strategy</option>
                    <option>Corporate Communications</option>
                    <option>Event Consultation</option>
                    <option>Reputation Management</option>
                    <option>Crisis Communications</option>
                    <option>Media Relations</option>
                    <option>Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                  {formData.service === "Other" && (
                    <div className="mt-3">
                      <label className="block text-sm font-medium mb-2">
                        Please specify
                      </label>
                      <input
                        type="text"
                        name="serviceOther"
                        value={formData.serviceOther}
                        onChange={handleChange}
                        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF9A4A]"
                      />
                      {errors.serviceOther && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.serviceOther}
                        </p>
                      )}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Select the main area where you’d like PR/communication support.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brief Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-3"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Share a short overview of your situation or questions.
                  </p>
                </div>

                <p className="text-xs text-gray-400">
                  Your details are kept confidential and used only to respond to
                  your request.
                </p>

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full py-4 rounded-md font-semibold transition-all duration-300 ${
                    isFormValid && !loading
                      ? "bg-[#132347] text-white hover:bg-[#FF9A4A]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center text-center animate-[fadeIn_0.6s_ease-out]">
              <div className="w-16 h-16 rounded-full bg-[#FF9A4A]/20 flex items-center justify-center mb-6">
                <span className="text-3xl text-[#B7743F]">✓</span>
              </div>

              <h3 className="text-2xl font-semibold text-[#FF9A4A] mb-3">
                Request Sent Successfully
              </h3>

              <p className="text-gray-600 max-w-sm">
                Thank you for reaching out. Your consultation request has been
                received. You’ll usually get a response within 24–48 hours on
                business days.
              </p>
            </div>
          )}
        </motion.section>
        </div>
      </div>
    </main>
  );
}
