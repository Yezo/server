export function validateTitle(title: string) {
  const validLength = title.length <= 45
  let hasLetter = /[a-zA-Z]/g.test(title)
  let hasNumber = /[0-9]/g.test(title)
  return hasLetter && validLength && !hasNumber
}
