import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import AdminHeader from "./AdminHeader";
let req = require('./Constant');
export default function AddCategory(){
    const [category, setCategory]=useState({category_name: ""});
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
                setMsg("Category added successfully...")
            }
        }
        xhr.open("POST", req+"/addcategory")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(category))
    }

    return <div>
        <AdminHeader/>
        <center>
            <h3>Add Category</h3>
            <table>
                <tbody>
                <tr>
                    <td>Category name: </td>
                    <td><input type={"text"} name={'category_name'} value={category.category_name} onChange={onChangeHandler}/></td>
                </tr>
                </tbody>
            </table>
            <button className={"btn btn-primary margin"} onClick={addCategory}>Add</button>
            <button className={"btn btn-danger margin"} onClick={()=>{history.push('/categories')}}>Cancel</button>
            <h6 style={{color: "red"}}>{msg}</h6>
        </center>
    </div>
}