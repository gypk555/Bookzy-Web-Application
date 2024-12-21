import React, { useState } from "react";
import "../home page files/new_home.css";
import Buy_page from "../buy_page files/Buy_page";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../home page files/Navbar";
import Footer from "../home page files/footer";

const container=[];
export var cart=[];

export default function Horror(){
    const [cart_container,setcart]=useState([]); 
    const [cart_count,setcount]=useState(0);
    const [cart_value, setvalue]=useState(true);
    

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

    function addtocart(){
        const data={
            imgUrl:container.src,
            bookname:container.bookname,
            author:container.author,
            type:container.type,
            item_price:container.item_price
        }
        setcart((prev)=>{
            return ([...prev,data]);
        })
    }



    function To_buy_page(){

        // console.log(buy_page);
        return(
            <Buy_page 
                src={container.src}
                bookname={container.bookname}
                author={container.author}
                type={container.type}
                item_price={container.item_price}
            />
        );
    }



    return <div >
        <Navbar />
        <div className="homepage_books">
            <div className="image"><img src={container.src} alt="book"></img></div>
            <div>{container.bookname}</div>
            <div>{container.author}</div>
            <div>{container.type}</div>
            <div>{container.item_price}</div>
            <button className="button button1" style={{"color":"white"}} onClick={(event)=>{
                To_buy_page();
                event.preventDefault();
                Navigate("/buy_page");
            }} ><b>Buy!</b></button> {cart_value?
                <button onClick={()=>{
                    addtocart();
                    setvalue((prev)=>{return(!prev);});
                    cart_inc();
                   }}>
                    <b>Add to Cart</b>
                </button>
                :
                <button onClick={()=>{
                    setvalue((prev)=>{return(!prev);});
                    cart_dec();
                    }}>
                    <b>remove from cart</b>
                </button>
                } 
            
        </div>
        <Footer />
    </div>;
}