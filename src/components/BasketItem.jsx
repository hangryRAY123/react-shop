import { useContext } from 'react';
import { ShopContext } from '../context';

export const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
  } = props;

  const { removeProduct, decQuantity, incQuantity } =
    useContext(ShopContext);

  return (
    <li className='collection-item'>
      {name} x{' '}
      <button
        className='btn-item'
        onClick={() => decQuantity(id)}
      >
        -
      </button>{' '}
      {quantity}{' '}
      <button
        className='btn-item'
        onClick={() => incQuantity(id)}
      >
        +
      </button>{' '}
      = {price * quantity} руб.
      <span className='secondary-content'>
        <i
          onClick={() => removeProduct(id)}
          style={{ cursor: 'pointer' }}
          className='material-icons'
        >
          close
        </i>
      </span>
    </li>
  );
};
