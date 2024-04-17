import LeftArrow from "/LeftArrow.png";

const Banner = () => {
  return (
    <div className="lg:px-[188px] px-6">
      <article className="bg-black text-white rounded-lg lg:flex lg:flex-row lg:py-8 lg:pl-12 lg:pr-24 lg:justify-between lg:items-center py-8 px-4 flex flex-col items-end">
        <div className="font-mulish lg:max-w-[510px]">
          <h3 className=" text-3xl font-medium mb-3 ">
            Create Tutorials in 3 Clicks.
          </h3>
          <p className="text-[#F9FAFB] text-sm mb-6 lg:mb-0">
            With WizardShot, You Click Capture, And We’ll Capture What’s
            Happening on Your Screen And Turn It Into A Tutorial.
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-inter text-xl underline">Try Wiazard</p>
          <img className="w-4 h-2" src={LeftArrow} />
        </div>
      </article>
    </div>
  );
};

export default Banner;
