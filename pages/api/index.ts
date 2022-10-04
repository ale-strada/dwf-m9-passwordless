import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firestore";
import { User } from "lib/user";
import { Auth } from "lib/auth";
import { findOrCreateAuth } from "lib/controllers/auth";
import { sendCode } from "lib/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // const newUser = await firestore.collection("auth").add({
  //   email: req.body.email,
  // });

  // const newAuth = new Auth("1234", firestore.collection("auth"));
  // await newAuth.pull();
  // newAuth.data.test = "test desde endpoint";
  // newAuth.push();
  // res.send(newAuth.data);

  const auth = await findOrCreateAuth(req.body.email);
  // auth.data.test = "cambio desde el endpiont 2";
  // auth.push();
  res.send(auth.data);
}
