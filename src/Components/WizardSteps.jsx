import BtnImage from "/BtnImage.png";
const SvgGradient = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    viewBox="0 0 800 800"
    style={{ borderRadius: "8%" }}
  >
    <defs>
      <filter
        id="bbblurry-filter"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur
          stdDeviation="71"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          edgeMode="none"
          result="blur"
        ></feGaussianBlur>
      </filter>
    </defs>
    <g filter="url(#bbblurry-filter)">
      <ellipse
        rx="236"
        ry="277.5"
        cx="223.79307966581814"
        cy="377.06815323405243"
        fill="hsla(148, 100%, 50%, 1.00)"
      ></ellipse>
      <ellipse
        rx="236"
        ry="277.5"
        cx="271.3729278879016"
        cy="383.8885778282325"
        fill="hsla(205, 94%, 51%, 1.00)"
      ></ellipse>
      <ellipse
        rx="236"
        ry="277.5"
        cx="379.41858907769483"
        cy="401.72681287570776"
        fill="hsl(263, 100%, 57%)"
      ></ellipse>
      <ellipse
        rx="236"
        ry="277.5"
        cx="455.7426556916759"
        cy="396.0783666465919"
        fill="hsl(11, 100%, 68%)"
      ></ellipse>
      <ellipse
        rx="236"
        ry="277.5"
        cx="561.8250929884884"
        cy="384.74462641221686"
        fill="hsl(68, 100%, 68%)"
      ></ellipse>
    </g>
  </svg>
);
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
          <li className="max-w-[296px] relative" key={item.id}>
            <div className="relative">
              <SvgGradient />
              <img
                src={item.image}
                className="absolute top-[36px] lg:top-[21px] z-10 mb-8 lg:min-w-[196px] "
                alt={item.alt}
              />
            </div>
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
