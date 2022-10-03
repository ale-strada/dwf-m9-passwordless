import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firestore";
import { User } from "lib/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // const newUSer = await firestore.collection("auth").add({
    //   email: req.body.email,
    // });

    // const user = await User.create({
    //   name: "aleprueba",
    //   email: "aleprueba@example.com",
    // });

    const user = await User.findOne({ where: { id: "Rkn1wnmIhdIHHFkm4qIy" } });
    res.send(user.data);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
}
