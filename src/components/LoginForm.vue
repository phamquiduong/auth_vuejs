<template>
  <form @submit.prevent="handleLogin">
    <div>
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" required />
      <FieldErrors :errors="errorFields?.email" />
    </div>

    <div>
      <label for="password">Mật khẩu</label>
      <input v-model="password" type="password" id="password" required />
      <FieldErrors :errors="errorFields?.password" />
    </div>

    <button type="submit">Đăng nhập</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLogin from '@/composables/useLogin.ts'
import FieldErrors from '@/components/FieldErrors.vue'

const email = ref('')
const password = ref('')
const { login, errorFields } = useLogin()

const handleLogin = async () => {
  await login(email.value, password.value)
}
</script>
