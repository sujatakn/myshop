import React from 'react';
import { Link} from 'react-router-dom';


const Products = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Link to='/products/addproducts'>Add Products</Link>&nbsp;&nbsp;
            <Link to='/products/viewproducts'>View Products</Link>
           
           
            
        </div>
    );
};

export default Products;
