import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import AdminHeader from "./AdminHeader";
const req = require('./Constant');
export default function UpdateCategory(){
    const [category, setCategory]=useState({category_name: localStorage.getItem("category_name")});
    let history=useHistory();
    let [msg, setMsg]=useState("");
    let onChangeHandler=(args)=>{
        let copyCategory={...category};
        copyCategory[args.target.name]=args.target.value;
        setCategory(copyCategory)
    }
    let addCategory=()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                console.log(JSON.parse(xhr.responseText))
                setMsg("Category updated successfully...")
            }
        }
        xhr.open("PUT", req+"/updatecategory/"+localStorage.getItem("pcid"))
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(category))
        localStorage.clear()
    }

    return <div>
        <AdminHeader/>
        <center>
            <h3>Update Category</h3>
            <table>
                <tbody>
                <tr>
                    <td>Category name: </td>
                    <td><input type={"text"} name={'category_name'} value={category.category_name} onChange={onChangeHandler}/></td>
                </tr>
                </tbody>
            </table>
            <button className={"btn btn-primary margin"} onClick={addCategory}>Update</button>
            <button className={"btn btn-danger margin"} onClick={()=>{history.push('/categories')}}>Cancel</button>
            <h6 style={{color: "red"}}>{msg}</h6>
        </center>
    </div>
}