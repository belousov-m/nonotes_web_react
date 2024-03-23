import api from './config/axiosConfig'

export const NoteApi = {
  show: async function (id) {
    const response = await api.request({
      url: `/notes/${id}`,
      method: 'GET'
    })

    return response
  },

  index: async function () {
    const response = await api.request({
      url: '/notes',
      method: 'GET'
    })

    return response
  },
  
  create: async function (note, successCallback, errorCallback) {
    try {
      const { data } = await api.request({ url: '/notes', method: 'POST', data: note })
      successCallback(data.data)
    } catch (error) {
      errorCallback(error)
    }
  },
  
  update: async function (id, note, successCallback) {
    try {
      await api.request({ url: `/notes/${id}`, method: 'PATCH', data: note })
      successCallback()
    } catch (error) {
      console.error('Не удалось сохранить данные')
    }
  },
  
  delete: async function (id, successCallback, errorCallback) {
    try {
      await api.request({url: `/notes/${id}`, method: 'DELETE'})
      successCallback()
    } catch (error) {
      errorCallback(error)
    }
  }
}