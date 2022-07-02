import axios from "axios"
axios.defaults.headers.common['token'] = localStorage.getItem("token")

const fetchStudioData = async () => {
  const response = await axios.get(process.env.REACT_APP_URL + "/studio")
  return response.data.data
}

const fetchEditorData = async (id) => {
  const response = await axios.get(process.env.REACT_APP_URL + `/studio/${id}`)
  return response.data.data
}

const fetchRenderdModel = async (id) => {
  const response = await axios.get(process.env.REACT_APP_URL + `/studio/model/${id}`)
  return response
}

export { fetchStudioData, fetchEditorData, fetchRenderdModel }