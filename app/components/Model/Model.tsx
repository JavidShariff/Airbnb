"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import useRegisterModel from "../hooks/useRegisterModel"; 

interface ModelProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Model: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
  secondaryAction,
  secondaryLabel,
  actionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300); 
  }, [disabled, onClose]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen && !showModal) {
    return null;
  }

  return (
    <>
      <div
        className="
          flex
          justify-center
          items-center
          bg-neutral-800/70
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          focus:outline-none
          z-50
          "
    
      >
        <div
          className="
            relative
            w-full
            h-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            lg:h-auto
            md:h-auto
            mx-auto
            my-6"
        >
          {/* content */}
          <div
            className={`
              translate
              duration-300
              h-full
              ${showModal ? `translate-y-0 ` : `translate-y-full`}
              ${showModal ? `opacity-100` : `opacity-0`}
            `}
            // Stop propagation on the content div to prevent closing when clicking inside
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none
                "
            >
              {/* HEADER */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  p-6
                  relative
                  border-b-[1px]
                "
              >
                <button
                  onClick={handleClose} // Use the local handleClose
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                    cursor-pointer"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* BODY */}
              <div
                className="
                  flex-auto
                  relative
                  p-6"
              >
                {body}
              </div>
              {/* FOOTER */}
              <div
                className="
                  flex
                  flex-col
                  gap-2
                  p-6
                  "
              >
                <div
                  className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full"
                >
                  {secondaryAction && secondaryLabel && (
                    <Button
                      label={secondaryLabel} // Use secondaryLabel prop
                      onClick={handleSecondaryAction} // Use local handleSecondaryAction
                      outline
                      disabled={disabled}
                    />
                  )}
                  <Button
                    label={actionLabel} // Use actionLabel prop
                    onClick={handleSubmit} // Use local handleSubmit
                    disabled={disabled}
                  />
                </div>
                {footer} {/* Render footer if provided */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;