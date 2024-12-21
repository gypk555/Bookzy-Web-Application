import React from "react";
import Cart_entry from "./cart_entry";
import { cart } from "../home page files/books_creater";



function create_entry(props){
    return (
        <div>
            <Cart_entry
            key={props.id}
            src={props.imgUrl}
            bookname={props.bookname}
            author={props.author}
            type={props.type}
            grid_item_price={props.grid_item_price}
            grid_item_buy1={props.grid_item_buy1}
            />
        </div>
    );
}


function cart_fun(){
    return (<div className="grid_container">
        {cart.map(create_entry)}
        </div>
        );
}


export default cart_fun;