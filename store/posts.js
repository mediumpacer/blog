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
    const thePosts = await fetch(`${process.env.NTL_URL}/.netlify/functions/get-posts`)
      .then(res => res.json())
      .catch(err => console.error(err)) // eslint-disable-line

    commit('SET_POSTS', thePosts)
  }
}
