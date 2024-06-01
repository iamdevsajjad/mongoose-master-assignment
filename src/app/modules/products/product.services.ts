import { IProducts } from "./products.interface";
import Product from "./products.model";

const addProductOnDB = async (productData: IProducts) => {
  const response = await Product.create(productData);
  return response;
};

const fetchAllProductsFromDB = async (searchTerm: string) => {
  if (searchTerm) {
    return await Product.find({
      name: { $regex: searchTerm, $options: "i" },
    });
  }

  return await Product.find();
};
const fetchAProductFromDB = async (id: string) => {
  const response = await Product.findById(id);
  return response;
};
const updateAProductFromDB = async (id: string, productData: IProducts) => {
  const response = await Product.findOneAndUpdate(
    { _id: id },
    { $set: productData },
    { new: true },
  );
  return response;
};

const deleteAProductFromDB = async (id: string) => {
  const response = await Product.deleteOne({ _id: id });
  return response;
};

export const productServices = {
  addProductOnDB,
  fetchAllProductsFromDB,
  fetchAProductFromDB,
  updateAProductFromDB,
  deleteAProductFromDB,
};
