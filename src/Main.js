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
        var tempArr=[...this.state.cartArr,cartObj];
        this.setState({cartArr:tempArr})
    }
    render()
    {
        return (
            <div  className="container-xxl">
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