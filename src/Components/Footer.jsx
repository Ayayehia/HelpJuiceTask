import Logo from "/WizardLogo-footer.png";
import Image from "/Footer.png";
import Tiktok from "/Tiktok.png";
import Instgram from "/Instgram.png";
const navigation = {
  solutions: [
    {
      name: "Turn complex process into a simple step-by step Guide",
      href: "#",
    },
  ],
  support: [
    { name: "Wizardshot", href: "#" },
    { name: "Community Page", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Security Information", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Status Page", href: "#" },
  ],
  legal: [
    { name: "+1 (833) 387 3877", href: "#" },
    { name: " success@wizardshot.com", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="lg:mx-28 mx-7 border-t border-black pt-[90px] ">
        <div className="grid lg:grid-cols-4 md:gap-8">
          {/* logo */}
          <div className=" col-span-2 lg:col-span-1">
            <img src={Logo} className="w-[245px] h-11" />
            <p className="lg:pb-7 pb-12 lg:pt-5 pt-6">
              Turn complex process into a <br /> simple step-by step Guide
            </p>
            <img src={Image} className="w-[135px] h-20 mb-12 lg:mb-0" />
          </div>
          {/* learn more */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-900">
              Learn More
            </h3>
            <ul role="list" className="mt-6 gap-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* company */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-900">
              Company
            </h3>
            <ul role="list" className="gap-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* social media */}
          <div className=" mt-11 gap-12 font-mulish font-bold text-2xl">
            <div className="flex gap-6 lg:mt-4 lg:mb-11 mb-6 mt-12">
              <img className="w-9 h-9" src={Tiktok} />
              <img className="w-9 h-9" src={Instgram} />
            </div>
            <div className="flex lg:gap-12 gap-6">
              <p>Sign Up</p>
              <p>Log in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:mt-16">
        <p className="text-xs leading-5 text-gray-500">
          © 2024 Wizardshot – All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
