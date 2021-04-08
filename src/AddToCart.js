
import React from 'react'

class AddToCart extends React.Component {
    constructor() {
        super()
        this.state = { quantitySelected: 1 }
    }
    changeQuantity = (str) => {
        if (str === "dec") {
            if (this.state.quantitySelected > 1) {
                this.setState((prevState) => {
                    return { quantitySelected: prevState.quantitySelected - 1 }
                })
            }
        }
        else {
            if(this.state.quantitySelected < this.props.selectedProd.quantity)
            {
                this.setState((prevState)=>{
                    return {quantitySelected:prevState.quantitySelected+1}
                })
            }
        }
    }
    buyEventHandler=()=>{
        // trigger an event; embed the data as part of event;
        var cartObj={...this.props.selectedProd,quantitySelected:this.state.quantitySelected}
        this.props.onBuyConfirmation(cartObj)
    }
    cancelBuyEventHandler=()=>{
        // trigger an event; embed the data as part of event;
        this.props.onBuyCancellation()
    }
    render() {
        console.log("Selected product", this.props.selectedProd)
        var product = this.props.selectedProd;
        return (
            <div>
                <h1> Add To cart Component</h1>
                <div className="card bg-primary text-white" style={{ width: "18rem" }}>
                    <img src={product.imageUrl} alt={product.productName}
                        className="card-img-top" style={{ height: "15rem", width: "17rem" }} />
                    <div className="card-body">
                        <h3 className="card-title">{product.productName}</h3>
                        <p className="card-text">Price :{product.price}</p>
                        <p className="card-text"> Quantity Available: {product.quantity}</p>
                        <input type="button" value="-" disabled={this.state.quantitySelected ===1}
                        className="btn btn-light" onClick={this.changeQuantity.bind(this, "dec")} />
                        &nbsp;&nbsp;
                        {this.state.quantitySelected}
                        &nbsp;&nbsp;
                        <input type="button" value="+" disabled={this.state.quantitySelected === this.props.selectedProd.quantity}
                        className="btn btn-light" onClick={this.changeQuantity.bind(this, "inc")} />
                        <br />
                        <input type="button" value="Buy" onClick={this.buyEventHandler} className="btn btn-dark"/>
                        <input type="button" value="Cancel" onClick={this.cancelBuyEventHandler} className="btn btn-secondary"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default AddToCart;