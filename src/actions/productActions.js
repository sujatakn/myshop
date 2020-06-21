export const loadproducts=()=>{
    return(dispatch)=>{
        fetch("https://api.mlab.com/api/1/databases/abcd/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
       .then(res=>res.json())
       .then((data)=>{dispatch({type:"load products",val:data})})

    }
}




