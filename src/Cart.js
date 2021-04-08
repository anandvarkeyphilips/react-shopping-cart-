import React from 'react'

class Cart extends React.Component{
    render(){
        console.log(this.props.cartArr)
        return(
            <h1> Cart Component</h1>
        )
    }
}

export default Cart