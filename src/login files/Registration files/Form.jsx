import React, { useState } from "react";
import axios from "axios";
import img from "./bookshelf.jpg";
// import Login from "../login";
import { useNavigate } from "react-router-dom";
import "./Form.css";
// import "./login.css";



const Form = () =>{
    const Navigate=useNavigate();
    const [user_inputs,setinput]=useState({
        fname:"",
        lname:"",
        uname:"",
        mail:"",
        number:"",
        password:"",
        c_password:"",
    });

   
    const [sign_up_confirm,setsignup]=useState(false);

     async function handle_submit(event){
        event.preventDefault();
        console.log("called submit");
        if(user_inputs.fname!=="" && user_inputs.lname!=="" && user_inputs.uname!=="" && user_inputs.password!=="" && user_inputs.mail!=="" && user_inputs.number!=="" && user_inputs.c_password!==""){
            if(user_inputs.c_password===user_inputs.password){
                try{
                    const res=await axios.post("http://localhost:5542/signup",user_inputs);
                    if(res.data==='error' || res.data==="Username already exists.Please choose different one"){
                        alert(res.data);
                    }
                    else{
                        console.log("success");
                        setsignup(true);
                    }
                    
                    
                }catch(err){
                    console.log(err);
                    alert("ERROR");  
                }
            }
        }
        else{
            alert("please fill alll the details");
        }  
    }

    function handlechange(event){
        const {name,value}=event.target;
        setinput((pre)=>{
            return({
                ...pre,
                [name]:value
            })
        });
        // console.log(user_inputs);
    }

        return (
        
        <div className="reg_page" style={{"backgroundImage":`url(${img})` }} >
            <div></div>
            <div className="form_page">
                {!sign_up_confirm?<form>
                    <table>
                        <tbody>

                        <tr><td>First Name</td><td>Last Name </td></tr>
                        <tr><td><input type="text" placeholder="First Name" className="name" name="fname" onChange={handlechange} required></input></td><td><input type="text" placeholder="Last Name" className="name" name="lname" onChange={handlechange}></input></td></tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>

                        <tr><td>Username            </td></tr>
                        <tr><td><input type="text" placeholder="Username" className="uname" name="uname" onChange={handlechange} required></input></td></tr>
                        <tr><td>Email</td></tr>
                        <tr><td><input type="mail" placeholder="user@Email.com" className="uname" name="mail" onChange={handlechange} required></input></td></tr>
                        <tr><td>Mobile No</td></tr>
                        <tr><td><input type="text" placeholder="9876543212" className="uname" name="number" onChange={handlechange} required></input></td></tr>
                        <tr><td>Password</td></tr>
                        <tr><td><input type="password" className="uname" name="password" onChange={handlechange} required ></input></td></tr>
                        <tr><td>Confirm Password</td></tr>
                        <tr><td><input type="password" className="uname" name="c_password" onChange={handlechange} required></input></td></tr>
                    </tbody>
                    </table>
                    <button 
                style={{"height":"30px"}}
                onClick={handle_submit}>sign up</button>
                    <br></br>
                    <button style={{"backgroundColor":"transparent","color":"black","border":"none","height":"30px"}} onClick={(Event)=>{
                        Event.preventDefault();
                        Navigate("/login");
                    }}>Already have account? Sign in</button>
                </form>
                :
                <div className="form_page_log">
                <h1 style={{"color":"rgb(218, 236, 111)"}}>Thanks for signing up</h1>
                <button 
                style={{"height":"30px"}}
                onClick={(event)=>{
                    event.preventDefault();
                    Navigate("/login");
                }}>back to login</button>
                </div>}
            </div>
        </div>
    
        );
    }

export default Form;



// onClick={(event)=>{
//     event.preventDefault();
//     Navigate("/login");
// }}
