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
      <div className="lg:mx-28 mx-7 max-w-7xl border-t border-black pt-[90px] ">
        <div className="grid :grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2 ">
            <div className="grid grid-cols-2 md:gap-8">
              <div className="grid grid-col-span-2 ">
                <img src={Logo} className="w-[245px] h-11" />
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
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
                <img src={Image} className="w-[135px] h-20" />
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Learn More
                </h3>
                <ul role="list" className="mt-6 space-y-4">
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
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="space-y-4">
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
              <div className="mt-10 md:mt-0">
                <ul role="list" className="mt-6 ">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <div className="flex gap-6 lg:mt-4 lg:mb-11 mb-6 mt-12">
                    <img className="w-9 h-9" src={Tiktok} />
                    <img className="w-9 h-9" src={Instgram} />
                  </div>
                </ul>
                <div className="flex mt-11 gap-12 font-mulish font-bold text-2xl">
                  <p>Sign Up</p>
                  <p>Log in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:mt-16">
          <p className="text-xs leading-5 text-gray-500">
            © 2024 Wizardshot – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
