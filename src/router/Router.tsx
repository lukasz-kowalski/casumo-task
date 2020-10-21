import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'shared/ScrollToTop';
import ModalSwitch from './ModalSwitch';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="container">
          <ModalSwitch />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
