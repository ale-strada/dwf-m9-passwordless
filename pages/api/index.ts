import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firestore";
import { User } from "lib/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // const newUSer = await firestore.collection("auth").add({
  //   email: req.body.email,
  // });

  // const user = await User.create({
  //   name: "aleprueba",
  //   email: "aleprueba@example.com",
  // });
  try {
    const user = await User.findOne({ where: { id: "Rkn1wnmIhdIHHFkm4qIy" } });
    //console.log(User);
    const ver = User.name;
    res.send(ver);
  } catch (error) {
    res.send(error);
  }
}
