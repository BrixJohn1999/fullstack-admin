import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    //foreach product stats
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          //all product information
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    // NOT DISPLAYING THE PASSWORD TO TABLE
    // const customers = await User.find({ role: "user" }).select("-password");

    const customers = await User.find({ role: "user" });

    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
