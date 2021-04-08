import React from 'react'
import Home from './Home'
import Cart from './Cart'

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
            <div  className="container-xxl">
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
            </div>

        )
    }
}
export default Main;