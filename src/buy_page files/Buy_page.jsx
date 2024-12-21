// BuyPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "./buy_page.css";

function BuyPage() {
    const location = useLocation();
    const { src, bookname, author, type, item_price, item_buy1 } = location.state;

    return (
        <div>
            <div><img src={src} alt="book_image" /></div>
            <div className="p">{bookname}</div>
            <div className="p">{author} {type}</div>
            <div className="grid-item-price">{item_price}</div>
            <div className="grid-item-buy1">
                <button className="button button1"><b>Buy!</b></button>
            </div>
        </div>
    );
}

export default BuyPage;
