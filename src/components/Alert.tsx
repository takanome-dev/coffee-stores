import { ToastContainer } from 'react-toastify';

const Alert = () => (
  <ToastContainer
    position="top-center"
    bodyClassName="toast"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    style={{ width: '40rem' }}
  />
);

export default Alert;
