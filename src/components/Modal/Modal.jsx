import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import useToggle from "../../hooks/useToggle";

const Modal = ({
  title,
  width = "25%",
  height = "auto",
  children,
  rounded = "4px",
  inside = false,
  close = false,
}) => {
  return (
    <div
      className="modal-wrapper toggle-close z-50 bg-black/70 fixed left-0 top-0 w-full h-full flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        style={{ width, height, borderRadius: rounded }}
        className={`modal ${
          inside ? "relative" : ""
        } bg-white shadow-lg ] overflow-hidden`}
      >
        <div className={`modal-head  ${title ? "border-b pb-3 pt-2" : null}`}>
          <h2 id="modal-title" className="text-base text-center font-semibold">
            {title && title}
          </h2>

          {!close && (
            <button
              className={`toggle-close p-1 ${
                inside
                  ? "text-black right-2 top-1.5"
                  : "text-white right-3 top-3"
              }  text-2xl absolute `}
            >
              <LiaTimesSolid className="toggle-close" />
            </button>
          )}
        </div>
        <div className="modal-body ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
