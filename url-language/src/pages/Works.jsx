import React from "react";
import { FormattedMessage } from "react-intl";
import { Switch, Route, useRouteMatch, Link, } from "react-router-dom";
import StudyCase from '../components/StudyCase';
import works from '../components/StudyCase/studycases';

const Works = () => {
  let { path, url } = useRouteMatch();

  return (
    <section className="works">
      <h1>
        <FormattedMessage id="works.title" />
      </h1>
      <p>
        <FormattedMessage id="works.paragraph" />
      </p>

      {works.map(({ id, slug, name }) => (
        <li key={id}>
          <Link to={`${url}/${slug}-study-case`}>{name}</Link>
        </li>
      ))}

      <Switch>
        <Route path={`${path}/:studyCaseId`}>
          <StudyCase />
        </Route>
      </Switch>
    </section>
  );
};

export default Works;
