export const state = () => ({
  allPosts: []
})

export const mutations = {
  SET_POSTS (state, payload) {
    state.allPosts = payload
  }
}

export const actions = {
  async getPosts ({ commit }) {
    const thePosts = await this.$axios.$get(process.env.apiUrl + '/articles')
    commit('SET_POSTS', thePosts)
  }
}
