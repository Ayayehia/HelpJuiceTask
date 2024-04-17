const WizardSteps = ({ steps }) => {
  return (
    <article className="mt-20 flex flex-col items-center  lg:px-[225px]">
      <h3 className="font-extrabold text-4xl font-plus text-center lg:max-w-[820px] mb-8 px-6">
        Say
        <span className="underline ">Goodbye To Writing Docs</span>, and Hello
        To Wizardshot Doing it for YOU.
      </h3>
      <ul className="lg:flex lg:flex-row flex flex-col justify-center items-center lg:gap-[89px] gap-7 font-sans  ">
        {steps.map((item) => (
          <li className="max-w-[296px]" key={item.id}>
            <img
              src={item.image}
              className="mb-8 bg-new-custom-gradient shadow-custom"
              alt={item.alt}
            />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm">{item.subTitle}</p>
          </li>
        ))}
      </ul>
      <h3 className="font-bold font-plus lg:mb-40 mb-7 lg:mt-5 mt-14">
        <span className="text-3xl underline"> +32 MORE FEATURES</span>
        <br />
        <span className="text-lg">INCLUDING A KB INTEGRATION</span>
      </h3>
    </article>
  );
};

export default WizardSteps;
