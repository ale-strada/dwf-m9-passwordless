import { NextApiRequest, NextApiResponse } from "next";
import { generate } from "lib/jwt";
import { Auth } from "lib/auth";
import isAfter from "date-fns/isAfter";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email;
  const code = req.body.code;
  const now = new Date();
  const auth = await Auth.verifyCode(email, code);
  if (!auth) {
    res.status(401).send({ message: "email or code incorrect" });
  }
  const expires = auth.expires.toDate();
  const expired = Auth.codeExpired(expires);
  if (expired) {
    res.send({ message: "code expired" });
  } else {
    var token = generate({ userId: auth.userId });
    res.send(token);
  }
}
