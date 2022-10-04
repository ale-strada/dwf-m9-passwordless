import { User } from "lib/user";
import { Auth } from "lib/auth";

export async function findOrCreateAuth(email: string): Promise<Auth> {
  const cleanEmail = email.trim().toLocaleLowerCase();
  const auth = await Auth.findByEmail(cleanEmail);
  if (auth) {
    return auth;
  } else {
    const newUser = await User.createNewUser({
      email: cleanEmail,
    });
    const newAuth = await Auth.createNewAuth({
      email: cleanEmail,
      userId: newUser.id,
      code: "",
      expires: new Date(),
    });
    return newAuth;
  }
}
