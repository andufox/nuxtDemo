import prisma from '.';

export const userAdd = async (userData: any) => {
  // const finalUser = { ...user, password: bcrypt.hashSync(user.password, 10) };
  return await prisma.user.create({
    data: userData,
  });
};
export const userFindFirst = async () => {
  const user = await prisma.user.findFirst();
  return user;
};
