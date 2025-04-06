function transformErrorFields(errorFields: { name: string; errors: string[] }[]) {
  return errorFields.reduce((acc, field) => {
    acc[field.name] = field.errors
    return acc
  }, {} as Record<string, string[]>)
}

export default transformErrorFields
