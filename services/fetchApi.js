import { bayutApi } from './config'

export const fetchApi = async (url) => {
  const { data } = await bayutApi.get(url, {
    headers: {
      'X-RapidAPI-Key': 'f8679b8440msh1a5dbfbd5fe02b9p160aeejsnbcb3742a461f',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data
}
