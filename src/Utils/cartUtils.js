import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export const getOrCreateCartId = () => {
  let cartId = Cookies.get('cart_id');
  if (!cartId) {
    cartId = uuidv4();
    Cookies.set('cart_id', cartId, { expires: 30 }); // 30 days
  }
  return cartId;
};
