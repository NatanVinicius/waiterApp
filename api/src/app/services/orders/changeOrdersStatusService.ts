import { Order } from '../../../models/Order.js';
import type { changeOrderSchemaDto } from '../../../schemas/orderStatus.schema.js';
import { changeOrderStatus } from '../../repositories/ordersRepository.js';

export const changeOrderStatusService = async (
  id: changeOrderSchemaDto['params']['id'],
  status: changeOrderSchemaDto['body']['status'],
) => {
  const orderExists = await Order.findById(id);

  if (!orderExists) {
    throw new Error('Order not found');
  }

  const updatedOrder = await changeOrderStatus(id, status);
  return updatedOrder;
};
