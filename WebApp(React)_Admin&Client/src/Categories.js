import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import AdminHeader from "./AdminHeader";
const req = require('./Constant');
export default function Categories() {
    const [categories, setCategories]=useState([])
    const [msg, setMsg]=useState("");
    let history=useHistory();
    useEffect(()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                let result=JSON.parse(xhr.responseText).data
                setCategories(result)
            }
        }
        xhr.open("GET", req+"/categories")
        xhr.send()
    },[])

    let deleteCategory=(pcid)=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Category deleted successfully...")
            }
            else{
                setMsg("Something went wrong...")
            }
        }
        xhr.open("DELETE", req+"/deletecategory/"+pcid)
        xhr.send();
    }
    return <div>
        <AdminHeader/>
        <div className={"margin"}>
            <button className={"btn btn-primary"} onClick={()=>{history.push("/addcategory")}}>Add Category</button>
        </div>
        <table className={"table table-bordered margin"}>
            <thead>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Category Image</th>
            <th>Products</th>
            <th>Action</th>
            </thead>
            <tbody>
            {
                categories.map(category=>{
                    return <tr key={category.pcid}>
                        <td>{category.pcid}</td>
                        <td>{category.category_name}</td>
                        <td><a href={req+"/"+category.category_image}><img src={req+"/"+category.category_image} width={"100px"} alt={category.category_image}/></a></td>
                        <td onClick={()=>{localStorage.setItem("pcid", category.pcid)}}><Link to={"/products"}>Show products</Link> </td>
                        <td><button className={"btn btn-warning margin"} onClick={()=>{history.push("/updatecategory"); localStorage.setItem("pcid",category.pcid); localStorage.setItem("category_name", category.category_name)}}>Update</button>
                            <button className={"btn btn-danger margin"} onClick={()=>{deleteCategory(category.pcid)}}>Delete</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
            <h6 style={{color: "red"}}>{msg}</h6>
        </table>
    </div>
}