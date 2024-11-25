export const useDoctorsSpecialties = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getDoctorsSpecialties = async () => {
    const res = await $api(`/doctors-specialties`);
    return res;
  };

  return {
    getDoctorsSpecialties,
  };
};
