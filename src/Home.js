import React from "react";
import "./Home.css"
// overriding inheritance ; same function with same param sign
class Home extends React.Component
{
    render()
    {
        var productsArray=[
            { productId: 1, productName: "Iphone", price: 68787, imageUrl: "./mobile-1.jpg", quantity: 10, description: "IPhone XR series" },
            { productId: 2, productName: "Samsung", price: 90908, imageUrl: "./mobile-2.jpg", quantity: 15, description: "Samsung Note 9" },
            { productId: 3, productName: "One Plus", price: 36789, imageUrl: "./mobile-3.jpg", quantity: 12, description: "One Plus 6" },
            { productId: 4, productName: "MI", price: 247678, imageUrl: "./mobile-4.jpg", quantity: 3, description: "MI NOTE 5" }]
        var trArr=productsArray.map((item)=>{
                return (
                    <tr>
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

                            </td>
                        </tr>
                )
        })
        return (
            <div>
                <table className="table bg-warning text">
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
            </div>
        )
    }

}

export default Home;
