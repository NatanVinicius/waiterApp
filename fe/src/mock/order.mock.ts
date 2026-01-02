export type Orders = {
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

export const ordersMock: Orders[] = [
  {
    table: 5,
    status: "WAITING",
    products: [
      {
        product: {
          _id: "6945ebd423367e2f4b4cab0b",
          name: "Pizza Quatro Queijos",
          description: "Classic cheeseburger",
          imagePath: "1767391814192-frango-catupiry.png",
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
  },
];
