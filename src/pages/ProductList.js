import React, { useEffect, useState } from 'react';


const ProductList = () => {
    const[products,setproduct]=useState([]);
    useEffect(()=>{
        fetch("https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
        .then(res=>res.json())
        .then((data)=>{setproduct(data)})
    })
    return (
        <div className="container">
            <div className="row">
            
                {
                    products.length!==0?(
                        products.map((p)=>{
                            return(
                         <div className="card" style={{"width":"400px"}}>
                                <img className="card-img-top" src={p.productImage} alt="Card image"/>
                                <div className="card-body">
                               <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text.</p>
                              <a href="#" className="btn btn-primary">See Profile</a>
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

export default ProductList;