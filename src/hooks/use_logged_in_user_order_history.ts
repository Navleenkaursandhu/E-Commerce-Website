import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';
import { product } from '../models/product';
import { useLoggedInUser } from './use_logged_in_user';

export const useLoggedInUserOrderHistory = () => {
  const loggedInUserId = useLoggedInUser()?.id
  return useLiveQuery(async () => await db.order.where({ userId: loggedInUserId || -1 }).toArray(), [loggedInUserId])
    ?.map((order) => {
      return {
        ...order,
        products: order.products.map((productInfo) => {
          return {
            ...productInfo,
            product: product.read().filter((object, i) => object.id === productInfo.productId)[0]
          }
        })
      }
    })
}
