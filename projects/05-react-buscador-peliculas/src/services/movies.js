const OMDB_API_KEY = 'c37f230d'
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(OMDB_API_URL + `&s=${search}`)
    const data = await response.json()

    const movies = data.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
