import React from "react";
import { Button } from "semantic-ui-react";

const RefreshButton = () => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <>
      <Button
        className="button"
        inverted
        circular
        icon="refresh"
        onClick={refresh}
      />
    </>
  );
};

export default RefreshButton;
