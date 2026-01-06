import { Order } from '../../../models/Order.js';

export const deleteManyOrdersService = async () => {
  const result = await Order.deleteMany();

  if (result.deletedCount == 0) {
    throw new Error('No orders available');
  }

  return { message: 'Orders deleted successfully', deletedCount: result.deletedCount };
};
