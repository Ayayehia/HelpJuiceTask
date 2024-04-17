import logo from "/ChromeIcon.png";
import Stars from "/Stars.png";

const InstallBox = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:px-0 ">
      <ul className="flex text-gray-900 font-medium px-6  mb-9 lg:mb-7 lg:gap-6 gap-3 bg-custom-gradient">
        <li className="flex items-center gap-1">
          <span className="font-plus text-xl lg:text-4xl  underline">Free</span>
          <span className="lg:text-sm text-[8px]">
            <p>Free</p> <p>Forever</p>
          </span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-plus text-xl lg:text-4xl  font-medium underline">
            Unlimited
          </span>

          <span className="lg:text-sm text-[8px]">
            <p>Tutorial</p> <p>Creation</p>
          </span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-plus text-xl lg:text-4xl  font-medium underline">
            Powerful
          </span>

          <span className="lg:text-sm text-[8px]">
            <p>Editor &</p> <p>Integrations</p>
          </span>
        </li>
      </ul>
      <div className="lg:px-[325px]">
        <div className="flex flex-col items-center justify-center text-center  border-black border-r-8 border-8 lg:px-[120px] px-8 lg:pt-11 lg:pb-16 pt-9 pb-12 rounded-md lg:gap-10 ">
          <h3 className="font-plus font-extrabold text-4xl mb-7 lg:mb-0">
            Create A Detailed Tutorial in Less than 3 clicks
          </h3>
          <button className="bg-black text-white flex items-center gap-2 py-6 px-20 rounded-lg font-mulish text-3xl mb-14 lg:mb-0">
            <img className="w-8 h-8" src={logo} alt="chrome image logo " />
            Install Wizardshot
          </button>
          <p className="font-plus text-3xl flex flex-col items-center">
            <span className="font-extrabold ">
              “Has helped us write help docs 100x faster”
            </span>
            <br /> <span>– Dany River, Cartier Informatie</span>
            <img src={Stars} alt="ranking stars image" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallBox;
