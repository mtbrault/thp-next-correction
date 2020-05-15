import React from 'react'
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <section className="about">
      <h1>
        <FormattedMessage id="about.title" />
      </h1>
      <p>
        <FormattedMessage id="about.paragraph" />
      </p>
    </section>
  );
};

export default About
