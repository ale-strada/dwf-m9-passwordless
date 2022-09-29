import { NextApiRequest, NextApiResponse } from "next";
//import { firestore } from "lib/firestore";
import { User } from "lib/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // const newUSer = await firestore.collection("auth").add({
  //   email: "ale@mail.com",
  // });

  // const user = await User.create({
  //   name: "ale",
  //   email: "ale@example.com",
  // });

  const user = await User.findOne({ where: { id: "raHHtoWOUwHvF52m4pXn" } });

  res.send(user.data);
}
