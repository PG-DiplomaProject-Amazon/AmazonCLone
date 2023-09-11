import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import ClientHeader from "./ClientHeader";
const req = require('./Constant');
export default function Home() {
    const [products, setProducts]=useState([])
    const [msg, setMsg]=useState("");
    let history=useHistory()
    useEffect(()=>{
        if(localStorage.getItem("pcid")>0){
            let xhr=new XMLHttpRequest();
            xhr.onreadystatechange=()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    let result=JSON.parse(xhr.responseText).data
                    setProducts(result)
                }
            }
            xhr.open("GET", req+"/categories/"+localStorage.getItem("pcid"))
            xhr.send()
        }
        else{
            let xhr=new XMLHttpRequest();
            xhr.onreadystatechange=()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    let result=JSON.parse(xhr.responseText).data
                    setProducts(result)
                }
            }
            xhr.open("GET", req+"/products")
            xhr.send()
        }
    },[])

    let addToCart=(pid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Added to cart...")
                history.push("/mycart")
            }
        }
        xhr.open("POST", req+"/addcart")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({"cid": localStorage.getItem("cid"), "pid": pid}))
    }
    let placeOrder=(pid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Order placed...")
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
            <th>Product Category</th>
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
                        <td>{product.category_name}</td>
                        <td><button className={"btn btn-success margin"} onClick={()=>{ placeOrder(product.pid) }}>Place Order</button>
                            <button className={"btn btn-primary margin"} onClick={()=>{addToCart(product.pid)} }>Add to cart</button></td>
                    </tr>
                })
            }
            </tbody>
            <h6 style={{color: "red"}}>{msg}</h6>
        </table>
    </div>
}