import ReactDOM from 'react-dom';
const Backdrop = () => {
  return (
    <div className="fixed inset-y-0 right-0 bg-light z-50" />
  );
}

const ModalOverlay = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlays');
  return(
    <>
    {ReactDOM.createPortal(<Backdrop></Backdrop>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;