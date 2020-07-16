import axios from 'axios'
export const fetchMeteoriteData = () => {
  return (dispatch) => axios({
        url:"https://data.nasa.gov/resource/gh4g-9sfh.json",
        method:'get',
        params: {
          "$limit" : 10000,
          "$$app_token" : "7PYvdjcUgmEHCM3YswyERWPFA"

        }
      }
  ).then(res => {
    return dispatch({
      type: 'fetchMeteoriteDataSuccess',
      data: res.data
    })
  }).catch(err => {
    return dispatch({
      type: 'fetchMeteoriteError',
      err: err
    })
  })
}

export const fetchLatLng = (address, key) => {
  return (dispatch) => axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&key=${key}`
  ).then(res => {
    return dispatch({
      type: 'fetchLatLngSuccess',
      coords: res.data.results[0]
    })
  }).catch(err => {
    return dispatch({
      type: 'fetchLatLngError',
      err: err
    })
  })
}
