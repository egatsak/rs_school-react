import { COUNTRY } from "../../../../constants";

export enum ValidateBookError {}

export interface Book {
  id: string;
  author: string;
  title: string;
  price: number;
  description: string;
  isAdult: boolean;
  isPaperVersion: boolean;
  country: COUNTRY;
  imageLink?: string;
  quantityInStock?: number;
}

export interface BookCard extends Book {
  deliveryDate: string;
  image: File;
}

export interface BookSchema {
  data: BookCard[];
}
