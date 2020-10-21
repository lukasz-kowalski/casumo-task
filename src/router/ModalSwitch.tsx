import React from 'react';
import { useLocation, Switch } from 'react-router-dom';
import { routes, modalRoutes } from './routes';
import Routes from './Routes';

const ModalSwitch: React.FC = () => {
  const location = useLocation<any>();

  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Routes routes={routes} />
      </Switch>

      {background && <Routes routes={modalRoutes} />}
    </>
  );
};

export default ModalSwitch;
