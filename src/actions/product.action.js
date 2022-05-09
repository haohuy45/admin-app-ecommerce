import axios from "axios";
import { productConstants } from "../constants";

const getProducts = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
        const res = await axios.post(`product/getProducts`);
        if (res.status === 200) {
          const { products } = res.data;
          dispatch({
            type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
            payload: { products },
          });
        } else {
          dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

// export const addProduct = form => {
//     return async (dispatch) => {
//         try {
//           dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
//           const res = await axios.post(`/product/create`, form);
//           if (res.status === 201) {
//             dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
//             dispatch(getProducts());
//           } else {
//             dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };
// }

export const addProduct = (form) => {
  return async dispatch => {
      dispatch({
          type: productConstants.ADD_NEW_PRODUCT_REQUEST
      });
      try {
          const res = await axios.post(`/product/create`, form);
          if (res.status === 201) {
              dispatch({
                  type: productConstants.ADD_NEW_PRODUCT_SUCCESS,
                  payload: { product: res.data.product }
              });
          } else {
              dispatch({
                  type: productConstants.ADD_NEW_PRODUCT_FAILURE,
                  payload: res.data.error

              })
          }
      } catch (error) {
          console.log(error.response);
      }

  }
}