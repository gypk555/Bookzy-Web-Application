import React, { useState } from "react";
import Bookimages from "./books container";
import Book_entry from "./book_entry";
import Buy_page from "../buy_page files/Buy_page";

export var cart=[];
function Mapping_fun({cart_inc,cart_dec}){
    const [cart_container,setcart]=useState([]);  
    

    // function To_buy_page(buy_page){

    //     console.log(buy_page);
    //     return(
    //         <Buy_page 
    //             src={buy_page.src}
    //             bookname={buy_page.bookname}
    //             author={buy_page.author}
    //             type={buy_page.type}
    //             item_price={buy_page.item_price}
    //         />
    //     );
    // }


    function addtocart(book){
        const data={
            imgUrl:book.src,
            bookname:book.bookname,
            author:book.author,
            type:book.type,
            item_price:book.item_price
        }
        setcart((prev)=>{
            return ([...prev,data]);
        })
    }

    cart=[...cart_container];   

    function Create_entry(props){

        return (
            <Book_entry
            key={props.id}
            src={props.imgUrl}
            bookname={props.bookname}
            author={props.author}
            type={props.type}
            item_price={props.item_price}
            item_buy1={props.item_buy1}
            click={addtocart}
            cart_dec={cart_dec} 
            cart_inc={cart_inc}
            // to_buy_page={To_buy_page}
        />
        );
    }
    

    return (<div className="grid_container">
        {Bookimages.map(Create_entry)}
        </div>
        );
}


export default Mapping_fun;
