export type FakestoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: FakestoreCategory;
  image: string;
  rating: FakestoreRating;
};

export type FakestoreCategory =
  | "men's clothing"
  | "jewelery"
  | "electronics"
  | "women's clothing";

export type FakestoreRating = {
  rate: number;
  count: number;
};
