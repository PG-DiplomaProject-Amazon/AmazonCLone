import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import ClientHeader from "./ClientHeader";
import './App.css'
const req = require('./Constant');
export default function MyCategories() {
    const [categories, setCategories]=useState([])
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


    return <div className={"margin"}>
        <ClientHeader/>
        <table className={"table table-bordered margin"}>
            <thead className={"thead-dark"}>
            <th>Category Image</th>
            <th>Category Name</th>
            <th>Action</th>
            </thead>
            <tbody>
            {
                categories.map(category=>{
                    return <tr key={category.pcid}>
                        <td><a href={req+"/"+category.category_image}><img src={req+"/"+category.category_image} width={"300px"} alt={category.category_image}/></a></td>
                        <td>{category.category_name}</td>
                        <td onClick={()=>{localStorage.setItem("pcid", category.pcid)}}><Link to={"/home"}>Show products</Link> </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}