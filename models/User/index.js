/*
 *  Model Users
 */

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // Obtendra un arreglo de ID de referencia hacia el model de pedidos u ordenes
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders",
      },
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WishLists",
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hasShoppingAddress: {
      type: Boolean,
      default: false,
    },
    shippingAddress: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      province: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", userSchema);
