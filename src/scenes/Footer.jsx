import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-42 bg-red pt-6 pb-1">
      <div className="w-5/6 mx-auto ">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-4xl text-white">
            Richard Hadzhiev
          </p>
          <p className="font-playfair text-2xl text-white ">
            ©2024 Hadzhiev.All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
