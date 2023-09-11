import LoginHeader from "./LoginHeader";
import {Link} from "react-router-dom";
import './App.css'
import {useEffect, useState} from "react";
const req = require('./Constant');
export default function ClientHeader() {
    const [customer, setCustomer]=useState("")

    useEffect(()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                let result=JSON.parse(xhr.responseText).data
                setCustomer(result[0].customer_name)
            }
        }
        xhr.open("GET", req+"/customers/"+localStorage.getItem("cid"))
        xhr.send()
    },[])
    return <center>
        <LoginHeader/>
        <Link to={"/home"}><button className={"btn btn-primary"}>Home</button></Link>
        <Link to={"/myorders"}><button className={"btn btn-warning margin_btn"}>My orders</button></Link>
        <Link to={"/mycategories"}><button className={"btn btn-success margin_btn"}>Categories</button></Link>
        <Link to={"/mycart"}><button className={"btn btn-info margin_btn"}>My cart</button></Link>
        <Link to={"/"}><button className={"btn btn-danger margin_btn"} onClick={()=>{localStorage.clear()}}>Sign out, {customer}</button></Link>
        <br/>
        <hr/>
    </center>
}