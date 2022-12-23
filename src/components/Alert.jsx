import { useEffect } from 'react';

export const Alert = (props) => {
  const { name = '', closeAlertName = Function.prototype } =
    props;

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
