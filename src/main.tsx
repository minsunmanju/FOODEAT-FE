// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import "./style.css";
// import "./styles/global.css";
// import QueryProvider from "./app/providers/QueryProvider.tsx";
// import { BrowserRouter } from "react-router-dom";


// registerSW({ immediate: true });

// createRoot(document.getElementById("root")!).render(
//   <QueryProvider>
//     <App />
//   </QueryProvider>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import "./index.css";
import "./style.css";
import "./styles/global.css";
import App from "./App.tsx";
import QueryProvider from "./app/providers/QueryProvider.tsx";

registerSW({ immediate: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>,
);