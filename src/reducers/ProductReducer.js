const initialState={
    products:[],
    loaded:false
}
const ProductReducer=(state=initialState,action)=>{
    if(action.type==="load products"){
        return {...state,products:action.val,loaded:true}
    }
    return state;
}
export default ProductReducer;