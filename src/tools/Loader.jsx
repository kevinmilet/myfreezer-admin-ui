import React from 'react';
// @ts-ignore
import loader from '../assets/icons/loader.svg';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div role="status">
        <img src={loader} width="100%" alt="loader" />
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
};

export default Loader;
