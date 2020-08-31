export function waitForSomeTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
  })
}