
import bookimages from "./books container";
import Buy_page from "../buy_page files/Buy_page";
import { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar(props){
    const navigate=useNavigate();

    const [search_input,setsearch]=useState("");

    const [genre, setgenre]=useState(false);

    const [profile, setprofile]=useState(false);

    const [settings,setsettings]=useState(false);

    function handle_change(event){
        const [value]=event.target;
        setsearch(value);
        
    }

    function handle_genres(){
        setgenre(previous=>{
            return (!previous);
        });
    }

    function Handle_profile(){
        setprofile((prev)=>{
            return !prev;
        })
    }

    function handle_settings(){
        setsettings((prev)=>{
            return !prev;
        })
    }


    // function search_fun(){
    //     var len=bookimages.length;
    //     for (let i=0;i<len;i++){
    //         if(search_input===bookimages[i].bookname){
                
    //     }
    // }
    // }


    // function handle_input_search(){
    //     bookimages.filter(())
    // }









    return(
    <nav className="nav">
        <ul>
        <a href="/" className="site-title"> Bookzy.com <span></span></a>
            <li className="searchbar" style={{"display":"flex"}}>
                <input style={{"margin":"20px"}} onChange={handle_change} placeholder="Search for a book" ></input>
                <button >
                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </button>
            </li>
            <li className="active jus-cen">
                <button onClick={(event)=>{
                    event.preventDefault();
                    navigate("/");
                }}
                ><p>Home</p></button>
            </li>
            <li className="jus-cen">
                <a href="about.html " > About</a>
            </li>            
            <li className="jus-cen">
                <div style={{"position":"relative"}}>
                    <div><button onClick={handle_genres}  style={{"backgroundColor":"transparent"}} className="genre_button"><p>Genres</p></button></div>
                    {genre?<div className="Genres" >
                        <div onClick={(event)=>{
                            event.preventDefault();
                            navigate("/genre/Fantasy")
                        }}>Fantasy</div>
                        <div onClick={(event)=>{
                            event.preventDefault();
                            navigate("/genre/Fictional")
                        }}>Fictional</div>
                        <div onClick={(event)=>{
                            event.preventDefault();
                            navigate("/genre/Romantic")
                        }}>Romantic</div>
                        <div onClick={(event)=>{
                            event.preventDefault();
                            navigate("/genre/Horror")
                        }}>Horror</div>
                    </div>
                    :
                    null}
                </div>
            </li>
            <li className="jus-cen">
                <button onClick={(event=>{
                    event.preventDefault();
                    navigate("/cart");
                })}><b>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                <sup style={{"color":"red"}}>{props.cart_count}</sup></b></button>
            </li>
            <li className="jus-cen">
                <a href="contactpage.html" >Contact</a>
            </li>
            <li className="jus-cen">{props.uid?
                    <div>
                      <div>
                    <button onClick={Handle_profile}
                     style={{"backgroundColor":"transparent", "paddingTop":"10px"}}
                    ><svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        
                    </button>
                      </div>
                    {profile?
                        <div className="Profile">
                            <div>Orders</div>
                            <div>
                                <div onClick={handle_settings} >Account settings</div>
                                {settings?
                                    <div className="account_settings">
                                        <div>Edit Profile</div>
                                        <div>Saved Cards & Wallet</div>
                                        <div>Notification settings</div>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <div onClick={(event)=>{
                            event.preventDefault();
                            props.setuid(null);
                            }}>Logout</div>
                        </div>
                        :
                        null
                    }
                    </div>
                    :
                    <button onClick={(event)=>{
                        event.preventDefault();
                        navigate("/login");
                    }}><p>Login/Register</p></button>
                    }
                
            </li>
        </ul>
    </nav>

    )
}