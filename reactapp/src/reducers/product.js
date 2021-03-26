export default function(product = null, action) {
    if(action.type === 'selectedAbondement') {
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