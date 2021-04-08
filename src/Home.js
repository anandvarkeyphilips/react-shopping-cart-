import React from "react";
import AddToCart from './AddToCart';
import "./Home.css"

// overriding inheritance ; same function with same param sign
class Home extends React.Component {
    constructor()
    {
        super();
        this.ctr=100
        this.state={
            productsArray:[
                { productId: 1, productName: "Iphone", price: 68787, imageUrl: "./mobile-1.jpg", quantity: 10, description: "IPhone XR series" },
                { productId: 2, productName: "Samsung", price: 90908, imageUrl: "./mobile-2.jpg", quantity: 15, description: "Samsung Note 9" },
                { productId: 3, productName: "One Plus", price: 36789, imageUrl: "./mobile-3.jpg", quantity: 12, description: "One Plus 6" },
                { productId: 4, productName: "MI", price: 247678, imageUrl: "./mobile-4.jpg", quantity: 3, description: "MI NOTE 5" }
            ],
            showAddToCart:false,
            selectedProduct:{}}
        this.detailsEventHandler=this.detailsEventHandler.bind(this);
        
    }
    addToCartEventHandler=(obj)=>{
        alert("Add to Cart button clicked"+obj.productId);// 100 this== component scope
        //this.showAddToCart=true;
        this.setState({showAddToCart:true,selectedProduct:obj},()=>{
            console.log("Show add to cart",this.state.showAddToCart);//true
        });
        // merge the object with the existing state; call the render method 
       

    }
    detailsEventHandler()
    {
        alert("Details button clicked"+this.ctr);// error; this -- button
    }
    onBuyConfirmationEventHandler=(cartObj)=>{
        console.log("Confirmed Product",cartObj)
        //var tempArr=this.state.productsArray;//ref
        var tempArr=[...this.state.productsArray];//copy
        var pos=tempArr.findIndex(item => item.productId === cartObj.productId);
        tempArr[pos].quantity-=cartObj.quantitySelected;
        this.setState({showAddToCart:false,productsArray:tempArr})
        this.props.onHomeBuyConfirmation(cartObj)
    }
    cancelBuyEventHandler=()=>{
            this.setState({showAddToCart:false})
    }
    render() {
        var trArr = this.state.productsArray.map((item) => {
            return (
                <tr key={item.productId}>
                    <td>
                        <img src={item.imageUrl} alt={item.productName} />
                    </td>
                    <td>
                        {item.productName}
                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td>
                        {item.quantity}
                    </td>
                    <td>
                        <input type="button" value="Add To Cart" className="btn btn-dark"
                        onClick={this.addToCartEventHandler.bind(this,item)} />
                        &nbsp;&nbsp;
                        <input type="button" value="Details" className="btn btn-secondary"
                        onClick={this.detailsEventHandler} />
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table bg-warning text-black">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trArr}
                    </tbody>
                </table>
                {/* {this.showAddToCart?<AddToCart></AddToCart>:null} */}
                {this.state.showAddToCart && 
                <AddToCart 
                    onBuyConfirmation={this.onBuyConfirmationEventHandler}
                    onBuyCancellation={this.cancelBuyEventHandler}
                    selectedProd={this.state.selectedProduct}>
                </AddToCart>}
            </div>
        )
    }

}

export default Home;