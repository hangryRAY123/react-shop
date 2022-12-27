import { createContext, useReducer } from 'react';
import { Reducer } from './components/reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(
    Reducer,
    initialState
  );

  value.addProduct = (item) => {
    dispatch({ type: 'ADD_PRODUCT', payload: item });
  };

  value.closeAlertName = () => {
    dispatch({ type: 'CLOSE_ALERT_NAME' });
  };

  value.removeProduct = (itemId) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: { id: itemId },
    });
  };

  value.incQuantity = (itemId) => {
    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload: { id: itemId },
    });
  };

  value.decQuantity = (itemId) => {
    dispatch({
      type: 'DECREMENT_QUANTITY',
      payload: { id: itemId },
    });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
