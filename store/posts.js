export const state = () => ({
  allPosts: []
})

export const mutations = {
  SET_POSTS (state, payload) {
    state.allPosts = payload
  }
}

const HEADERS = {
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json', // optional
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '8640'
}

export const actions = {
  async getPosts ({ commit }) {
    const thePosts = await fetch(`${process.env.NTL_URL}/.netlify/functions/get-posts`, HEADERS)
      .then(res => res.json())
      .catch(err => console.error(err)) // eslint-disable-line

    commit('SET_POSTS', thePosts)
  }
}
