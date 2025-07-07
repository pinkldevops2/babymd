import Head from 'next/head';
import Image from 'next/image';
import beeimage from "../assets/contactpagebee.png";
import contactbaby from "../assets/contactbaby.png";
import contactbb from "../assets/contactbb.png";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | babyMD</title>
      </Head>
      <main className="min-h-screen bg-[#f0ebea] flex items-center justify-center">
        <div className="w-full bg-white p-5  relative">
          {/* Header Title */}
          <div className="mb-6 relative pt-8">
            <h1 className="text-xl font-bold leading-tight text-black contactSub mt-8">
              Guidance? Concerns?
              <br />
              <span className="text-[#5d3fd3] underline decoration-[#5d3fd3]">Appointments?</span>
            </h1>
			<svg className="absolute top-0 right-0 swing" width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.62805 12.8662L8.1579 9.88482L13.5854 13.2672L13.367 19.5468L7.83714 22.5281L2.63519 19.1708L2.62805 12.8662Z" stroke="#FF9A6C" strokeWidth="2.5"/>
<path d="M23.022 20.161L26.9255 18.0566L30.6533 20.2524L30.3982 24.4978L26.4948 26.6023L22.9237 24.4197L23.022 20.161Z" stroke="#FF9A6C" strokeWidth="2.5"/>
<path d="M8.91809 4.48676L14.4479 1.50543L19.6997 4.56195L19.3098 10.5232L13.7799 13.5046L8.74955 10.4656L8.91809 4.48676Z" stroke="#5943A5" strokeWidth="2.5"/>
</svg>

            <p className=" text-gray-700 mt-2">
			  Reach out anytime, we&rsquo;ve got the time and the team!
            </p>

            {/* Icon (top right corner) */}
            
          </div>

          {/* Contact Form */}
          <form className="space-y-4 pt-8 pb-8">
            {['Name', 'Email', 'Phone'].map((field) => (
              <div key={field}>
                <label className=" block mb-1">{field}:</label>
                <input
                  type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
                  className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-2"
                />
              </div>
            ))}

            {/* Dropdown */}
            <div>
              <label className=" block mb-1">My question is about:</label>
              <select className="w-full h-8 border-b border-black bg-transparent focus:outline-none focus:border-[#5d3fd3] pb-2">
                <option value=""></option>
                <option>Appointments</option>
                <option>Health Advice</option>
                <option>Follow Up</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className=" block mb-1">Message:</label>
              <textarea
                rows={3}
                className="w-full border-b border-black focus:outline-none focus:border-[#5d3fd3] pb-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-55 h-14 mx-auto bg-[#5d3fd3] hover:bg-[#4b2eb6] text-white font-semibold  py-2 rounded-full flex justify-center items-center gap-2 transition"
            >
              SUBMIT FORM
              <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M20.0113 8.06535L5.00195 14.947L5.00195 1.18373L20.0113 8.06535Z" fill="white"/>
<path d="M28.1851 8.06535L13.1758 14.947L13.1758 1.18373L28.1851 8.06535Z" fill="white"/>
</svg>

            </button>
          </form>
          <Head>
        <title>Join Us | babyMD</title>
      </Head>
      <main className="flex items-center justify-center">
        <div className="w-full bg-white rounded-xl space-y-6">

          {/* Title Section */}
          <div className="relative pt-8">
            <h2 className="text-xl font-bold text-black pb-2 customtenight">
              Grow <span className="spansidecour text-[#5d3fd3]">with us</span>
			  <Image 
				src={beeimage}
				className="absolute right-0 top-0 swing fastbeecontact"
				alt="Bee" 
				width={134} // adjust as needed
				height={134} // adjust as needed
			  />
            </h2>
            <p className="mt-2 text-gray-700 ">
              Looking to join a bunch of enthusiasts passionate about shaping brighter futures for little humans?
              We’d love to hear from you! Mail us at <a href="mailto:hiring@babymd.in" className="text-[#5d3fd3] underline">hiring@babymd.in</a>.
            </p>

            {/* Placeholder for top-right bee */}
            
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#eaf6ff] rounded-xl pl-2 pl-8 pr-8 space-y-4 relative contactblkbee pt-8">
            <h2 className="font-semibold  text-gray-800 mediumWnn pb-8">
              Pediapulse Health Services Private Limited
            </h2>

            {/* Placeholder for small bee */}
            <Image 
				src={contactbb}
				className="absolute right-0 top-0 semicircmotion fastbeecontact2"
				alt="Bee" 
				width={80} // adjust as needed
				height={78} // adjust as needed
			/>

            <div className=" text-gray-700 space-y-2">
              <div className="flex items-start gap-2 pb-4">
			  <span>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4614 7.7759L13.8821 0.266385C13.3747 -0.0887949 12.6897 -0.0887949 12.1823 0.266385L1.57763 7.7759C0.918012 8.25793 0.765792 9.17125 1.22245 9.83087C1.70448 10.4905 2.6178 10.6427 3.27742 10.186L4.97721 8.99366V16.5285C4.97721 17.3404 5.63683 18 6.44867 18H19.5649C20.3768 18 21.0364 17.3404 21.0364 16.5285V8.96829L22.7362 10.1607C22.9899 10.3383 23.2943 10.4397 23.5988 10.4397C24.0554 10.4397 24.5121 10.2114 24.7912 9.83087C25.2732 9.17125 25.121 8.25793 24.4614 7.7759ZM16.7235 11.277C16.7235 11.4292 16.5967 11.556 16.4444 11.556H14.2626V13.7378C14.2626 13.8901 14.1358 14.0169 13.9836 14.0169H12.0808C11.9286 14.0169 11.8017 13.8901 11.8017 13.7378V11.556H9.61991C9.46769 11.556 9.34085 11.4292 9.34085 11.277V9.37421C9.34085 9.22199 9.46769 9.09514 9.61991 9.09514H11.8017V6.91332C11.8017 6.7611 11.9286 6.63425 12.0808 6.63425H13.9836C14.1358 6.63425 14.2626 6.7611 14.2626 6.91332V9.09514H16.4444C16.5967 9.09514 16.7235 9.22199 16.7235 9.37421V11.277Z" fill="black"/>
</svg>
</span>

                <p>
                  Address: Wework, Prestige Atlanta,<br />
                  80 Feet Road, Koramangala,<br />
                  Bengaluru, Karnataka-560034
                </p>
              </div>
              <div className="flex items-center gap-2 pb-4">
                <span><svg width="26" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.24572 1.40001L1.89573 0.370992C2.2502 0.130369 2.67162 0.000873608 3.10286 0H18.8171C19.2484 0.000874952 19.6698 0.130376 20.0243 0.370992L18.6814 1.40001L11.267 7.05606C11.0599 7.24506 10.8599 7.24506 10.6027 7.02106L3.24572 1.40001ZM20.8599 1.50501L19.5313 2.52001L12.1885 8.127C11.8599 8.43151 11.426 8.60126 10.9742 8.60301C10.492 8.59776 10.0295 8.41226 9.68133 8.085L2.38853 2.5199L1.05996 1.5049C0.99746 1.6974 0.963531 1.89778 0.959961 2.0999V11.9C0.963532 13.0585 1.92067 13.9965 3.10282 14H18.8171C19.9993 13.9965 20.9564 13.0585 20.96 11.9V2.0999C20.9564 1.89777 20.9224 1.6975 20.8599 1.50501Z" fill="black"/>
</svg>
</span>
                <p>Email: help@babymd.in</p>
              </div>
              <div className="flex items-center gap-2 pb-4">
                <span><svg width="26" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3232 16.0465L17.1056 18.3102C16.9842 18.4892 16.5333 19 15.263 19C14.8533 19 14.359 18.9476 13.7629 18.8123L13.752 18.8101C13.6631 18.7861 11.53 18.2076 8.91352 16.3958C7.37873 15.3327 5.99568 14.0622 4.80556 12.6215C3.31846 10.825 2.12835 8.75774 1.26557 6.47223C1.22872 6.38928 1.03578 5.92868 0.977254 5.30655C0.890543 4.40064 1.13117 3.5755 1.67095 2.9228L1.67962 2.91189L4.18341 0.370971L4.19642 0.360056C4.25495 0.309849 4.79473 -0.11582 5.38653 0.0304354C5.74422 0.117752 6.02169 0.386251 6.21029 0.827201L8.02256 4.30022C8.08543 4.38318 8.23717 4.6102 8.30004 4.92672C8.37374 5.28909 8.34556 5.83918 7.80578 6.40238L7.79277 6.41547L6.9972 7.15548L6.97769 7.1664C6.83678 7.26681 6.90832 7.3956 6.93216 7.43708L6.93867 7.45018C6.94517 7.46546 7.41775 8.38665 8.33255 9.52613C9.16715 10.5674 10.5545 12.0125 12.4297 12.997C12.5012 13.0035 12.7202 12.9948 12.9868 12.7263L12.9911 12.7219L13.7087 12.0278C13.7715 11.9448 13.9406 11.7549 14.2333 11.6326C14.5498 11.5017 15.0809 11.4231 15.8157 11.8029L15.8331 11.8116L19.2452 13.8265C19.3688 13.8832 19.8413 14.1321 19.9432 14.656C20.0234 15.0948 19.8153 15.5619 19.3232 16.0465Z" fill="black"/>
</svg>
</span>
                <p>Phone: +91 70707 08220</p>
              </div>
            </div>

            {/* Image Frame Placeholder */}
            <div className="w-full mt-4 flex items-center justify-center text-gray-400 ">
              <Image 
				src={contactbaby}
				alt="Bee" 
				width={296} // adjust as needed
				height={296} // adjust as needed
			  />
            </div>
          </div>
        </div>
      </main>
          
        </div>
      </main>
    </>
  );
}