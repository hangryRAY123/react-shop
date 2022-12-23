import { BasketItem } from './BasketItem';

export const BasketList = (props) => {
  const {
    order,
    handleBasketShow = Function.prototype,
    removeProduct = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  const totalPrise = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>
        Корзина
        <span className='secondary-content'>
          <i
            style={{ cursor: 'pointer' }}
            onClick={handleBasketShow}
            className='material-icons black'
          >
            close
          </i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeProduct={removeProduct}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrise} руб.
      </li>
      <li className='collection-item'>
        <button className='btn-small'>Оформить</button>
      </li>
    </ul>
  );
};
