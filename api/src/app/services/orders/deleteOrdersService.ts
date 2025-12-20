import { Order } from '../../../models/Order.js';
import { deleteOrders } from '../../repositories/ordersRepository.js';

export const deleteOrdersService = async (id: string) => {
  const orderExists = await Order.findById(id);

  if (!orderExists) {
    throw new Error('Order not found.');
  }

  const orderDeleted = await deleteOrders(id);
  console.log(orderDeleted);
  return orderDeleted;
};
