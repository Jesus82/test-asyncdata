export const useBeerApi = () => {
  const getBeerStyle = async slug => {
    return await $fetch(`https://api.sampleapis.com/beers/${slug}`)
  }

  return { getBeerStyle }
}
