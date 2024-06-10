"use client"

import { useEffect } from 'react';
import { Bounce, ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
   message: string;
   type: 'success' | 'error';
   position?: ToastPosition;
   autoClose?: number;
   hideProgressBar?: boolean;
   closeOnClick?: boolean;
   pauseOnHover?: boolean;
   draggable?: boolean;
   theme?: 'light' | 'dark';
   transition?: any;
}

const Toast = ({
   message,
   type,
   position = "bottom-left",
   autoClose = 5000,
   hideProgressBar = false,
   closeOnClick = true,
   pauseOnHover = true,
   draggable = true,
   theme = "light",
   transition = Bounce,
}: ToastProps) => {

   useEffect(() => {
      if (type === 'success' || type === 'error') {
         switch (type) {
            case 'success':
               toast.success(message, { position, autoClose, hideProgressBar, closeOnClick, pauseOnHover, draggable, theme, transition });
               break;
            case 'error':
               toast.error(message, { position, autoClose, hideProgressBar, closeOnClick, pauseOnHover, draggable, theme, transition });
               break;
         }
      }
   }, [type, message, position, autoClose, hideProgressBar, closeOnClick, pauseOnHover, draggable, theme, transition]);

   return <ToastContainer />;
}

export default Toast;
