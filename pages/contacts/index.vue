<script setup>
import { ref, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import NotificationModal from "~/components/modals/NotificationModal.vue";

const errorText = ref("Обязательно для заполнения");
const loaderBtn = ref(false);
const settingsStore = useSettingsStore();

// composables
const { submitContact } = useContactPage();

const contactForm = ref({
  fullname: "",
  email: "",
  phone: "+996 ", //+996 000 000000
  message: "",
});

const contactFormError = ref({
  fullname: { required },
  email: { required, email },
  phone: { required, minLength: minLength(15) },
  message: { required },
});

const v$1 = useVuelidate(contactFormError, contactForm);

async function sendContactData() {
  loaderBtn.value = true;
  let validate = v$1.value.$invalid;
  v$1.value.$touch();
  if (!validate) {
    const response = await submitContact(contactForm.value);
    settingsStore.notificationModal = true;

    contactForm.value = {
      fullname: "",
      email: "",
      phone: "+996 ",
      message: "",
    };

    v$1.value.$reset();
  }

  loaderBtn.value = false;
}
</script>

<template>
  <div class="contact-page py-14">
    <div class="site-container">
      <div class="flex gap-2 mb-6 font-semibold 480:text-xs 480:mb-4">
        <nuxt-link to="/" class="font-medium text-[#3f78c6]" title="Medlink.kg">
          Medlink.kg
        </nuxt-link>
        <img
          src="@/public/icons/general/arrow-left-black.svg"
          alt="arrow"
          class="w-4"
        />
        <span>Контакты</span>
      </div>

      <h1 class="h1-title">Контакты</h1>

      <div class="bg-[#f3f3f3] p-5 rounded-md 768:px-3">
        <div class="flex gap-10 768:flex-col 768:gap-6">
          <div class="w-1/2 768:w-full">
            <h2 class="text-base font-semibold mb-8">
              Если вам нужна дополнительная информация о нашем сервисе,
              свяжитесь с нами удобным для вас способом.
            </h2>
            <div class="font-medium inline-flex flex-col">
              <a
                href="mailto:info@medlink.kg"
                class="mb-4 flex gap-3"
                rel="nofollow"
              >
                <img
                  src="@/public/icons/mainPage/social/pochta.svg"
                  alt="pochta"
                  class="w-5"
                />
                <span>info@medlink.kg</span>
              </a>
              <a
                href="https://t.me/medlinkkg"
                class="mb-4 flex gap-3"
                rel="nofollow"
              >
                <img
                  src="@/public/icons/mainPage/social/telegam.png"
                  alt="telegam"
                  class="w-[22px]"
                />
                <span>Telegram</span>
              </a>
              <a href="/" class="mb-4 flex gap-3" rel="nofollow">
                <img
                  src="@/public/icons/mainPage/social/whatsap.png"
                  alt="whatsapp"
                  class="w-5"
                />
                <span>Whatsap</span>
              </a>
            </div>
          </div>
          <div class="w-1/2 768:w-full">
            <h2 class="text-base font-semibold mb-8">
              Отправьте нам свои контактные данные используя форму ниже и мы
              свяжемся с вами в самое ближайшее время.
            </h2>
            <div class="contact-form">
              <UiHInput
                v-model="contactForm.fullname"
                :error="v$1.fullname.$error"
                :errorText="errorText"
                placeholder="Выше имя"
                class="mb-6"
              />
              <div
                class="grid grid-cols-2 gap-6 mb-6 768:gap-6 768:grid-cols-1"
              >
                <UiHInput
                  placeholder="Ваш E-mail"
                  v-model="contactForm.email"
                  :error="v$1.email.$error"
                  :errorText="errorText"
                  type="email"
                />

                <UiHInput
                  v-model="contactForm.phone"
                  :error="v$1.phone.$error"
                  :errorText="errorText"
                  placeholder="Мобильный телефон"
                  dataMaska="+996 ### ######"
                />
              </div>
              <UiHTextarea
                v-model="contactForm.message"
                :error="v$1.message.$error"
                :errorText="errorText"
                placeholder="Ваше сообщение"
                class="mb-6"
              />
              <button
                class="bg-[#f39] text-white w-full rounded-lg py-3 font-semibold text-base"
                :class="loaderBtn ? 'site-btn-loader' : ''"
                @click="sendContactData"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NotificationModal v-if="settingsStore.notificationModal" />
</template>

<style lang="scss">
.contact {
  &-form {
    .form-item-input {
      background-color: #fff;
      border: 1px solid #6486fa;
      border-radius: 8px;
    }
    .form-item__label {
      background-color: transparent;
    }
  }
}
</style>
