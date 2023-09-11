import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import ClientHeader from "./ClientHeader";
const req = require('./Constant');
export default function MyOrders() {
    const [products, setProducts]=useState([])
    const [msg, setMsg]=useState("");
    useEffect(()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                let result=JSON.parse(xhr.responseText).data
                setProducts(result)
            }
        }
        xhr.open("GET", req+"/orders/"+localStorage.getItem("cid"))
        xhr.send()
    },[])

    let cancelOrder=(pid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Order cancelled...")
            }
        }
        xhr.open("POST", req+"/cancelorder")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({"cid": localStorage.getItem("cid"), "pid": pid}))
    }

    return <div className={"pad"}>
        <ClientHeader/>
        <table className={"table table-bordered"}>
            <thead>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Qty</th>
            <th>Order Date</th>
            <th>Action</th>
            </thead>
            <tbody>
            {
                products.map(product=>{
                    return <tr key={product.pid}>
                        <td><a href={req+"/"+product.product_image}><img src={req+"/"+product.product_image} width={"250px"} alt={product.product_image}/></a></td>
                        <td>{product.product_name}</td>
                        <td>{product.product_price}</td>
                        <td>{product.product_description}</td>
                        <td>{product.qty}</td>
                        <td>{product.order_date}</td>
                         <td><button className={"btn btn-danger margin"} onClick={()=>{cancelOrder(product.pid)} }>Cancel Order</button></td>
                    </tr>
                })
            }
            </tbody>
            <h6 style={{color: "red"}}>{msg}</h6>
        </table>
    </div>
}