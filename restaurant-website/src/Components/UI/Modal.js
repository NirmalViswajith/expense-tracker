import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className="fixed inset-0 bg-dark opacity-50 z-50" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-light text-light p-4">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
