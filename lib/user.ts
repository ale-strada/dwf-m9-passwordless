import { defineModel } from "firestore-sequelizer";

export const User = defineModel("users", {
  name: "",
  email: "",
  admin: {
    type: "boolean",
    required: true,
  },
});
