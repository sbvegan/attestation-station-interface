export const shortenEthereumAddress = (addr) => {
  const beginning = addr.slice(0, 5)
  const middle = '...'
  const end = addr.slice(-4)
  return beginning + middle + end
}
