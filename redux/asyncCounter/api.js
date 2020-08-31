export function waitForSomeTime() {
  return const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
  })
}