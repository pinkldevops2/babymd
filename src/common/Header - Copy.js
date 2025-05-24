"use client";

import Link from "next/link";
import { useState } from "react";
import logo from "../app/assets/logo.png";
import Image from "next/image";

export default function Headerhome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FFFBE6] p-4 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-1 py-2">
      <Link href="/" passHref>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={logo}
            alt="babyMD Logo"
            width={80}
            height={50}
            className="object-contain"
          />         
        </div>
      </Link>

      <button onClick={toggleMenu} className="text-[#4B3A8F] focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
      {isOpen && (
        <nav className="mt-4 bg-[#FFFBE6] border-t border-[#FF6F61] border-dashed">
          <ul className="flex flex-col space-y-2 p-4">
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
      <div className="border-t border-[#FF6F61] border-dashed mt-2"></div>
    </header>
  );
}