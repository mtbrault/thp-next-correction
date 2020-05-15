import React from 'react';
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <section className="home">
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
      <p>
        <FormattedMessage id="home.paragraph" />
      </p>
    </section>
  );
}

export default Home;
