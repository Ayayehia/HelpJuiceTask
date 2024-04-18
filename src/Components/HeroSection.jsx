import arrow from "/arrow-narrow-right.png";
import poster from "/Logo.png";
import VideoImage from "/VideoImage.png";
import ArrowUp from "/ArrowUp.png";
import Text from "/HeroText.png";
const HeroSection = () => {
  const src =
    "https://www.youtube.com/watch?v=LgB3j2y1b-4&list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW";
  return (
    <article className="text-center flex flex-col items-center mt-20 px-6">
      <h3 className="text-4xl lg:text-6xl font-extrabold font-plus mb-3 max-w-[695px] ">
        Your Magic Wand for Instant Documentation
      </h3>
      <p className="font-semibold font-sans mb-9 text-semi-transparent-black lg:max-w-full text-xl lg:text-base max-w-[375px]">
        Turn ANY process into a simple step-by step Guide
      </p>
      <button className="flex gap-2 bg-black py-2 px-6 text-white rounded-lg font-mulish mb-14 lg:mb-0">
        Install Wizardshot
        <img src={arrow} />
      </button>
      <div className=" relative bg-gradient-to-b from-purple-500 to-pink-500 p-2 rounded-lg mt-12 ">
        <video
          className="lg:w-[1039px] lg:h-[596px] rounded-lg z-10 relative bg-black h-[205px] w-fit "
          src={src}
          poster={VideoImage}
          width="1039px"
          height="auto"
          controls
        ></video>
        <img
          className="absolute top-[-38px] left-[-18px] z-50 p-2   "
          src={ArrowUp}
          alt="ArrowUp"
        />
        <img
          src={Text}
          alt="Text"
          className="absolute top-[-56px] left-0 z-50"
        />
      </div>
    </article>
  );
};

export default HeroSection;
