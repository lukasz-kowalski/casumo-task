import React from 'react';
import { Redirect } from 'react-router-dom';
import { cards } from 'router/routePaths';

const Home: React.FC = () => {
  return <Redirect to={cards.list} />;
};

export default Home;
