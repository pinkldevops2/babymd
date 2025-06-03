"use client";
import Image from "next/image";
import StackingCards from "../../../components/StackingCards";
export default function Clinic() {
  const clinics = [
    {
      image: "/images/f599ef5c0bc6b9e548520dd4c3c29270435d932e.jpg",
      title: "BabyMD – Hosa Road",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/351beb004171eecf5fa8fcabcad24c88067fc6d4.jpg",
      title: "BabyMD – Whitefield",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: " 9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/bd6e88dec0f434f565572c1a818fb23885fb5b33.jpg",
      title: "BabyMD – Electronic City",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/39e64f6c9f643abdd21ece3b69668b9b60b15dfe.jpg",
      title: "BabyMD – HSR Layout",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/c340ff5accd3a76b9824168ee4a673930fbf9234.jpg",
      title: "BabyMD – Varthur",
      location: "see map",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
  ];
  return (
    <>
      <div className="containers">
        <StackingCards />
      </div>
    </>
  );
}