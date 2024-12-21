import React from "react";
import Login from "./login files/login";
import Home from "./home page files/home";
import Cart_page from "./cart files/cart_page"
import {Routes,Route} from "react-router-dom";
import Form from "./login files/Registration files/Form";
import Forgot_password from "./login files/Forgot_password files/Forgot_password";
import Buy_page from "./buy_page files/Buy_page";
import Horror from "./genres/Fantasy";
import Fictional from "./genres/Fictional";
import Fantasy from "./genres/Fantasy";
import Romantic from "./genres/Romantic";
import Contactpage from "./contact files/contact";

// import React from "react";
// import Login from './login.jsx'

function app(){
    return (<div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot_password />} />
            <Route path="/register" element={<Form />} />
            <Route path="/cart" element={<Cart_page />} />
            <Route path="/buy_page" element={<Buy_page />} />
            <Route path="/genre/Horror" element={<Horror />} />
            <Route path="/genre/Romantic" element={<Romantic />} />
            <Route path="/genre/Fantasy" element={<Fantasy />} />
            <Route path="/genre/Fictional" element={<Fictional />} />
            <Route path="/contact" element={<Contactpage />} />
        </Routes>
    </div>);
 }

export default app;
