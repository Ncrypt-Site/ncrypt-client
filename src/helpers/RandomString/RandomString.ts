export function GenerateRandomString(length: number): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let i
  let result = ''

  if(window.crypto && window.crypto.getRandomValues) {
    const values = new Uint32Array(length)
    window.crypto.getRandomValues(values)
    for (i = 0; i < length; i++) {
      result += charset[values[i] % charset.length]
    }
  } else throw new Error("Your are using an unsupported browser.")

  return result
}