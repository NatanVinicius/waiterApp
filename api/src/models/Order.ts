import { model, Schema } from 'mongoose';

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: Number,
      required: true,
    },
    status: {
      enum: ['WAITING', 'PREPARING', 'DONE'],
      reqeuired: true,
      default: 'WAITING',
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }),
);
