import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import AdminHeader from "./AdminHeader";
const req = require('./Constant');
export default function Orders() {
    const [products, setProducts]=useState([])

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
        localStorage.clear()
    },[])

    return <div>
        <AdminHeader/>
        <table className={"table table-bordered"}>
            <thead>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Qty</th>
            <th>Order Date</th>
            <th>Category Name</th>
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
                        <td>{product.qty}</td>
                        <td>{product.order_date}</td>
                        <td>{product.category_name}</td>
                        <td><a href={req+"/"+product.product_image}><img src={req+"/"+product.product_image} width={"100px"} alt={product.product_image}/></a></td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}