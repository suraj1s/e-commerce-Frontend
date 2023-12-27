import React from "react";
type Props = {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  popClassName?: string;
};

const DropPop = ({
  button,
  children,
  isOpen = false,
  onOpen,
  onClose,
  popClassName = "",
}: Props) => {
  return (
    <div className="relative">
      <div
        onClick={() => {
          onOpen();
        }}
      >
        {button}
      </div>
      <div
        className={`top-(100%+10px) absolute z-20 duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        } ${popClassName}`}
      >
        {children}
      </div>
      {isOpen && (
        <div
          onClick={() => {
            onClose();
          }}
          className="fixed inset-0 h-screen w-full"
        ></div>
      )}
    </div>
  );
};

export default DropPop;
