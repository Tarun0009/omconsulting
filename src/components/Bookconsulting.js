import React, { useState, useEffect } from "react";

const BookConsulting = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    services: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showServices, setShowServices] = useState(false);

  const servicesList = [
    "SEO Optimization",
    "Content Marketing",
    "Email Marketing",
    "SMS Marketing",
    "WhatsApp Marketing",
    "Social Media Marketing",
    "Paid Advertising Marketing",
    "Web Development",
    "App Development",
    "E-commerce Solution",
    "Logo Designing",
    "Banner Designing",
    "Social Media Designing",
  ];

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
        services: [],
      });
      setError("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email format.";
    if (!formData.phone.trim()) return "Phone is required.";
    if (!/^\d{10}$/.test(formData.phone)) return "Phone number must be 10 digits.";
    if (formData.services.length === 0) return "Please select at least one service.";
    if (!formData.date) return "Date is required.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Your appointment request has been submitted!");
      onClose();
    } catch (error) {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          ✖
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">Schedule Consultation</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded text-gray-900" placeholder="Full Name*" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded text-gray-900" placeholder="Email*" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded text-gray-900" placeholder="Phone Number" required />
          
          {/* Services Selection  */}
          <div className="relative">
            <button type="button" className="w-full p-2 border rounded bg-gray-100 text-gray-900 text-left" onClick={() => setShowServices(!showServices)}>
              {formData.services.length > 0 ? formData.services.join(", ") : "Select Services"}
            </button>
            {showServices && (
              <div className="absolute w-full bg-white border rounded shadow-lg mt-1 max-h-48 overflow-auto">
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className={`p-2 cursor-pointer hover:bg-gray-200 text-gray-900 ${formData.services.includes(service) ? "bg-blue-100" : ""}`}
                    onClick={() => handleServiceChange(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded text-gray-900" required />
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded text-gray-900" placeholder="Additional Message" rows="3"></textarea>

          <button type="submit" disabled={isLoading} className={`w-full p-2 rounded text-black ${isLoading ? "bg-yellow-800" : "bg-yellow-600 hover:bg-blue-700"}`}>
            {isLoading ? "Submitting..." : "Schedule Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookConsulting;
