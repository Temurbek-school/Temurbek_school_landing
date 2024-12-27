"use static"

import AboutUs from "./AboutUsPart/AboutUs";
import Testimonials from "./components/Testimonials/testimonials";
import ImagesComp from "./ImagesComp";
import Value_facts_part from "./value_facts_part/value_facts_part";
import ValuePart from "./value_part/ValuePart";


export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <ValuePart/> 
      <AboutUs/>
      <Value_facts_part/>
      <ImagesComp/>
      <Testimonials/>
    </div>
  );
}
