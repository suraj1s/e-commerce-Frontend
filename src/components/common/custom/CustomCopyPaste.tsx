import { CopyIcon, TickIcon } from "@/assets/icons";
import React, { useState } from "react";

type Prop = {
  copiedData: any;
  title?: string;
  className?: string;
};

const CustomCopyPaste = ({ copiedData, title, className }: Prop) => {
  const [showCopied, setShowCopied] = useState(false);

  const onCopy = () => {
    window.navigator.clipboard.writeText(copiedData ?? "");
    setShowCopied(true);
    const timeoutId = setTimeout(() => {
      setShowCopied(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  };

  return (
    <button
      className={` ${className && className} relative rounded-md`}
      type="button"
      onClick={onCopy}
    >
      <span className="flex items-center gap-x-2">
        <TickIcon
          className={`${
            showCopied ? "scale-100" : "scale-0"
          } absolute  h-5 w-5 text-[#667085]
                   transition-transform`}
        />
        <CopyIcon
          className={`${
            showCopied ? "scale-0" : "scale-100"
          } h-5 w-5 transition-transform`}
        />
        {title && <p className="text-base font-semibold">{title}</p>}
      </span>
    </button>
  );
};

export default CustomCopyPaste;
