export async function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, timeout);
  });
}