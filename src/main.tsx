import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa il router
import App from "./App";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	 <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

