import React from 'react'
import {Route,Switch, Redirect} from "react-router-dom"
import Home from './Home'
import Cart from './Cart'
import AboutUs from "./AboutUs"
import Feedback from "./Feedback"
import Books from './Books';
import Emp from "./Emp"

class Main extends React.Component
{
    constructor()
    {
        super()
        this.state={showProducts:true,
        cartArr:[]}
    }
    onHomeBuyConfirmationEventHandler=(cartObj)=>{
        var tempArr=[...this.state.cartArr];
        var pos=tempArr.findIndex(item => item.productId === cartObj.productId);
        if(pos == -1){
            var tempArr=[...this.state.cartArr,cartObj];
        }else{
            tempArr[pos].quantitySelected +=cartObj.quantitySelected;
        }
        console.log("onHomeBuyConfirmationEventHandler",cartObj);// 100 this== component scope
        this.setState({cartArr:tempArr})
    }
    render()
    {
        return (
            <React.Fragment>
            <Switch>
                <Route path="/emp/:empId/:empName" component={Emp}></Route>
                <Route path="/books/:bookId" component={Books} ></Route>
            <Route path="/aboutus"  component={AboutUs} ></Route>
            <Route path="/feedback" component={Feedback}></Route>
            <Route path="/login" render={(props)=>{ return (
            <div>
                    <form>
                        <input type="text" placeholder="Enter the username" />
                        <input type="text" placeholder="Enter the password" />
                        <input type="submit" value="Login" onClick={()=>{
                                props.history.push("/products")
                        }}  />
                    </form>
                </div>)}}></Route>
            
            <Route path="/products" >
                <Home onHomeBuyConfirmation={this.onHomeBuyConfirmationEventHandler}></Home>
            </Route>
            <Route path="/cart">
                <Cart cartArr={this.state.cartArr}></Cart>
            </Route>
            <Redirect to="/products" path="/" exact>
               </Redirect>
            <Route render={()=>{
                return (<h1>Page not found</h1>)
            }}/>
            </Switch>
            </React.Fragment>
            

        )
    }
}
export default Main;


{/* <div  className="container-xxl">
<h1> Main Component</h1>
<input type="button" value="Show Products" className="btn btn-dark"
onClick={()=>{
    this.setState({showProducts:true})
}}/>
<input type="button" value="Show Cart" className="btn btn-dark"
onClick={()=>{
    this.setState({showProducts:false})
}}/>
{this.state.showProducts?<Home onHomeBuyConfirmation={this.onHomeBuyConfirmationEventHandler}></Home>
:<Cart cartArr={this.state.cartArr}></Cart>
}
</div> */}