export const useClinicSpecialties = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getClinicSpecialties = async () => {
    const res = await $api(`/clinic-specialties`);
    return res;
  };
  const getNewsLittleBanner = async () => {
    const res = await $api(`${baseUrl}/little_banner/`);
    return res;
  };

  return {
    getClinicSpecialties,
    getNewsLittleBanner,
  };
};
