<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id" :data-id="post.id">
      <nuxt-link :to="`/post/${post.id}`">
        <h2>{{ post.title }}</h2>
        <img :src="api_url + post.image[0].formats.thumbnail.url" :alt="post.title">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      api_url: process.env.API_URL
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.allPosts
    })
  },
  mounted () {
    this.$store.dispatch('posts/getPosts')
  },

  methods: {
  }
}
</script>
