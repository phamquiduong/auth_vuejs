export interface FieldError {
  name: string,
  errors: string[]
}

export interface APIError {
  error_code: string,
  error_fields: FieldError[],
  message: string,
  status: number
}
