import { NextApiRequest, NextApiResponse } from "next";
import { gerMerchantOrder } from "lib/mercadopago";
import { Order } from "lib/models/order";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id, topic } = req.query;

  if (topic == "merchant_order") {
    console.log("si", topic, id);

    const order = await gerMerchantOrder(id);
    if (order.order_status == "paid") {
      const orderId = order.external_reference;
      const myOrder = new Order(orderId);
      await myOrder.pull();
      myOrder.data.status = "closed";
      myOrder.data.externalOrder = order;
      await myOrder.push();
      //send email (compra exitosa, procesando envio)
      //email interno (alguien compro algo)
    }
  } else {
    console.log("no", topic, id);
  }

  res.send("ok");
}
