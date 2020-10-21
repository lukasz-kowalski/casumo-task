import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

const Modal: React.FC = ({ children }) => {
  const history = useHistory();

  const onBack = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <>
      <div
        onClick={onBack}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.15)',
        }}></div>
      <div
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}>
        <>
          <button onClick={onBack}>X</button>
          {children}
        </>
      </div>
    </>
  );
};

export default Modal;
