import { useState } from 'react';
import emailjs from '@emailjs/browser';
import API_URL from '../config';

export const useFormSubmit = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (formData, emailConfig) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Send Notification to Admin
      if (emailConfig?.adminTemplate) {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.adminTemplate,
          emailConfig.adminData,
          emailConfig.publicKey
        );
      }

      // 2. Send Auto-Response to Client
      if (emailConfig?.clientTemplate) {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.clientTemplate,
          emailConfig.clientData,
          emailConfig.publicKey
        );
      }

      // 3. Save to Backend
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save to database');
      }

      setSuccess(true);
      return true;
    } catch (err) {
      console.error("Submission Error:", err);
      setError(err.message || "Failed to submit form. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setSuccess(false);
    setError(null);
  };

  return { loading, success, error, submitForm, resetStatus };
};
