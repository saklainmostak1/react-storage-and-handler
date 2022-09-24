const addToDb = id =>{
    let shoppingCart = {}

    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity =quantity + 1
        shoppingCart[id] = newQuantity
        // localStorage.setItem(id, newQuantity);
    }
    else{
        shoppingCart[id] = 1
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
export {addToDb}