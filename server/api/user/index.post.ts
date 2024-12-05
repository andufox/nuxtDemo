import { userAdd } from "~/server/db/dbUser";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username } = body;
  const userData = {
    username,
  };
  const user = await userAdd(userData);
  return { user };
});
