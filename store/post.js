export const state = () => ({
  currentPost: {},
  isLoading: true
})

export const mutations = {
  setCurrentPost (state, payload) {
    state.currentPost = payload
  },
  setLoading (state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async getPostBySlug ({ commit }, id) {
    commit('setLoading', true)
    const response = await this.$axios.$get(process.env.apiUrl + '/articles/' + id)
    commit('setCurrentPost', response)
    commit('setLoading', false)
  }
}
