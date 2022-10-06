import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { authMiddleware } from "lib/middlewares";
import { Order } from "lib/models/order";
import token from "../auth/token";
import { createPreference } from "lib/mercadopago";

const products = {
  1234: {
    title: "termo",
    price: 7800,
    description: "negro, de acero. Para agua caliente o fria",
  },
};

async function handlerPost(req: NextApiRequest, res: NextApiResponse, token) {
  const { productId } = req.query as any;
  const product = products[productId];
  if (!product) {
    res.status(404).send({ message: "el producto no existe" });
  }
  const order = await Order.createNewOrder({
    aditionalInfo: req.body,
    productId,
    userId: token.userId,
    status: "pending",
  });

  const pref = await createPreference({
    external_reference: order.id,
    notification_url:
      "https://webhook.site/0e6982f1-98cc-49ed-8a73-d9f3235beae5",
    items: [
      {
        title: product.title,
        description: product.description,
        picture_url: "http://www.myapp.com/myimage.jpg",
        category_id: "car_electronics",
        quantity: 1,
        currency_id: "ARS",
        unit_price: product.price,
      },
    ],
    back_urls: {
      success: "https://apx.school",
    },
  });
  res.send({ url: pref.init_point });
}

const handler = methods({
  post: handlerPost,
});

export default authMiddleware(handler);
