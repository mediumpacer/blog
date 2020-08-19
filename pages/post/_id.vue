<template>
  <div class="single-post">
    <div v-if="!isLoading" class="single-post__article">
      <h1 class="single-post__title">
        {{ currentPost.title }}
      </h1>
      <div class="single-post__content">
        <img :src="api_url + currentPost.image[0].formats.large.url" :alt="currentPost.title">
      </div>
    </div>
    <p v-else class="single-post__loading">
      Loading
    </p>
  </div>
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('post/getPostBySlug', params.id)
  },
  data: () => {
    return {
      api_url: process.env.API_URL
    }
  },
  computed: {
    currentPost () {
      return this.$store.state.post.currentPost
    },
    isLoading () {
      return this.$store.state.post.isLoading
    }
  }
}
</script>
