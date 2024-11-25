export const useClinicSpecialties = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getClinicSpecialties = async () => {
    const res = await $api(`/clinic-specialties`);
    return res;
  };

  return {
    getClinicSpecialties,
  };
};
