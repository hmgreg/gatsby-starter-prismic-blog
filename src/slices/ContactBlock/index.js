//import { Bounded } from "../../components/Bounded";
//import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

/*
const ContactBlock = ({ slice }) => {
  const image = slice.primary.title;

  return (
    <Bounded as="section" size="base">
      <figure>
         
            <PrismicRichText field={image} />
        
      </figure>
    </Bounded>
  );
};*/

/*
const ContactBlockRepeater = () => {
  const name = slice.items[i].name;
  const position = slice.items[i].position;

  return (
    <Bounded as="section" size="small">
      <form
        action="/api/contact"
        method="post"
        className="grid grid-cols-1 gap-6"
      >
        <InputField label="Name" name="name" placeholder={name} />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder={position}
        />
        <TextareaField
          label="Message"
          name="message"
          placeholder="Placeholder"
        />
        <button
          type="submit"
          className="ml-auto inline-flex items-center gap-2"
        >
          Send message{" "}
          <span aria-hidden={true} className="text-xl">
            &rarr;
          </span>
        </button>
      </form>
    </Bounded>
  );
};
*/


import React from 'react';
//repater type field
const ContactBlock = ({ slice }) => {
  const { primary, items } = slice;

  return (
    <div>
      <h1>{primary.title}</h1>
      <ul>
        {Object.values(items).map((item, index) => (
          <li key={index}>
            <strong>{item.config.label}: </strong>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBlock;
