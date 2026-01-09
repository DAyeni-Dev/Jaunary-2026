import { useState } from "react";

export default function book() {
  const [formData, setFormData] = useState ({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors ] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (! formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (! formData.email.trim()) {
      newErrors.email ="Email is required"
    }

    else if (
     !/ ^[^\s@]+@[^\s@]+\,[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email ="Enter a valid email address";
    }

    if (! formData.service) {
      newErrors.service = "Please select a service";
    }

    if (! formData.message) {
      newErrors.message = "Please provide a breif message";
    }

    setErrors(newErrors); 
    return Object.key(newErrors).length ===0;
  };


  const handleSubmit =(e) => {
    e.prevenDefault();

    if (! validateForm()) return;

    //TEMP SUCCESS ACTION

  alert("Consultation request submitted successfully");

  setFormData({
     name: "",
    email: "",
    service: "",
    message: "",
  });
  setErrors({});
  };
  return (
    <main className="py-24">
      <div className="max-w-5x1 mx-auto px-8 grid md grid-cols-2 gap-16">
        <section>
          <h1 className="text-4x1 font-bold mb-6">Book a Consultation</h1>
          <p className="text-gray-600 mb-8">This private consultaion helps you gain clarity on communication
            challenges, brand positioning, and reputation strategy.
          </p>

          <ul className="space-y-5 text-gray-700">
            <li><strong>Duration:</strong>30-60 minutes</li>
            <li><strong>Who is it for:</strong>Business owerner & Proffesionals</li>
            <li><strong>Confidentially:</strong>Fully assured</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-10 rounded-lg">
          <h2 className="text 2x1 font semibold mb-6">Request a Cosultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

                {/*NAME*/}

            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded -md px-4 py-3"/>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

                    {/*EMAIL*/}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded -md px-4 py-3"/>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

                        {/*SERVICE*/}
            <div>
              <label className="block text-sm font-medium mb-2">Service of Intrest</label>
              <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded -md px-4 py-3">

              <option value="">Select a Service</option>
              <option>Public Relations Strategy</option>
              <option>Corprate Communications</option>
              <option>Event Consulattion</option>
              <option>Reputation Managment</option>
              <option>Crisis Communications</option>
              <option>Media Relations</option>
              </select>

              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>
            
                        {/*MESSAGE*/}
            <div>
              <label className="block text-sm font-medium mb-2">Breif Message</label>
              <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded -md px-4 py-3">
              </textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
                             {/*SUBMIT*/}

            <button
            type="submit"
            className="w-full bg-blue-700 text-white py-4 rounded-md
             font-semibold hover:bg-blue-800 transition">Subit Request</button>
          </form>

        </section>
      </div>
    </main>
  );
}