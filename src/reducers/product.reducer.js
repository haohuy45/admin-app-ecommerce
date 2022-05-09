import { productConstants } from "../constants"

// const initialData = {
//     products: [] 
// }

// export default (state = initialData,action) => {
//     switch(action.type){
//         case productConstants.GET_ALL_PRODUCTS_SUCCESS:
//             state = {
//                 ...state,
//                 products: action.payload.products
//             }
//             break;
//     }
//     return state;
// }

const initState = {
    products: [],
    loading: false,
    error: null
};

const buildNewProducts = (parentId, products, product) => {
    let myProducts = [];

    if (parentId == undefined) {
        return [
            ...products,
            {
                _id: product._id,
                name: product.name,
                slug: product.slug,
                // price: product.price,
                // quantity: product.quantity,
                // description: product.description,
                children: []
            }
        ]
    }
    for (let pro of products) {
        if (pro._id == parentId) {
            myProducts.push({
                ...pro,
                children: pro.children  && pro.children.length > 0 ? buildNewProducts(parentId, [...pro.children, {
                    _id: product._id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    quantity: product.quantity,
                    description: product.description,
                    category: product.category,
                    parentId: product.parentId,
                    children: product.children
                }], product) : []
            })
        } else {
            myProducts.push({
                ...pro,
                // && cat.children.length > 0 
                // && cat.children.length > 0 
                children: pro.children && pro.children.length > 0  ? buildNewProducts(parentId, pro.children, product) : []
            })
        }

    }
    return myProducts
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_SUCCESS:
            const product = action.payload.product;
            const updateProducts = buildNewProducts(product.parentId, state.products, product);
            console.log(updateProducts)
            state = {
                ...state,
                products: updateProducts,
                loading: false
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_FAILURE:
            state = {
                ...initState
            }
            break;
    }
    return state
}