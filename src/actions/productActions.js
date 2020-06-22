export const loadproducts=()=>{
    return(dispatch)=>{
        fetch("https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
       .then(res=>res.json())
       .then((data)=>{dispatch({type:"load products",val:data})})

    }
}
export const delProduct=(id)=>{
    
    return (dispatch)=>{
        fetch(`https://api.mlab.com/api/1/databases/abcd/collections/products/${id}?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(()=>{loadproducts()})

    }
}

export const updateProduct = (id,details)=>{
    return (dispatch)=>{
        console.log("inside return",id,details)
        fetch(`https://api.mlab.com/api/1/databases/abcd/collections/products/${id}?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(details)
        })
        .then(res=>res.json())
        .then((data)=>{alert("product updated successfull");console.log(data);loadproducts()})

    }
}




