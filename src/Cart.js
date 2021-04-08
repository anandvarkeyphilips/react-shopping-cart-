import React from 'react'

class Cart extends React.Component{
    render(){
        console.log(this.props.cartArr)
        var trArr = this.props.cartArr.map((item) => {
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
                        {item.quantitySelected}
                    </td>
                    <td>
                        <input type="button" value="Remove" className="btn btn-secondary" />
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h1> Cart Component</h1>
                <table className="table table-light text-black table-hover">
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

export default Cart