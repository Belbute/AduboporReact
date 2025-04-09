import React, { useState } from "react";
import { motion } from "framer-motion";

// Define TypeScript interfaces for form data and error handling
// FormData interface defines the structure of our form state
interface FormData {
  name: string; // User's name
  email: string; // User's email address
  message: string; // User's message
  interests: string[];
}

// FormErrors interface defines the structure for validation errors
// All fields are optional since they only exist when there's an error
interface FormErrors {
  name?: string; // Error message for name field
  email?: string; // Error message for email field
  message?: string; // Error message for message field
}

const INTEREST_OPTIONS = ["UX/UI design", "Web design", "Design system", "Graphic design", "Other"];

const ContactUs: React.FC = () => {
  // State management using React hooks
  // formData: Stores the current values of all form fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    interests: [],
  });

  // errors: Stores validation error messages for each field
  const [errors, setErrors] = useState<FormErrors>({});
  // isSubmitting: Tracks form submission state for loading UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  // submitSuccess: Tracks successful form submission for success message
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form validation function that checks all fields and returns boolean
  // Returns true if form is valid, false if there are errors
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name field - must not be empty
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email field - must be a valid email format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Validate message field - must be at least 10 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Update errors state and return validation result
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission with validation and simulated API call
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission with setTimeout
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "", interests: [] }); // Reset form
        // Hide success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  // Handle input changes and clear errors when user starts typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update form data with new value
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing in a field with error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <div className="min-h-screen bg-app-main py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-textColors-light leading-tight">
                Contact
                <br />
                <span className="text-app-secondary">Adubopor</span>
                <br />
                Today
              </h2>
            </div>

            <div className="space-y-6 text-textColors-light">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-app-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@adubopor.pt</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-app-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>282 415 900</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-app-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Boavista, Antigos Celeiros da EPAC, 8500-300 Portimão</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-app-secondary rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-4">
                  I'm interested in:
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${
                          formData.interests.includes(interest)
                            ? "bg-app-main text-white"
                            : "bg-gray-100 text-black hover:bg-app-main/80 hover:text-gray-100"
                        }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${
                      errors.name ? "border-red-800" : "border-gray-200"
                    } focus:ring-2 focus:ring-app-2 focus:border-transparent`}
                    placeholder="John Smith"
                  />
                  {errors.name && <p className="text-red-700 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Your email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${
                      errors.email ? "border-red-700" : "border-gray-200"
                    } focus:ring-2 focus:ring-app-2 focus:border-transparent`}
                    placeholder="email@gmail.com"
                  />
                  {errors.email && <p className="text-red-700 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">Your message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full p-3 rounded-lg border ${
                      errors.message ? "border-red-700" : "border-gray-200"
                    } focus:ring-2 focus:ring-app-2 focus:border-transparent resize-none`}
                    placeholder="Type your message here..."
                  />
                  {errors.message && <p className="text-red-700 text-xs mt-1">{errors.message}</p>}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-app-main text-white py-3 px-6 rounded-lg font-medium
                  hover:bg-app-2/90 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </motion.button>
            </form>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 p-3 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center text-sm"
              >
                Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
