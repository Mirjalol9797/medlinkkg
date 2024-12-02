export const useContactPage = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const submitContact = async (data) => {
    try {
      const res = await $api(`/mails/send`, {
        method: "POST", // Указываем метод POST
        body: {
          ...data,
        },
      });
      return res;
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
      throw error; // Пробрасываем ошибку выше
    }
  };

  return {
    submitContact,
  };
};
