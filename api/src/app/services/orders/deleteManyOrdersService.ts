import { Order } from '../../../models/Order.js';

export const deleteManyOrdersService = async () => {
  const ordersExists = await Order.exists({});

  if (!ordersExists) {
    throw new Error('No orders availables.');
  }

  const result = await Order.deleteMany();

  return { message: 'Orders deleted successfully', deletedCount: result.deletedCount };
};
