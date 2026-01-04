import { Order } from '../../models/Order.js';
import type { createOrderDto } from '../../schemas/createOrder.schema.js';
import type { changeOrderSchemaDto } from '../../schemas/orderStatus.schema.js';

export const listOrders = async () => {
  const orders = await Order.find({}).populate('products.product');
  return orders;
};

export const createOrders = async (data: createOrderDto) => {
  const orderCreated = await Order.create(data);
  return orderCreated;
};

export const changeOrderStatus = async (id: string, status: changeOrderSchemaDto['body']['status']) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteOrders = async (id: string) => {
  const deletedOrder = await Order.deleteOne({ _id: id });
  return deletedOrder;
};

export const deleteManyOrders = async () => {
  const deletedOrder = await Order.deleteMany({});
  return deletedOrder;
};
