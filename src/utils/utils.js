import { toast } from 'react-toastify';

export const TOAST_TYPES = Object.freeze({
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warn",
    ERROR: "error",
});

export const toaster = (message, type = TOAST_TYPES.INFO) => toast[type](message, {
    position: "button-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
});
