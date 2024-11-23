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
// api
const { t } = useI18n();
const route = useRoute();

// banner api
const { data: newsBanner } = useAsyncData("banner", () =>
  getNewsBannerApi.getNewsBanner()
);
</script>

<template>
  <div class="site-container">
    <CSearchHeader />
    <CServices />
  </div>
  <CPopularDocs />
  <CClinicSpecialties />
  <CPopularClinic />
  <CDoctorsSpecialties />
</template>

<style lang="scss" scoped></style>
