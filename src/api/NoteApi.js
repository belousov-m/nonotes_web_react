import api from './config/axiosConfig'

export const NoteApi = {
  show: async function (id) {
    const response = await api.request({
      url: `/notes/:id`,
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
  
  create: async function (note) {
    const response = await api.request({
      url: '/notes',
      method: 'POST',
      data: note
    })

    return response
  },
  
  edit: async function (id) {
    const response = await api.request({
      url: `/notes/:id`,
      method: 'PATCH'
    })

    return response
  },
  
  delete: async function (id) {
    const response = await api.request({
      url: `/notes/:id`,
      method: 'DELETE'
    })

    return response
  }
}