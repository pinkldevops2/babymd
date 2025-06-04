'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
    if (!phone) return false; // Phone is mandatory
    const phoneRegex = /^[+]{0,1}[()0-9-. ]+$/;
    return phoneRegex.test(phone.trim());
  };

  const validateDate = (date) => {
    if (!date) return true; // Date is optional
    const dateRegex = /^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$/;
    return dateRegex.test(date);
  };

  const validateForm = () => {
    const newErrors = {};

    // Mandatory field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    // Optional field validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.babyDOB && !validateDate(formData.babyDOB)) {
      newErrors.babyDOB = 'Date must be in yyyy-MM-dd format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your API
      console.log('Form Data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Form submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        babyDOB: '',
        phone: '',
        email: '',
        formLocation: '',
        leadSource: 'Website',
        leadStatus: 'New Lead',
        leadSubStatus: 'New',
        redirectionCheckName: '',
        leadSubSource: '',
        firstEnquiredService: '',
        channel: '',
        rewardClaimed: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Campaign Form | babyMD</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center p-1">
        <div className="w-full bg-white relative rounded-lg">
          {/* Header Title */}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 pb-8">
            {/* Name Field */}
            <div>
              <label className="block mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                maxLength={255}
                className={`w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                // placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Baby DOB Field */}
            <div>
              <label className="block mb-1">Baby D.O.B</label>
              <input
                type="date"
                name="babyDOB"
                value={formData.babyDOB}
                onChange={handleInputChange}
                className={`w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2 ${
                  errors.babyDOB ? 'border-red-500' : ''
                }`}
              />
              {/* <small className="text-gray-500">Format: yyyy-MM-dd</small> */}
              {errors.babyDOB && (
                <p className="text-red-500 text-sm mt-1">{errors.babyDOB}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block mb-1">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                maxLength={20}
                className={`w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                // placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                maxLength={255}
                className={`w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                // placeholder="Enter email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Form Location Field */}
            <div>
              <label className="block mb-1">Form Location</label>
              <input
                type="text"
                name="formLocation"
                value={formData.formLocation}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Enter form location"
              />
            </div>

            {/* Lead Source Field */}
            <div>
              <label className="block mb-1">Lead Source</label>
              <input
                type="text"
                name="leadSource"
                value={formData.leadSource}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Lead source"
              />
            </div>

            {/* Lead Status Field */}
            <div>
              <label className="block mb-1">Lead Status</label>
              <input
                type="text"
                name="leadStatus"
                value={formData.leadStatus}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Lead status"
              />
            </div>

            {/* Lead Sub Status Field */}
            <div>
              <label className="block mb-1">Lead Sub Status</label>
              <input
                type="text"
                name="leadSubStatus"
                value={formData.leadSubStatus}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Lead sub status"
              />
            </div>

            {/* Redirection Check Name Field */}
            <div>
              <label className="block mb-1">Redirection Check Name</label>
              <input
                type="text"
                name="redirectionCheckName"
                value={formData.redirectionCheckName}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Enter redirection check name"
              />
            </div>

            {/* Lead Sub Source Field */}
            <div>
              <label className="block mb-1">Lead Sub Source</label>
              <input
                type="text"
                name="leadSubSource"
                value={formData.leadSubSource}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Enter lead sub source"
              />
            </div>

            {/* First Enquired Service Field */}
            <div>
              <label className="block mb-1">First Enquired Service</label>
              <input
                type="text"
                name="firstEnquiredService"
                value={formData.firstEnquiredService}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Enter first enquired service"
              />
            </div>

            {/* Channel Field */}
            <div>
              <label className="block mb-1">Channel</label>
              <input
                type="text"
                name="channel"
                value={formData.channel}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Enter channel"
              />
            </div>

            {/* Reward Claimed Field */}
            <div>
              <label className="block mb-1">Reward Claimed</label>
              <input
                type="text"
                name="rewardClaimed"
                value={formData.rewardClaimed}
                onChange={handleInputChange}
                maxLength={255}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                // placeholder="Enter reward claimed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-55 h-14 mx-auto bg-[#5d3fd3] hover:bg-[#4b2eb6] text-white font-semibold py-2 rounded-full flex justify-center items-center gap-2 transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
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
      </main>
    </>
  );
};

export default BabyMDCampaignForm;