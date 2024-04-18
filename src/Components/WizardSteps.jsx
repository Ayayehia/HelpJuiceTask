import BtnImage from "/BtnImage.png";

const WizardSteps = ({ steps }) => {
  return (
    <article className="mt-20 flex flex-col items-center  lg:px-[225px]">
      <h3 className="font-extrabold text-4xl font-plus text-center lg:max-w-[820px] mb-8 px-6">
        Say
        <span className="underline underline-offset-8 p-2 ">
          Goodbye To Writing Docs
        </span>
        , and Hello To Wizardshot Doing it for YOU.
      </h3>
      <ul className="lg:flex lg:flex-row flex flex-col justify-center items-center lg:gap-[89px] gap-7 font-sans  ">
        {steps.map((item) => (
          <li className="max-w-[296px]" key={item.id}>
            <img
              src={item.image}
              className="mb-8 bg-new-custom-gradient shadow-custom"
              alt={item.alt}
            />
            <h3 className="font-semibold text-lg flex items-center">
              {item.id && item.id}.
              {item.image2 && (
                <img className="w-4 h-4" src={item.image2} alt="GreenCheck" />
              )}
              {item.title}
            </h3>
            <p className="text-sm">{item.subTitle}</p>
          </li>
        ))}
      </ul>
      <div className="flex lg:gap-20 gap-2">
        <h3 className="font-bold font-plus lg:mb-40 mb-7 lg:mt-5 mt-14">
          <span className="text-3xl underline"> +32 MORE FEATURES</span>
          <br />
          <span className="text-lg">INCLUDING A KB INTEGRATION</span>
        </h3>
        <img src={BtnImage} alt="image of a person" className="w-9 h-9 mt-20" />
      </div>
    </article>
  );
};

export default WizardSteps;
