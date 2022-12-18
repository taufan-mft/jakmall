import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CheckoutPage from "./pages/checkout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
