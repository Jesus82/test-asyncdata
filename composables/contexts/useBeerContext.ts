export const useBeerContext = () => {
  const loadBeerStyle = async slug => {
    const { getBeerStyle } = useBeerApi()
    // ...here goes the cache
    const beerStyle = await getBeerStyle(slug)
    return beerStyle
  }

  return { loadBeerStyle }
}
