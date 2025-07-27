'use client';
import React from "react";

interface ContainerProps {
    children : React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="mx-auto px-4 sm:px-4 md:px-6 xl-px-10 max-w-[2520px]">
      {children}
    </div>
  )
}

export default Container
