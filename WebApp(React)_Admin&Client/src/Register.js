import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import LoginHeader from "./LoginHeader";
const req = require('./Constant');
export default function Register(){
    const [customer, setCustomer]=useState({"customer_name": "","customer_email": "", "customer_mobile": "", "customer_password": ""});
    let history=useHistory();
    let [msg, setMsg]=useState("");
    let onChangeHandler=(args)=>{
        let copyCustomer={...customer};
        copyCustomer[args.target.name]=args.target.value;
        setCustomer(copyCustomer)
    }
    let register=()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                setMsg("Customer registered successfully...")
            }
        }
        xhr.open("POST", req+"/register")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(customer))
    }
    return <div>
        <center>
            <LoginHeader/>
            <br/>
            <h3>Create a new account</h3><br/>
            <table>
                <tbody>
                <tr>
                    <td>First and last name: </td>
                    <td><input type={"text"} name={'customer_name'} value={customer.customer_name} onChange={onChangeHandler}/></td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td><input type={"email"} name={'customer_email'} value={customer.customer_email} onChange={onChangeHandler}/></td>
                </tr>
                <tr>
                    <td>Mobile number: </td>
                    <td><input type={"tel"} name={'customer_mobile'} value={customer.customer_mobile} onChange={onChangeHandler}/></td>
                </tr>
                <tr>
                    <td>Set password </td>
                    <td><input type={"password"} name={"customer_password"} value={customer.customer_password} onChange={onChangeHandler}/></td>
                </tr>
                </tbody>
            </table>
            <button className={"btn btn-success margin"} onClick={register}>Register</button>
            <button className={"btn btn-danger margin"} onClick={()=>{history.push('/')}}>Cancel</button>
            <h6 style={{color: "red"}}>{msg}</h6>
        </center>
    </div>
}