import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdminHeader from "./AdminHeader";
const req = require('./Constant');

export default function Customers() {
    const [customers, setCustomers]=useState([])

    useEffect(()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                let result=JSON.parse(xhr.responseText).data
                setCustomers(result)
            }
        }
        xhr.open("GET", req+"/customers")
        xhr.send()
    },[])

    return <div>
        <AdminHeader/>
        <table className={"table table-bordered"}>
            <thead>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Mobile</th>
                <th>Customer Address</th>
                <th>Customer Orders</th>
                <th>Customer Image</th>
            </thead>
            <tbody>
            {
                customers.map(customer=>{
                    return <tr key={customer.cid}>
                        <td>{customer.cid}</td>
                        <td>{customer.customer_name}</td>
                        <td>{customer.customer_email}</td>
                        <td>{customer.customer_mobile}</td>
                        <td>{customer.customer_address}</td>
                        <td onClick={()=>{localStorage.setItem("cid",customer.cid)}}><Link to={"orders"}>Show orders</Link></td>
                        <td><a href={req+"/"+customer.customer_image}><img src={req+"/"+customer.customer_image} width={"75px"} alt={customer.customer_image}/></a></td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}