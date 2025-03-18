"use client";

import { sendEmail } from "@/app/[lang]/actions";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactSectionForm({ dictionary }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    locale: dictionary.locale, // Send language
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await sendEmail(formData);

    setLoading(false);
    // setMessage(response.message);
    toast.success(response.message);

    if (response.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        locale: dictionary.locale, // Keep locale unchanged
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white  rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            {dictionary.firstNameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder={dictionary.firstNameLabel}
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md text-[14px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            {dictionary.lastNameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            placeholder={dictionary.lastNameLabel}
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md text-[14px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            {dictionary.emailLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={dictionary.emailLabel}
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md text-[14px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            {dictionary.phoneLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={dictionary.phoneLabel}
            className="w-full border px-4 py-2 rounded-md text-[14px]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer md:w-auto px-8 py-2 bg-[#C08B67] hover:bg-[#A77555] text-white font-medium rounded"
        disabled={loading}
      >
        {loading ? "Sending..." : dictionary.conactSubmitLabel}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
