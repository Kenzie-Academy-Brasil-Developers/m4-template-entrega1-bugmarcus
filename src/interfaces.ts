interface IProduct {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductMethods {
  createProduct: IProduct;
}
