"use static"

import AboutUs from "./AboutUsPart/AboutUs";
import ContactForm from "./components/ContactFrom/ContactForm";
import ImagesComp from "./ImagesComp/ImagesComp";
import Value_facts_part from "./value_facts_part/value_facts_part";
import ValuePart from "./value_part/ValuePart";
import Prices from "./Prices/Prices";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <ValuePart/> 
      <AboutUs/>
      <Value_facts_part/>
      <ImagesComp/>
      <Prices />
    </div>
  );
}
