import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

export const Alert = () => {
  const {
    alertName: name = '',
    closeAlertName = Function.prototype,
  } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlertName, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className='' id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  );
};
