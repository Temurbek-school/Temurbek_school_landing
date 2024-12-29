"use static"

import AboutUs from "./AboutUsPart/AboutUs";
import ContactForm from "./components/ContactForm/ContactForm";
import ImagesComp from "./ImagesComp/ImagesComp";
import Value_facts_part from "./value_facts_part/value_facts_part";
import ValuePart from "./value_part/ValuePart";
import Prices from "./Prices/Prices";
import Testimonials from "./components/Testimonials/testimonials";


export default function Home() {
  return (
    <div className="flex items-center bg-gradient-to-br from-violet-800 to-blue-950 justify-center flex-col">
      <ValuePart/> 
      <AboutUs/>
      <Value_facts_part/>
      <ImagesComp/>
      <Prices/>
      <Testimonials/>
    </div>
  );
}
