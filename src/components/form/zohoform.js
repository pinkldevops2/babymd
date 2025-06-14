'use client'; // Next.js App Router

import { useEffect, useRef } from 'react';

const ZohoLeadForm = () => {
  const formRef = useRef();

  useEffect(() => {
    // Optionally set hidden fields like UTM params or referrer here
    const form = formRef.current;
    if (!form) return;

    form.querySelector('input[name="page_url"]').value = window.location.href;
    form.querySelector('input[name="form_location"]').value = 'Website - BabyMD Campaign';
  }, []);

  const handleSubmit = (e) => {
    // Simple HTML5 validation can be used here if needed
    // Or you can write custom validations too
    // If not needed, just let it submit naturally
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      action="https://forms.zohopublic.in/babymd/form/BabyMDAllCampaigns1/formperma/qQrwwuwi5tXnsN7jQ7JXt1X-8rGKbHnmgr1HhPnToUc/htmlRecords/submit"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="space-y-4 max-w-xl mx-auto"
    >
      {/* Hidden Fields */}
      {[
        'zf_referrer_name', 'zf_redirect_url', 'zc_gad', 'utm_source',
        'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
        'utm_placement', 'utm_ad_id', 'utm_adset_id', 'utm_ad_name',
        'utm_platform', 'utm_campaign_id', 'gclid', 'fbclid',
        'form_location', 'page_url',
      ].map((name) => (
        <input key={name} type="hidden" name={name} value="" />
      ))}

      {/* Visible Fields */}
      <input type="text" name="SingleLine1" required placeholder="Name *" className="w-full p-2 border" />
      <input type="text" name="Date" placeholder="Baby D.O.B (yyyy-MM-dd)" className="w-full p-2 border" />
      <input type="text" name="PhoneNumber_countrycode" required placeholder="Phone *" className="w-full p-2 border" />
      <input type="email" name="Email" placeholder="Email" className="w-full p-2 border" />
      <input type="text" name="SingleLine" placeholder="Form Location" className="w-full p-2 border" />
      <input type="hidden" name="SingleLine2" value="Website" />
      <input type="hidden" name="SingleLine3" value="New Lead" />
      <input type="hidden" name="SingleLine4" value="New" />
      <input type="text" name="SingleLine7" placeholder="Redirection Check Name" className="w-full p-2 border" />
      <input type="text" name="SingleLine8" placeholder="Lead Sub Source" className="w-full p-2 border" />
      <input type="text" name="SingleLine9" placeholder="First Enquired Service" className="w-full p-2 border" />
      <input type="text" name="SingleLine10" placeholder="Channel" className="w-full p-2 border" />
      <input type="text" name="SingleLine11" placeholder="Reward Claimed" className="w-full p-2 border" />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default ZohoLeadForm;