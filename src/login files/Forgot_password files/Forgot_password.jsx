import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forgot_password.css";


function Forgot_password(){
    const navigate=useNavigate();

    const [heading, set_heading]=useState("Enter username or Email-Id");
    const [mail, setmail]=useState("");
    const [sent,setSent]=useState(false);

    function handle_change(event){
        const {value}=event.target;
        setmail(value);
    }


    function handle_heading(event){
        event.preventDefault();
        if(mail!==""){
            set_heading("Password reset link is sent to mail");
            setSent(true);
            // setbool(1);
            
        }
        

    }

    return (
        <div className="forgot_page">
            <form onSubmit={handle_heading}>
                <div>{heading}</div>
                {!sent?<input name="mail_id" type="email" onChange={handle_change} required></input>:null}
                    {sent?<button className="button"onClick={(event)=>{
                         event.preventDefault();
                         navigate("/login");
                        }}>Back to login</button>
                        :
                        <div className="forgot">
                            <button className="button"  onClick={(event)=>{
                                 event.preventDefault();
                                 navigate("/login");
                            }}>Back</button>
        
                            <button className="button" type="submit">Submit</button>
                        </div>
                }
                  
            </form>          
        </div>

    );
}

export default Forgot_password;