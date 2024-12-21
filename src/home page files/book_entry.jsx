import React, { useState } from "react";
import "./new_home.css";
import { useNavigate } from "react-router-dom";

function BookEntry(props) {
    const [isInCart, setIsInCart] = useState(false);
    const navigate = useNavigate();

    function handleBuyClick() {
        // Construct a serializable object with only the necessary information
        const bookDetails = {
            src: props.src,
            bookname: props.bookname,
            author: props.author,
            type: props.type,
            item_price: props.item_price.item_price, // Assuming item_price is an object and you need a specific property from it
            item_buy1: props.item_buy1
        };
    
        // Navigate with the serializable object
        try {
            navigate("/buy_page", { state: bookDetails });
        } catch (error) {
            console.error("Failed to navigate with error:", error);
        }
    }
    
    

    function handleCartClick() {
        setIsInCart(prev => !prev);
        isInCart ? props.cart_dec() : props.cart_inc();
    }

    return (
        <div className="main_homepage_books">
            <div className="homepage_books">
                <div className="image"><img src={props.src} alt="book" /></div>
                <div>{props.bookname}</div>
                <div>{props.author}</div>
                <div>{props.type}</div>
                <div>{props.item_price}</div>
                <div className="buttons">
                    <button className="button button1" onClick={handleBuyClick}><b style={{color: "white"}}>Buy!</b></button>
                    <button onClick={handleCartClick}>
                        <b>{isInCart ? "Remove from Cart" : "Add to Cart"}</b>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookEntry;