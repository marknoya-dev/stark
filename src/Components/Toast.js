import React, { useEffect, useState } from "react";
import RemixIcon from "./molecules/RemixIcon";
import Button from "./Button";

const Toast = ({
  id,
  title,
  message,
  variant,
  action,
  onClose,
  duration = 3000,
}) => {
  const [timeoutId, setTimeoutId] = useState(null);
  const styles = {
    iconStyles: {
      default: "text-white",
      primary: "text-primary-base",
      info: "text-info-base",
      success: "text-success-base",
      warning: "text-warning-base",
      danger: "text-danger-base",
    },
    textStyles: {
      default: "text-white",
      primary: "text-primary-active",
      info: "text-info-active",
      success: "text-success-active",
      warning: "text-warning-active",
      danger: "text-danger-active",
    },
    borderStyles: {
      default: "border-black",
      primary: "border-primary-active",
      info: "border-info-active",
      success: "border-success-active",
      warning: "border-warning-active",
      danger: "border-danger-active",
    },
    icons: {
      info: "information-fill",
      success: "checkbox-circle-fill",
      warning: "error-warning-fill",
      danger: "close-circle-fill",
    },
  };
  const { iconStyles, textStyles, borderStyles, icons } = styles;
  const toastVariant = [
    "default",
    "primary",
    "info",
    "success",
    "danger",
    "warning",
  ].includes(variant)
    ? variant
    : "default";

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setTimeoutId();
  };

  const handleMouseLeave = () => {
    setTimeoutId(
      setTimeout(() => {
        onClose();
      }, duration)
    );
  };

  const handleToastClose = () => {
    clearTimeout(timeoutId);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    setTimeoutId(timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div
      key={`toast-${id}`}
      className={`flex flex-row justify-end max-w-md w-fit h-40px h-min-40px shadow-lg border rounded-4px overflow-clip subpixel-antialiased pointer-events-auto ${
        toastVariant !== "default" ? "bg-white" : "bg-black"
      } ${borderStyles[toastVariant]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {toastVariant !== "default" && (
        <div className={`pl-10px flex h-full justify-center items-center`}>
          <RemixIcon
            name={`${icons[toastVariant]}`}
            className={`text-h6 ${iconStyles[toastVariant]}`}
          />
        </div>
      )}

      <div
        className={`${
          toastVariant === "default"
            ? "pl-12px pr-8px justify-between"
            : "px-8px justify-start"
        } min-w-[200px] flex  grow items-center h-full gap-8px  overflow-hidden`}
      >
        {title && (
          <div
            className={`text-body font-bold whitespace-nowrap ${textStyles[toastVariant]}`}
          >
            {title}
          </div>
        )}
        <div
          className={`text-copy-caption text-body font-medium overflow-hidden whitespace-nowrap text-ellipsis mr-16px ${
            toastVariant && toastVariant !== "default"
              ? "text-copy-caption"
              : "text-white"
          }`}
        >
          {message}
        </div>

        {action && (
          <div className={`buttons-container`}>
            <Button
              label={action?.label}
              onClick={action?.onClick}
              variant={toastVariant === "default" ? "white" : "dark"}
              type="text"
            />
          </div>
        )}
      </div>
      <div
        className={` flex flex-col justify-center ${
          toastVariant !== "default"
            ? "border-l border-outline-default hover:bg-gray-50"
            : "hover: bg-gray-900"
        }`}
      >
        <RemixIcon
          name="close-line"
          className={`pr-[7px] h-full text-[18px] text-gray-700 transition-all ease-in cursor-pointer items-center flex ${
            toastVariant !== "default"
              ? "hover:text-gray-900 pl-8px "
              : "hover:text-white pl-4px"
          }  `}
          onClick={handleToastClose}
        />
      </div>
    </div>
  );
};

export default Toast;
