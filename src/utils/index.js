export const shortenEthereumAddress = (addr) => {
  const beginning = addr.slice(0, 5)
  const middle = '...'
  const end = addr.slice(-4)
  console.log(beginning)
  console.log(middle)
  console.log(end)
  return beginning + middle + end
}
