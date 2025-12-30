export type Order = {
  table: number;
  status: "WAITING" | "PREPARING" | "DONE";
  products: {
    product: {
      _id: string;
      name: string;
      description: string;
      imagePath: string;
      price: number;
      ingredients: {
        icon: string;
        name: string;
      }[];
      category: string;
    };
    quantity: number;
  }[];
};

export const orderMock: Order = {
  table: 5,
  status: "WAITING",
  products: [
    {
      product: {
        _id: "64f1c2a9e8b4a2c9d1234567",
        name: "Cheeseburger",
        description: "Classic cheeseburger",
        imagePath: "cheeseburger.png",
        price: 29.9,
        ingredients: [
          { icon: "🍔", name: "Beef" },
          { icon: "🧀", name: "Cheese" },
        ],
        category: "64f1c1b7e8b4a2c9d9999999",
      },
      quantity: 2,
    },
  ],
};
