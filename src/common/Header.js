"use client";

import Link from "next/link";
import { useState } from "react";
import logo from "../app/assets/baby_md_logo.svg";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center px-1 py-2">
      <Link href="/" passHref>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={logo}
            alt="babyMD Logo"
            width={120}
            height={35}
            className="object-contain"
          />         
        </div>
      </Link>

      <button onClick={toggleMenu} className="text-[#4B3A8F] focus:outline-none">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 8.87073H24.0767M1.92285 16.2552H24.0767M1.92285 1.48584H24.0767" stroke="#5943A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </button>
    </div>
      {isOpen && (
        <nav className="fixedNavbar mt-4 bg-[#FFFBE6] border-t relative border-[#FF6F61] border-dashed p-8">
		<Image
            src={logo}
            alt="babyMD Logo"
            width={120}
            height={35}
            className="object-contain mb-4"
          />  
		  <Link href="/" onClick={toggleMenu} className="absolute right-2 top-2">
<svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg></Link>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/doctor" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Doctor
              </Link>
            </li>
            <li>
              <Link href="/clinic" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Clinic
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Contact Us
              </Link>
            </li>
              <li>
              <Link href="/resources" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Resources
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="text-[#4B3A8F] hover:text-[#FF6F61] cursor-pointer">
                  Services
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link href="/services/general-pediatric-consultations" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      General Pediatric Consultations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/vaccinations" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      Vaccinations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/super-special-consultations" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      Super Special Consultations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/da-and-t" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      DA&T
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}