import React from "react";
import Button from "../Button";
import Alert from "../Alert";
import { AlertProvider, useAlert } from "../../context/NotifContext";

export default {
  title: "Hooks/Alert Hook",
  components: Alert,
};

const AlertHookSample = () => {
  const { alert } = useAlert();

  const handleDefaultButtonClick = () => {
    alert.notify({
      message: "Welcome",
      action: { label: "Greet", onClick: () => alert("Hello there!") },
      onClose: () => alert("onClose works"),
    });
  };

  const handleInfoButtonClick = () => {
    alert.info({
      title: "v10.1",
      message: "New update available",
      action: { label: "Update", onClick: () => alert("Updating...") },
    });
  };

  const handleSuccessButtonClick = () => {
    alert.success({
      message: "Image uploaded",
    });
  };

  const handleWarningButtonClick = () => {
    alert.warning({
      message: "This is an overdue application",
    });
  };

  const handleDangerButtonClick = () => {
    alert.danger({
      title: "Bad Gateway",
      message: "We couldn't connect",
      action: { label: "Refresh", onClick: () => alert("Refreshing...") },
    });
  };

  return (
    <div className="flex flex-row gap-8px">
      <Button
        type="outline"
        variant="dark"
        label="Show Default Alert"
        onClick={handleDefaultButtonClick}
      />
      <Button
        type="outline"
        variant="info"
        label="Show Info Alert"
        onClick={handleInfoButtonClick}
      />
      <Button
        type="outline"
        variant="success"
        label="Show Success Alert"
        onClick={handleSuccessButtonClick}
      />
      <Button
        type="outline"
        variant="warning"
        label="Show Warning Alert"
        onClick={handleWarningButtonClick}
      />
      <Button
        type="outline"
        variant="danger"
        label="Show Danger Alert"
        onClick={handleDangerButtonClick}
      />
    </div>
  );
};

const AlertProviderSample = (args) => {
  return (
    <AlertProvider>
      <AlertHookSample />
    </AlertProvider>
  );
};

export const AlertHook = AlertProviderSample.bind({});
