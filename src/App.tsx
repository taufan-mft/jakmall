import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/checkout";
import GoogleFontLoader from "react-google-font-loader";
import { CheckoutProvider } from "./context/CheckoutContext";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Inter",
            weights: [300, 400, "500", 700],
          },
          {
            font: "Montserrat",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/checkout/:type"
            element={
              <CheckoutProvider>
                <CheckoutPage />
              </CheckoutProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
