import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import ClientHeader from "./ClientHeader";
import {useHistory} from "react-router-dom";
const req = require('./Constant');
export default function MyCart() {
    const [products, setProducts]=useState([])
    const [msg, setMsg]=useState("");
    let history=useHistory();
    useEffect(()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                let result=JSON.parse(xhr.responseText).data
                setProducts(result)
            }
        }
        xhr.open("GET", req+"/cart/"+localStorage.getItem("cid"))
        xhr.send()
    },[])

    let removefromcart=(pid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Removed from cart...")
            }
        }
        xhr.open("POST", req+"/removefromcart")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({"cid": localStorage.getItem("cid"), "pid": pid}))
    }
    let placeOrder=(pid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Order placed...")
                removefromcart(pid)
                history.push("/myorders")
            }
        }
        xhr.open("POST", req+"/placeorder")
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
                        <td><button className={"btn btn-success margin"} onClick={()=>{placeOrder(product.pid)} }>Place Order</button>
                        <button className={"btn btn-danger margin"} onClick={()=>{removefromcart(product.pid)} }>Remove from cart</button></td>
                    </tr>
                })
            }
            </tbody>
            <h6 style={{color: "red"}}>{msg}</h6>
        </table>
    </div>
}