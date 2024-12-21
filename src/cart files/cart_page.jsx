import Navbar from "../home page files/Navbar";
import Cart_creater from "./cart_creater";
import Footer from "../home page files/footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function cart_page(){

    // const location=useLocation();
    // var x=location.state?.uid;
    // const [uid,setuid]=useState(x);


    return <div>
            <Navbar />
            <Cart_creater />
            <div style={{"position":"fixed","bottom":"0","width":"100vw"}}><Footer /></div>
        </div>;
}

export default cart_page;