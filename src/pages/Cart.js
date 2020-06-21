import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Cart.css';
import { connect } from 'react-redux';

const Cart = (props) => {
    const items = props.CartReducer;
    console.log(items)
    // Number local string  formater
    const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(value);

    const { state:details} = useLocation();
   
    return (
        <div className="container-fluid p-0">
            <div className="title-block">
                <div className="title a_left">
                    <h1>Cart</h1>
                </div>
                <div className="nesting-router-btns a_right">
                    <Link to="/products/addProduct" className="btn btn-success mr-2">Add Product</Link>
                    <Link to="/products/viewProducts" className="btn btn-primary">View Products</Link>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-items">
                            <div className="cart-header">
                                <ul>
                                    <li>Total Cart Items: <span className="count">{items.length}</span></li>
                                    <li>Total Cart Value: <span className="count">{numberFormat(0)}</span></li>
                                    <li><button className="btn btn-warning">Clear Cart</button></li>
                                </ul>
                            </div>
                            <div className="cart-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Item Image</th>
                                            <th>Item Name</th>
                                            <th>No of Items</th>
                                            <th>Item Price</th>
                                            <th>Total Price</th>
                                            <th>Add Item</th>
                                            <th>Remove Item</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items.products?
                                                items.products.map((p) => {
                                                    return (
                                                        <tr key={p._id.$oid}>
                                                            <td><img className="img-thumbnail" src={p.productImage} alt={p.productName}/></td>
                                                            <td>{p.productName}</td>
                                                            <td>{0}</td>
                                                            <td>{numberFormat(p.productPrice)}</td>
                                                            <td>{numberFormat(p.productPrice)}</td>
                                                            <td><button className="btn btn-success" data-index={p._id.$oid} ><i className="fas fa-plus-circle"></i></button></td>
                                                            <td><button className="btn btn-danger" data-index={p._id.$oid} disabled={!(p.productPrice)} ><i className="fas fa-trash"></i></button></td>
                                                        </tr>
                                                    );
                                                })
                                            :(<h1>Please aagu</h1>)
                                            
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* {
                            items.map((p)=>{
                                return(
                                    <div className="cart-products" key={p._id.$oid}>
                                        <h2>{p.productName}</h2>
                                    </div>
                                )
                            })
                        } */}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};
function mapStateToProps(store){
    // console.log(store)
    return store
}
export default connect(mapStateToProps)(Cart);