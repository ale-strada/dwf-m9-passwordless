import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firestore";
import { User } from "lib/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const newUSer = await firestore.collection("auth").add({
    email: "prueba@mail.com",
  });

  // const user = await User.create({
  //   name: "ale",
  //   email: "ale@example.com",
  // });

  //const user = await User.findOne({ where: { id: "Rkn1wnmIhdIHHFkm4qIy" } });

  res.send("user");
}
