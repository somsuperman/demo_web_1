<template>
  <section class="mt-20">
    <form @submit.prevent="submitForm" class="space-y-5 sm:space-y-10 tk-oscine text-md text-white mb-10">
      <div class="flex flex-col sm:flex-row gap-5 sm:gap-10">
        <div class="w-full">
          <input v-model="formData.firstName" @input="validateField('firstName')" type="text" name="first_name" class="w-full py-2 border-b border-gray-400 outline-none bg-transparent focus:border-white" placeholder="Your first name*" />
          <span v-if="submitted && errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</span>
        </div>
        <div class="w-full">
          <input v-model="formData.lastName" @input="validateField('lastName')" type="text" name="last_name" class="w-full py-2 border-b border-gray-400 outline-none bg-transparent focus:border-white" placeholder="Your last name*" />
          <span v-if="submitted && errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</span>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-5 sm:gap-10">
        <div class="w-full">
          <input v-model="formData.email" @input="validateField('email')" type="email" name="email" class="w-full py-2 border-b border-gray-400 outline-none bg-transparent focus:border-white" placeholder="Your email*" />
          <span v-if="submitted && errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>
        <div class="w-full">
          <input v-model="formData.phone" @input="validateField('phone')" type="tel" name="phone" class="w-full py-2 border-b border-gray-400 outline-none bg-transparent focus:border-white" placeholder="Phone*" />
          <span v-if="submitted && errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</span>
        </div>
      </div>
      <textarea v-model="formData.message" @input="validateField('message')" class="w-full py-2 border-b border-gray-400 outline-none bg-transparent focus:border-white" name="message" rows="4" placeholder="Message*"></textarea>
      <span v-if="submitted && errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
      <div>
        <button type="submit" class="router-link-exact-active md:p-0 white-grad block transition-all duration-300 hover:bg-white rounded-lg hover:scale-105 hover:bg-opacity-10 font-sans text-lg mt-3 sm:mt-6">
          <span class="py-4 px-12 inline-block">{{ $t('sendMessageButton') }}</span>
        </button>
      </div>
    </form>
  </section>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});
const errors = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});
const submitted = ref(false);

function clearError(fieldName) {
  errors.value[fieldName] = '';
}

function validateField(fieldName) {
  clearError(fieldName);
  switch (fieldName) {
    case 'firstName':
      if (!formData.value.firstName.trim()) {
        errors.value.firstName = 'sd';
      }
      break;
    case 'lastName':
      if (!formData.value.lastName.trim()) {
        errors.value.lastName = 'Please enter your last name';
      }
      break;
    case 'email':
      if (!formData.value.email.trim()) {
        errors.value.email = 'Please enter your email';
      } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
      }
      break;
    case 'phone':
      if (!formData.value.phone.trim()) {
        errors.value.phone = 'Please enter your phone number';
      }
      break;
    case 'message':
      if (!formData.value.message.trim()) {
        errors.value.message = 'Please enter your message';
      }
      break;
  }
}

function validateForm() {
  clearError('all');
  let hasErrors = false;
  Object.keys(formData.value).forEach(fieldName => {
    validateField(fieldName);
    if (errors.value[fieldName]) {
      hasErrors = true;
    }
  });
  return hasErrors;
}

function submitForm() {
  submitted.value = true;
  const hasErrors = validateForm();
  if (!hasErrors) {
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
    submitted.value = false;
  }
}
</script>