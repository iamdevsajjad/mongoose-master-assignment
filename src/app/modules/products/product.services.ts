import { IProducts } from "./products.interface";
import Product from "./products.model";

const addProductOnDB = async (productData: IProducts) => {
  const response = await Product.create(productData);
  return response;
};

const fetchAllProductsFromDB = async () => {
  const response = await Product.find();
  return response;
};
const fetchAProductFromDB = async (id: string) => {
  const response = await Product.findById(id);
  return response;
};

export const productServices = {
  addProductOnDB,
  fetchAllProductsFromDB,
  fetchAProductFromDB,
};
