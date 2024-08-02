import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className=" mt-6 rounded-t-lg bg-primary pb-3 text-white lg:mx-[120px] lg:mt-14 lg:p-6">
      <div className="flex flex-col gap-y-6 p-6 lg:h-[200px] lg:flex-row lg:gap-x-6">
        <div className="flex flex-grow flex-col gap-y-3 lg:max-w-[700px] lg:gap-y-6">
          <h1 className="text-2xl font-bold lg:text-5xl">QuickBite</h1>
          <p className="w-full">
            QuickBite is a dynamic and user-friendly online food ordering app
            designed to revolutionize the way you satisfy your culinary
            cravings.
          </p>
          <div className="flex flex-row gap-3">
            <div className="max-h-[30px] max-w-[30px]">
              <img
                className="h-full w-full"
                src={assets.twitter_icon}
                alt="Twitter"
              />
            </div>
            <div className="max-h-[30px] max-w-[30px]">
              <img
                className="h-full w-full"
                src={assets.facebook_icon}
                alt="facebook"
              />
            </div>
            <div className="max-h-[30px] max-w-[30px]">
              <img
                className="h-full w-full"
                src={assets.linkedin_icon}
                alt="Linkedin"
              />
            </div>
          </div>
        </div>
        <ul className="flex w-1/4 flex-1 flex-col gap-y-1 lg:gap-y-3">
          <h1 className="text-xl font-bold lg:text-2xl">COMPANY</h1>
          <li className="text-sm">Home</li>
          <li className="text-sm">About us</li>
          <li className="text-sm">Delivery</li>
          <li className="text-sm">Privacy Policy</li>
        </ul>
        <ul className="flex w-1/4 flex-1 flex-col gap-y-1 text-xl lg:gap-y-3">
          <h1 className="text-nowrap font-bold lg:text-2xl">GET IN TOUCH</h1>
          <li className="text-nowrap text-sm">+91 1234567890</li>
          <li className="text-sm">contact@quickbite.com</li>
        </ul>
      </div>
      <div className="text-center">
        <p className="px-3 text-sm">
          Copyright 2024 &copy; Quickbyte.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
