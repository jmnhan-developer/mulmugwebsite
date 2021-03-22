export default function(product = null, action) {
    if(action.type === 'selectedAbondement') {
        console.log("Est ce que ca va bien dans le reducer", action.product);

        return action.product;
    }
    if(action.type === 'selectedForfaitSansPub') {
        return action.product;
    }
    if(action.type === 'selectedCahier') {
        return action.product;
    }
    else 
    {
        return product
    }
}