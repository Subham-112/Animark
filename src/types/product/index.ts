import { IImage } from "../image";

export interface IProduct {
  _id: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  category: {
    _id: string;
    id: string;
    name: string;
    slug: string;
  };
  owner: {
    displayName: string;
    slug: string;
    image: IImage;
  };
  price: number;
  status: string;
  sales: number;

  thumbnail: IImage;
  gallery: [IImage];

  rating: number;
  tags: [string];
}
