import axios from "../helpers/axios";
import { categoryConstants, productConstants } from "../constants";

export const getInititalData = () => {
    return async dispatch => {

        const res = await axios.post(`/initialData`);
        console.log('res',res);

        if(res.status === 200){
            const { categories, products} = res.data;
            console.log('categories',categories);
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories}
            })
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: {products}
            })
        }
        console.log(res)
    }
}