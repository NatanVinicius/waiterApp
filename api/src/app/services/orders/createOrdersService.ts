import { Order } from '../../../models/Order.js';
import type { createOrderDto } from '../../../schemas/createOrder.schema.js';
import { createOrders } from '../../repositories/ordersRepository.js';

export const createOrdersService = async (order: createOrderDto) => {
  const tableExists = await Order.findOne({ table: order.table });

  if (tableExists) {
    throw new Error('Table already exists.');
  }

  return await createOrders(order);
};
