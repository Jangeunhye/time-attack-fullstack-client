export type Deal = {
  id: number;
  userId: string;
  title: string;
  content: string;
  view: number;
  price: number;
  location: string;
  imageUrl: string;
  createdAt: string;
  updateAt: string;
  likedDeals: [];
  user: User;
};
export type User = {
  id: string;
  email: string;
};

export type UpdateDeal = {
  title: string;
  content: string;
  price: number;
  location: string;
};
