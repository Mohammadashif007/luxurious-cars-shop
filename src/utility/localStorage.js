const getStoredCart = () => {
    const storedCart = localStorage.getItem('cars');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return [];
}

const saveToLocalStorage = id => {
    const existCart = getStoredCart();
    existCart.push(id);
    localStorage.setItem('cars', JSON.stringify(existCart))
}

export {saveToLocalStorage, getStoredCart}