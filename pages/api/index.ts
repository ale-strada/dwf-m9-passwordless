import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  res.send("soy api " + process.env.PRUEBA);
}
