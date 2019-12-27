import { toast } from 'react-toastify';

export const toastError = error => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    message = error.message;
  }
  message = 'Có lỗi .!';
  if (message !== null && message !== '' && typeof message !== 'undefined') {
    toast.error(message, {
      autoClose: 3000,
    });
  }
};

export const toastSuccess = str => {
  if (str && str.length) {
    toast.success(str, {
      autoClose: 3000,
    });
  }
};
