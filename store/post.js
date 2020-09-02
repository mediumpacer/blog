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
    const response = await fetch(`${process.env.NTL_URL}/.netlify/functions/get-post?postId=${id}`)
      .then(res => res.json())
      .catch(err => console.error(err)) // eslint-disable-line

    commit('setCurrentPost', response)
    commit('setLoading', false)
  }
}
