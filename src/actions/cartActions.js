export const addToCart=function(d){
    return(dispatch)=>{
        dispatch({type:'CHANGE_CART_STATUS'})
        setTimeout(()=>{dispatch({type:'ADD TO CART',val:d})},2000)
}
}