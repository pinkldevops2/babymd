import Image from "next/image";
import SuperDocButton from "./SuperDocButton";

const MembershipPlans = ({
  goldPackageImg,
  platinumPackageImg,
  premiumLayerBg,
  premiumLayerImg,
}) => {
  return (
    <div className="px-6 md:px-0">
      <div className="relative bg-[#FF9A6C] text-white mt-6 mb-4 pt-10 rounded-2xl space-y-4 w-full mx-auto overflow-hidden flex flex-col md:flex-row md:p-6">
        {/* Heading */}
        <div className="px-4 md:w-1/2 md:px-0">
          <h2 className="text-[28px] leading-[30px] font-bold fade-in">
            Because <span className="text-white purple_circle">Parenting</span> Shouldn&apos;t Cost a{' '}
            <span className="italic font-normal">
              <i>Fortune</i>
            </span>
          </h2>
          <p className="mt-2 fade-in" style={{ fontFamily: 'Baloo 2, sans-serif', fontSize: '16px', lineHeight: '22px' }}>
            Midnight fevers, last-minute travel checkups, vaccine days— we know parenting comes with curveballs. Our membership plans are here to make expert care simpler, smoother, and more affordable all year round.
          </p>
          <p className="mt-2 mb-4 fade-in">
            Choose from our plans and save up to &#8377;10,000 annually.
          </p>
        

        {/* Membership Cards */}
        <div className="flex flex-row md:flex-row gap-3 text-center">
          {/* Gold Plan */}
          <div
            className="bg-white text-[#231F20] p-4 rounded-2xl space-y-2 w-full md:w-1/2 fade-in"
            style={{ boxShadow: '-5px 5px 0 #F4DF76' }}
          >
            <div className="h-20 flex justify-center items-center">
              <Image
                width={70}
                height={50}
                src={goldPackageImg}
                alt="Gold Package"
              />
            </div>
            <h3 className="font-baloo2 font-[700] text-[#5943A5] leading-[18px] mb-0">
              Gold<br />Membership
            </h3>
            <p className="text-sm mb-2">Save more on everyday care</p>
            <p className="text-[#5943A5] font-bold text-lg mt-1 package_price_bg mb-2">
              &#8377;699<span className="text-xs">/year</span>
            </p>
            <ul className="list-none m-0 p-0 text-sm text-[#4D4D4D] mt-2 memberlisting leading-[32px]">
              <li>10% off consults</li>
              <li>5% off other services</li>
              <li>&#8377;700 gift card</li>
            </ul>
          </div>

          {/* Platinum Plan */}
          <div
            className="bg-white text-[#231F20] p-4 rounded-2xl space-y-2 w-full md:w-1/2 fade-in"
            style={{ boxShadow: '5px 5px 0 #5943A5' }}
          >
            <div className="h-20 flex justify-center items-center">
              <Image
                width={50}
                height={28}
                src={platinumPackageImg}
                alt="Platinum Package"
              />
            </div>
            <h3 className="font-baloo2 font-[700] text-[#5943A5] leading-[18px] mb-0">
              Platinum<br />Membership
            </h3>
            <p className="text-sm mb-2">Our best value for growing families</p>
            <p className="text-[#5943A5] font-bold text-lg mt-1 package_price_bg mb-2">
              &#8377;999<span className="text-xs">/year</span>
            </p>
            <ul className="list-none m-0 p-0 text-sm text-[#4D4D4D] mt-2 memberlisting leading-[32px]">
              <li>15% off consults</li>
              <li>10% off all services</li>
              <li>&#8377;1000 gift card</li>
            </ul>
          </div>
        </div>

        {/* Note */}
        <p
          className="text-sm mt-4 fade-in"
          style={{ fontWeight: 400, fontSize: '16px', lineHeight: '22px', fontFamily: 'Lato, sans-serif'}}
        >
          With both plans, you get priority booking at all BabyMD clinics and online consults. Plus, a dedicated Care Manager to handle appointments, reminders, and check-ins so you can focus on what matters most.
        </p>
        </div>

        {/* CTA Button */}
          

        {/* Overlapping Images */}
        <div className="mt-2 pl-6 pb-2 relative md:w-1/2">
        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 z-10 px-[20px]">
        <SuperDocButton
            href="/superdoc"
            label="PICK A PLAN, START SAVING"
            className="fade-in"
            variant="purple"
          />
          </div>
          <Image
            src={premiumLayerImg}
            alt="Doctor and Child"
            width={420}
            height={350}
            className="w-full fade-in md:absolute md:bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;