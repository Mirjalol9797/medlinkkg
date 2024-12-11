<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// components
import CSearchHeader from "~/components/indexPage/CSearchHeader.vue";
import CServices from "~/components/indexPage/CServices.vue";
import CPopularDocs from "~/components/indexPage/CPopularDocs.vue";
import CClinicSpecialties from "~/components/indexPage/СClinicSpecialties.vue";
import CPopularClinic from "~/components/indexPage/CPopularClinic.vue";
import CDoctorsSpecialties from "~/components/indexPage/СDoctorsSpecialties.vue";
import CDiagnostics from "~/components/indexPage/СDiagnostics.vue";
import CReviews from "../../components/indexPage/СReviews.vue";
import MChooseYourCity from "~/components/indexPage/MChooseYourCity.vue";
import SeoSettings from "~/components/Seo/SeoSettings.vue";

const { t } = useI18n();
const route = useRoute();
const settingsStore = useSettingsStore();

// api
const getClinicSpecialtiesApi = useClinicSpecialties();
const getDoctorsSpecialtiesApi = useDoctorsSpecialties();

// fetch api
const { data: dataClinicSpecialties } = useAsyncData("ClinicSpecialties", () =>
  getClinicSpecialtiesApi.getClinicSpecialties()
);

const { data: dataDoctorsSpecialties } = useAsyncData(
  "DoctorsSpecialties",
  () => getDoctorsSpecialtiesApi.getDoctorsSpecialties()
);

// functions
function openChooseYourCity() {
  settingsStore.mChooseYourCity = true;
}
</script>

<template>
  <div class="site-container">
    <CSearchHeader />
    <CServices @openChooseYourCity="openChooseYourCity" />
  </div>

  <CPopularDocs />

  <CClinicSpecialties :clinicSpecialties="dataClinicSpecialties?.data" />

  <CPopularClinic @openChooseYourCity="openChooseYourCity" />

  <!-- <CDoctorsSpecialties :doctorsSpecialties="dataDoctorsSpecialties?.data" />

  <CDiagnostics @openChooseYourCity="openChooseYourCity" />

  <CReviews />

  <MChooseYourCity v-if="settingsStore.mChooseYourCity" /> -->

  <!-- seo -->
  <SeoSettings />
</template>

<style lang="scss" scoped></style>
