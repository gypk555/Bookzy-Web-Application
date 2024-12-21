import React from "react";
import "../home page files/new_home.css";
// import Book1 from "./book_images/book1.jpg"


function cart_entry(props){
    return <div >
        <div className="homepage_books">
            <div className="image"><img src={props.src} alt="book"></img></div>
            <div>{props.bookname}</div>
            <div>{props.author}</div>
            <div>{props.type}</div>
            <div>{props.grid_item_price}</div>
            <div><button className="button button1" ><a href={props.grid_item_buy1}><b>Buy!</b></a></button> <button><b>remove from Cart</b></button></div>
        </div>
    </div>;
}


export default cart_entry;