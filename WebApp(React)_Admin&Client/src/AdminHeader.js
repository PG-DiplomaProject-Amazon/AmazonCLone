import {Link} from "react-router-dom";
import './App.css'
export default function AdminHeader() {
    return <center>
        <h1>Welcome to MyAmazon Admin Panel</h1>
        <hr/>
        <Link to={"/customers"}><button className={"btn btn-primary"}>All customers</button></Link>
        <Link to={"/products"}><button className={"btn btn-warning margin_btn"}>All products</button></Link>
        <Link to={"/categories"}><button className={"btn btn-success margin_btn"}>All Categories</button></Link>
        <Link to={"/"}><button className={"btn btn-danger margin_btn"}>Sign out, Admin</button></Link>
        <br/>
        <hr/>
    </center>
}