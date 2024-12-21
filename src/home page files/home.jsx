import { useState } from "react";
import { useLocation } from "react-router-dom";


import Navbar from "./Navbar";
import Mapping_fun from "./books_creater";
import Footer from "./footer";



function HTMLModElement(){


    const [cart_count,setcount]=useState(0);

    const cart_inc=()=>{
        setcount((prev)=>{
            return prev+1;
        })
    }

    const cart_dec=()=>{
        setcount((prev)=>{
            return prev-1;
        })
    }

    const location=useLocation();
    var x=location.state?.uid;
    const [uid,setuid]=useState(x);

    return <div><Navbar  uid={uid} setuid={setuid} cart_count={cart_count}/> <Mapping_fun cart_dec={cart_dec} cart_inc={cart_inc} /> <Footer /></div>
}


export default HTMLModElement ;