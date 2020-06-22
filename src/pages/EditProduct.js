import React,{useRef} from 'react';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateProduct } from '../actions/productActions';
const EditProduct = (props) => {
    document.title = 'Add products'
    var {state:details} = useLocation();
    const productName = useRef();
	const productPrice = useRef();
	const productImage = useRef();
	const productCategory = useRef();
	const productSubCategory = useRef();
	const productBrand = useRef();
	const productQuantity = useRef();
	const productSupplier = useRef();
    const productDescription = useRef();
    const productColor = useRef();
    const productSize = useRef();

    const addProduct = (e)=>{
        e.preventDefault();
        const newProduct = {
            productName:productName.current.value,
            productPrice:productPrice.current.value,
            productImage:productImage.current.value,
            productCategory:productCategory.current.value,
            productSubCategory:productSubCategory.current.value,
            productBrand:productBrand.current.value,
            productQuantity:productQuantity.current.value,
            productSupplier:productSupplier.current.value,
            productDescription:productDescription.current.value,
            productColor:productColor.current.value,
            productSize:productSize.current.value
        }
        console.log(newProduct)
        
        props.dispatch(updateProduct(details._id.$oid,newProduct))

        // Reset fields after submit
        productName.current.value ="";
        productPrice.current.value ="";
        productImage.current.value ="";
        productCategory.current.value ="";
        productSubCategory.current.value ="";
        productBrand.current.value ="";
        productQuantity.current.value ="";
        productSupplier.current.value ="";
        productDescription.current.value ="";
        productColor.current.value ="";
        productSize.current.value ="";

    }
    const resetAllFields=()=>{

        productName.current.value ="";
        productPrice.current.value ="";
        productImage.current.value ="";
        productCategory.current.value ="";
        productSubCategory.current.value ="";
        productBrand.current.value ="";
        productQuantity.current.value ="";
        productSupplier.current.value ="";
        productDescription.current.value ="";
        productColor.current.value ="";
        productSize.current.value ="";
    }
    
    return ( 
        <div className="container">
            <form onSubmit={addProduct}>
            <div className="row">
                <div className="col-lg-4">
                    <div className="form-group">
                        <label>Product Name:</label>
                        <input defaultValue={details.productName} type="text" className="form-control" ref={productName} placeholder="Enter Product Name" id="productName"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Price:</label>
                        <input defaultValue={details.productPrice}  type="text" className="form-control" ref={productPrice} placeholder="Enter Product Price" id="productPrice"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Image Url:</label>
                        <input  value={details.productImage} type="text" className="form-control" ref={productImage} placeholder="Enter Product Image Url" id="productImage"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Category:</label>
                        <input value={details.productCategory}  type="text" className="form-control" ref={productCategory} placeholder="Enter Product Category" id="productCategory"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Sub Category:</label>
                        <input  value={details.productSubCategory} type="text" className="form-control" ref={productSubCategory} placeholder="Enter Product Sub Category" id="productSubCategory"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Brand Name:</label>
                        <input  value={details.productBrand} type="text" className="form-control" ref={productBrand} placeholder="Enter Product Brand Name" id="productBrand"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Quantity:</label>
                        <input  value={details.productQuantity} type="text" className="form-control" ref={productQuantity} placeholder="Enter Product Quantity" id="productQuantity"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Supplier:</label>
                        <input type="text" value={details.productSupplier}  className="form-control" ref={productSupplier} placeholder="Enter Product Supplier" id="productSupplier"/>
                    </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Color:</label>
                        <select  value={details.productColor}  className="form-control" ref={productColor} id="productColor">
                            <option>Select</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Green</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Orange</option>
                            <option>Violent</option>
                        </select>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Size:</label>
                        <select value={details.productSize}  className="form-control" ref={productSize} id="productSize">
                            <option>Select</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="form-group">
                        <label >Product Description:</label>
                        <textarea  value={details.productDescription} className="form-control" ref={productDescription} placeholder="Enter Product Description" id="productDescription"></textarea>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary mr-2">Update</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={resetAllFields}>Cancel</button>
                    </div>
                </div>

            </div>
        </form>
        </div>
     );
}
 
export default connect(store=>store)(EditProduct);