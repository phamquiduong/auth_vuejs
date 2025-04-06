import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/lib/axios'
import type { LoginPayload, LoginResponse } from '@/types/auth'
import type { APIError } from '@/types/errors'
import transformErrorFields from '@/utils/transform_field_errors'

export default function useLogin() {
  const router = useRouter()
  const errorFields = ref<Record<string, string[]> | null>(null)
  const isLoading = ref(false)

  const login = async (email: string, password: string, redirectTo: string = '/'): Promise<void> => {
    errorFields.value = null
    isLoading.value = true

    try {
      const payload: LoginPayload = { email, password }
      const response = await axios.post<LoginResponse>('/auth/login', payload)

      const accessToken = response.data.access_token
      localStorage.setItem('access_token', accessToken)

      const refreshToken = response.data.refresh_token
      localStorage.setItem('refresh_token', refreshToken)

      router.push(redirectTo)
    } catch (err: any) {
      const apiError: APIError = err.response?.data
      errorFields.value = transformErrorFields(apiError.error_fields)
    } finally {
      isLoading.value = false
    }
  }

  return { login, errorFields, isLoading }
}
