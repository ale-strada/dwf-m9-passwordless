import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firestore";
import { User } from "lib/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const newUser = await firestore.collection("auth").add({
    email: req.body.email,
  });

  // const user = await User.create({
  //   name: "John",
  //   email: "john@email.com",
  //   admin: false,
  // });

  //const user = await User.findOne({ where: { id: "Rkn1wnmIhdIHHFkm4qIy" } });

  res.send(newUser);
}
