import { defineModel } from "firestore-sequelizer";

export const User = defineModel("users", {
  name: "",
  email: "",
});
