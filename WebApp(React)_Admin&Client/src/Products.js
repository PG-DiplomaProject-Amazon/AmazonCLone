import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import AdminHeader from "./AdminHeader";
const req = require('./Constant');
export default function Categories() {
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
            localStorage.clear()
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

    let deleteProduct=(pid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Product deleted successfully...")
            }
        }
        xhr.open("DELETE", req+"/deleteproduct/"+pid)
        xhr.send();
    }

    return <div>
        <AdminHeader/>
        <div className={"margin"}>
            <button className={"btn btn-primary"} onClick={()=>{history.push("/addproduct")}}>Add Product</button>
        </div>
        <table className={"table table-bordered"}>
            <thead>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Category</th>
            <th>Action</th>
            <th>Product Image</th>
            </thead>
            <tbody>
            {
                products.map(product=>{
                    return <tr key={product.pid}>
                        <td>{product.pid}</td>
                        <td>{product.product_name}</td>
                        <td>{product.product_price}</td>
                        <td>{product.product_description}</td>
                        <td>{product.category_name}</td>
                        <td><button className={"btn btn-warning margin"} onClick={()=>{ localStorage.setItem("product", JSON.stringify(product)); history.push("/updateproduct") }}>Update</button>
                            <button className={"btn btn-danger margin"} onClick={()=>{deleteProduct(product.pid)} }>Delete</button></td>
                        <td><a href={req+"/"+product.product_image}><img src={req+"/"+product.product_image} width={"100px"} alt={product.product_image}/></a></td>
                    </tr>
                })
            }
            </tbody>
            <h6 style={{color: "red"}}>{msg}</h6>
        </table>
    </div>
}