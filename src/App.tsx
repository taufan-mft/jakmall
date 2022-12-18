import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CheckoutPage from "./pages/checkout";
import GoogleFontLoader from "react-google-font-loader";

function App() {
    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Inter',
                        weights: [300, 400, '500', 700],
                    },
                    {
                        font: 'Montserrat',
                        weights: [400, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
        <BrowserRouter>
            <Routes>
                <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>
        </BrowserRouter>
            </>
    );
}

export default App;
