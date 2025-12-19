import { listOrders } from '../../repositories/ordersRepository.js';

export const listOrdersService = async () => {
  const orders = await listOrders();

  if (!orders) {
    throw new Error('No orders available.');
  }

  return orders;
};
