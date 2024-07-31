import { ConfigProvider } from "antd";
import React from "react";
import { RouterProvider } from "react-router-dom";

import { ANTD_CONFIG } from "./configs";
import router from "./routes";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={ANTD_CONFIG}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
