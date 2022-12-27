import { useContext } from 'react';
import { ShopContext } from '../context';

export const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
  } = props;

  const { addProduct } = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img
          style={{ minHeight: 254 }}
          src={full_background}
          alt={name}
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() => addProduct({ id, name, price })}
        >
          Купить
        </button>
        <span
          className='right'
          style={{ fontSize: '1.5rem' }}
        >
          {price} руб.
        </span>
      </div>
    </div>
  );
};
