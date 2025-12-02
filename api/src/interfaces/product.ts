export interface ProductTypes {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: [
    {
      icon: string;
      name: string;
    },
  ];
  category: string;
}
