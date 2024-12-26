"use static"
<<<<<<< HEAD
export default function Home() {
  return (
    <div className=" flex items-center justify-center">
Really
=======

import AboutUs from "./AboutUsPart/AboutUs";
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
>>>>>>> feature_value
    </div>
  );
}
