import React from "react";
import Navigation from "../../components/Navigation/pageNav";
import ContactForm from "../../components/Contact/Contact";

const contact = () => {
  return (
    <>
      <Navigation />
      <div style={{height:`80vh`}}>
        
        <ContactForm/>
      </div>
    </>
  );
};

export default contact;
