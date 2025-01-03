import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    isLoader: false,
    mChooseYourCity: false,
    notificationModal: false,
  }),
  getters: {},
  actions: {},
});
