import {
  AlertErrorIcon,
  AlertSuccessIcon,
  AlertWarningIcon,
} from "@/assets/icons";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {
  alertType: "error" | "warning" | "success";
  title: string;
  description: string;
  onCancel?: () => void;
  onDelete?: () => void;
  showActionButtons?: boolean;
};

const AlertPopup = ({
  alertType,
  title,
  description,
  onCancel,
  onDelete,
  showActionButtons,
}: Props) => {
  let alertIcon;
  switch (alertType) {
    case "error":
      alertIcon = <AlertErrorIcon />;
      break;
    case "warning":
      alertIcon = <AlertWarningIcon />;
      break;
    case "success":
      alertIcon = <AlertSuccessIcon />;
      break;
    default:
      alertIcon = null;
      break;
  }

  return (
    <div className="flex items-start gap-x-6">
      <div className="hidden sm:block">{alertIcon}</div>
      <div>
        <div>
          <h1 className="text-lg font-semibold  text-gray-900 ">{title}</h1>
          <p className="mt-2 whitespace-normal text-sm font-normal">
            {description}
          </p>
        </div>
        {showActionButtons && (
          <div className="mt-4 flex flex-col justify-between gap-y-2 sm:mt-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" />
              <p className="text-sm">Don’t show again</p>
            </div>
            <div className="mt-2 flex items-center gap-x-3 sm:mt-0 ">
              <div>
                <CustomButton
                  type="button"
                  onCLick={onCancel}
                  title="Cancel"
                  className="outline-button"
                />
              </div>
              <div>
                <CustomButton
                  type="button"
                  onCLick={onDelete}
                  title={alertType === "error" ? "Delete" : "Confirm"}
                  className={` ${
                    alertType === "error" ? "!bg-error-600" : ""
                  } `}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertPopup;
