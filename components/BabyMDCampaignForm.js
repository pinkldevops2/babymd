'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import contactbaby from "../src/app/assets/contactbaby.png";
import contactbb from "../src/app/assets/contactbb.png";

const BabyMDCampaignForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    babyDOB: '',
    phone: '',
    email: '',
    formLocation: '',
    leadSource: '',
    leadStatus: '',
    leadSubStatus: '',
    redirectionCheckName: '',
    leadSubSource: '',
    firstEnquiredService: '',
    channel: '',
    rewardClaimed: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    if (!email) return true; // Email is optional
    const emailRegex = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
    return emailRegex.test(email.trim());
  };

  const validatePhone = (phone) => {
    if (!phone) return false; // Phone is required
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 8 && digitsOnly.length <= 12;
  };

  const validateDate = (date) => {
    if (!date) return true; // Date is optional
    const dateRegex = /^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$/;
    return dateRegex.test(date);
  };

  const validateName = (name) => {
    if (!name.trim()) return false; // Name is required
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    return nameRegex.test(name.trim()) && name.trim().replace(/\s/g, '').length >= 3;
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        return validateName(value) ? '' : 'Name must be at least 3 characters long (excluding spaces) and contain only letters';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        return validatePhone(value) ? '' : 'Phone number must be between 8 and 12 digits';
      case 'email':
        return validateEmail(value) ? '' : 'Invalid email format';
      case 'babyDOB':
        return validateDate(value) ? '' : 'Date must be in yyyy-MM-dd format';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      babyDOB: validateField('babyDOB', formData.babyDOB),
    };
    setErrors(newErrors);
    console.log('Validated errors:', newErrors); // Debug
    return Object.values(newErrors).every(error => !error);
  };

  useEffect(() => {
    // Initial validation on mount
    validateForm();
  }, []);

  useEffect(() => {
    // Re-validate on formData changes
    validateForm();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
    console.log(`Input ${name}:`, { value, error }); // Debug
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
    console.log(`Blur ${name}:`, { value, error }); // Debug
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log('Submit attempt, valid:', isValid, 'Errors:', errors); // Debug
    if (!isValid) {
      console.log('Submission blocked due to validation errors'); // Debug
      return;
    }
    setIsSubmitting(true);
    try {
      console.log('Submitting:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        babyDOB: '',
        phone: '',
        email: '',
        formLocation: '',
        leadSource: '',
        leadStatus: '',
        leadSubStatus: '',
        redirectionCheckName: '',
        leadSubSource: '',
        firstEnquiredService: '',
        channel: '',
        rewardClaimed: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Campaign Form | babyMD</title>
      </Head>
      <main className="flex items-center justify-center">
        <div className="w-full max-w-6xl bg-white relative rounded-lg">
          {/* Header Title */}
          

          <div className="flex flex-col gap-8">
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 pb-8">
              {/* Name Field */}
              <div>
                <label className="block mb-1 md:text-lg">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={255}
                  className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-black'} focus:outline-none focus:border-[#5d3fd3] pb-2 md:text-lg font-sans`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-sans">{errors.name}</p>
                )}
              </div>

              {/* Baby DOB Field */}
              <div>
                <label className="block mb-1 md:text-lg">Baby&#39;s Date of Birth</label>
                <input
                  type="date"
                  name="babyDOB"
                  value={formData.babyDOB}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border-b ${errors.babyDOB ? 'border-red-500' : 'border-black'} focus:outline-none focus:border-[#5d3fd3] pb-2 md:text-lg font-sans`}
                />
                <small className="text-gray-500 md:text-sm font-sans">Format: yyyy-MM-dd</small>
                {errors.babyDOB && (
                  <p className="text-red-500 text-sm mt-1 font-sans">{errors.babyDOB}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block mb-1 md:text-lg">Phone <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={20}
                  className={`w-full border-b ${errors.phone ? 'border-red-500' : 'border-black'} focus:outline-none focus:border-[#5d3fd3] pb-2 md:text-lg font-sans`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 font-sans">{errors.phone}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block mb-1 md:text-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={255}
                  className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-black'} focus:outline-none focus:border-[#5d3fd3] pb-2 md:text-lg font-sans`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-sans">{errors.email}</p>
                )}
              </div>

              {/* Form Location Field */}
              <div className='hidden'>
                <label className="block mb-1 md:text-lg">Form Location</label>
                <input
                  type="text"
                  name="formLocation"
                  value={formData.formLocation}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={255}
                  className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2 md:text-lg font-sans"
                />
              </div>

              {/* Additional Fields */}
              <div className="space-y-4 pt-4 hidden">
                {[
                  { name: 'leadSource', label: 'Lead Source' },
                  { name: 'leadStatus', label: 'Lead Status' },
                  { name: 'leadSubStatus', label: 'Lead Sub Status' },
                  { name: 'redirectionCheckName', label: 'Redirection Check Name' },
                  { name: 'leadSubSource', label: 'Lead Sub Source' },
                  { name: 'firstEnquiredService', label: 'First Enquired Service' },
                  { name: 'channel', label: 'Channel' },
                  { name: 'rewardClaimed', label: 'Reward Claimed' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block mb-1 md:text-lg">{field.label}</label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      maxLength={255}
                      className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2 md:text-lg font-sans"
                    />
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || Object.values(errors).some(error => error)}
                  className={`w-55 h-14 mx-auto bg-[#5d3fd3] hover:bg-[#4b2eb6] text-white font-semibold py-2 rounded-full flex justify-center items-center gap-2 transition md:text-lg font-sans ${
                    isSubmitting || Object.values(errors).some(error => error) ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT FORM'}
                  <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M20.0113 8.06535L5.00195 14.947L5.00195 1.18373L20.0113 8.06535Z" fill="white"/>
                    <path d="M28.1851 8.06535L13.1758 14.947L13.1758 1.18373L28.1851 8.06535Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          
        </div>
      </main>
    </>
  );
};

export default BabyMDCampaignForm;