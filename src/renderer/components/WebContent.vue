<template>
  <iframe src="https://poe.com" class="web_content_iframe" frameborder="0" target="_parent"></iframe>
</template>

<script>

export default {
  name: 'WebContent',
  props: {
    url: {
      type: String,
      required: true,
    }
  }
}
</script>
<style scoped>
.web_content_iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
