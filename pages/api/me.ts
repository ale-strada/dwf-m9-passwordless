import { NextApiRequest, NextApiResponse } from "next";
import { User } from "lib/models/user";
import { authMiddleware } from "lib/middlewares";

async function handler(req: NextApiRequest, res: NextApiResponse, token) {
  const user = new User(token.userId);
  await user.pull();
  res.send(user.data);
}

export default authMiddleware(handler);
