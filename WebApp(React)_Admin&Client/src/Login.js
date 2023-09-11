import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import LoginHeader from "./LoginHeader";
const req = require('./Constant');

function Login()
{
    const [customer, setCustomer] = useState({customer_email: "", customer_password: ""});
    const [message, setmessage] = useState("");
    const history = useHistory();

    const handleChange = (args)=>
    {
        var copyOfCurrentUserInState = {...customer};
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setCustomer(copyOfCurrentUserInState);
    }


    useEffect(()=>{
        if(message!=="")
        {
            setTimeout(() =>
            {
                setmessage("");
            }, 2000);
        }
    }, [message]);

    const signIn = ()=>{
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status===200){
                let result=JSON.parse(xhr.responseText).data
                setCustomer(result)
                if(result.length>0 && customer.customer_email!=="" && customer.customer_password!==''){
                    localStorage.setItem("cid", result[0].cid)
                    history.push("/home")
                }
                else if(customer.customer_email === "admin" && customer.customer_password === "admin")
                {
                    history.push("/admin");
                }
                else
                {
                    clearBoxes();
                    setmessage("Email / password is wrong!")
                }
            }
        }
        xhr.open("POST", req+"/customer")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(customer))
    }

    const clearBoxes =()=>
    {
        setCustomer({customer_email: "", customer_password: ""});
    }

    return <div>
        <center>
            <LoginHeader/>
            <br/>
            <br/>
            <br/>
            <table>
                <tbody>
                <tr>
                    <td className='td'>Email / Mobile Number</td>
                    <td className='td'>
                        <input type="text" name="customer_email"
                               value={customer.customer_email}
                               onChange={handleChange}/>
                    </td>
                </tr>

                <tr>
                    <td className='td'>Password</td>
                    <td className='td'>
                        <input type="password" name="customer_password"
                               value={customer.customer_password}
                               onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className='td'>
                        <button className='btn btn-primary'
                                onClick={signIn}>
                            Log in
                        </button>
                    </td>
                    <td className='td'>
                        <button className='btn btn-danger'
                                onClick={clearBoxes}>
                            Reset
                        </button>
                    </td>
                </tr>
                <tr >
                    <td >
                        <br/>
                        <Link to={"/register"}>Create a new account</Link>
                    </td>
                </tr>
                </tbody>
            </table>
            <h6 style={{color: "orangered"}}>{message}</h6>
        </center>
    </div>
}

export default Login