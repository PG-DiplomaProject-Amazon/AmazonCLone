import './App.css';
import {Route, Switch} from "react-router-dom";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";
import Categories from "./Categories";
import Customers from "./Customers";
import Orders from "./Orders";
import Products from "./Products";
import UpdateCategory from "./UpdateCategory";
import UpdateProduct from "./UpdateProduct";
import AdminHeader from "./AdminHeader";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import MyOrders from "./MyOrders";
import MyCart from "./MyCart";
import MyCategories from "./MyCategories";

function App() {
  return <div>
    <Switch>
      <Route path={"/"} exact component={Login}/>
      <Route path={"/admin"} exact component={AdminHeader}/>
      <Route path={"/addcategory"} exact component={AddCategory}/>
      <Route path={"/addproduct"} exact component={AddProduct}/>
      <Route path={"/categories"} exact component={Categories}/>
      <Route path={"/customers"} exact component={Customers} />
      <Route path={"/home"} exact component={Home} />
      <Route path={"/mycart"} exact component={MyCart} />
      <Route path={"/mycategories"} exact component={MyCategories} />
      <Route path={"/myorders"} exact component={MyOrders}/>
      <Route path={"/orders"} exact component={Orders} />
      <Route path={"/products"} exact component={Products} />
      <Route path={"/register"} exact component={Register} />
      <Route path={"/updatecategory"} exact component={UpdateCategory} />
      <Route path={"/updateproduct"} exact component={UpdateProduct} />
    </Switch>
  </div>
}

export default App;
