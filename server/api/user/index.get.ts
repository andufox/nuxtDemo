import { userFindFirst } from '~/server/db/dbUser';

export default defineEventHandler(async (event) => {
  const user = await userFindFirst();
  return {
    user,
  };
});
