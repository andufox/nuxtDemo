export default () => {
  /**
   * get User
   */
  const cpUserFindFirst = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const user: any = await $fetch('/api/user', {
          method: 'GET',
        });
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  };

  /**
   * 输出
   */
  return {
    cpUserFindFirst,
  };
};
