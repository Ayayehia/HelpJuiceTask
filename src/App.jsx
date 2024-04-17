import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import WizardSteps from "./Components/WizardSteps";
import ImageOne from "/ImageOne.png";
import ImageTwo from "/ImageTwo.png";
import ImageThree from "/ImageThree.png";
import InstallBox from "./Components/InstallBox";
import AccordinQuestions from "./Components/AccordinQuestions";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
const steps = [
  {
    id: 1,
    image: ImageOne,
    title: " 1.Click Capture",
    subTitle:
      "Once you install the Chrome extension, fire it up, and click Capture.",
    alt: "step one in wizardshot image",
  },
  {
    id: 2,
    image: ImageTwo,
    title: " 2.Perform Your Actions",
    subTitle:
      "Once capturing, Wizardshot carefully monitors what you do to understand how to document it.",
    alt: "step Two in wizardshot image",
  },
  {
    id: 3,
    image: ImageThree,
    title: " 3. Done. Article Written",
    subTitle:
      " Wizardshot carefully crafts the perfect article based off your actions recorded. Just click “Done” and we’ll write up the article in a second.",
    alt: "step Three in wizardshot image",
  },
];
const accordionData = [
  {
    title: "What is Wizardshot?",
    content:
      "Wizardshot is a web app & chrome extension that allows you to create step-by-step tutorials simply by capturing your screen.",
  },
  {
    title: "How is Wizardshot Free?",
    content:
      "The costs to run a service is really inexpensive as most of the processing happens in the Chrome extension. Really - all that we have to pay for is super-secure hosting, awesome 24/7 support and that’s it.",
  },
  {
    title: "Is my data secure?",
    content:
      "This is a test text The costs to run a service is really inexpensive as most of the processing happens in the Chrome extension. Really - all that we have to pay for is super-secure hosting, awesome 24/7 support and that’s it.",
  },
];
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WizardSteps steps={steps} />
      <InstallBox />
      <AccordinQuestions data={accordionData} />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
