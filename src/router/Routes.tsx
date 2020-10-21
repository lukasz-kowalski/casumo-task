import React from 'react';
import { Route } from 'react-router-dom';
import { RoutesProps } from './interface';

const Routes: React.FC<RoutesProps> = ({ routes }) => {
  return (
    <>
      {routes.map((route) => {
        const { path, component, exact } = route;
        const propsForRoute = { path, component, exact };

        return <Route key={path} {...propsForRoute} />;
      })}
    </>
  );
};

export default Routes;
