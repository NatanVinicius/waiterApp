import type { IconType } from "react-icons";

export type Ingredient = {
  icon: string;
  name: string;
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredient[];
  category: {
    icon: IconType;
    name: string;
    _id: string;
  };
};
