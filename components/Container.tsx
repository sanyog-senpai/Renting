import React, { ReactNode } from 'react';
import "@/app/globals.css";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    class?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, class: customClass }) => {
    return (<div className={`container ${className} ${customClass}`}>{children}</div>)
};

export default Container;