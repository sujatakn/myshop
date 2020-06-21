import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {loadproducts} from '../actions/productActions';

const ProductList = (props) => {
    const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(value);

    
    useEffect(()=>{
        props.dispatch(loadproducts());
    },[props])
    
    return (
    
        <div className="container">
            <div className="row">
            
                {
                    props.ProductReducer.products?(
                        props.ProductReducer.products.map((p)=>{
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={p._id.$oid}>
                                <img className="card-img-top" src={p.productImage} alt={p.productName}/>
                                <div className="card-body">
                               <h4 className="card-title" title={p.productName}>{p.productName}</h4>
                               <p className="product-price">{numberFormat(p.productPrice)}/-</p>
                               <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>

                                    <div className="product-actions">
                                        <div className="a_left">
                                            <Link to={{pathname:"/productDetails",state:p}} className="btn btn-primary btn-sm">View More</Link>
                                        </div>
                                        <div className="a_right">
                                            <p>
                                                <span title="Edit Product"><i className="fas fa-edit"></i></span> 
                                                <span title="Delete Product"><i className="fas fa-trash"></i></span>
                                                    
              
                                            </p>
                                        </div>
                                          <ul>
                                            <li title="Add to Cart"><i className="fas fa-cart-plus"></i></li>
                                            <li title="Add to Favorites"><i className="fas fa-heart"></i></li>
                                            <li title="View Details"><i className="fas fa-eye"></i></li>
                                            <li title="Add to Compare"><i className="fas fa-sync-alt"></i></li>
                                          </ul>
                                      </div>
                                      </div>
                          </div>
                                
                            )
                        })
                    ):(<button className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm"></span>
                    Loading..
                  </button>)
                }
            </div>
                

                
      </div>
            
   
        
    );
};

export default connect(store=>store) (ProductList);