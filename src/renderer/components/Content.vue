<template>
  <!-- <div>Contents</div> -->
  <!-- <div>{{ currentTask.type }}</div> -->
  <WebContent v-if="currentTask.type == 'web_url'" :url="currentTask.url"></WebContent>
</template>

<script>
import WebContent from './WebContent.vue'

export default {
  components: { WebContent },
  name: 'Content',
  props: {
    currentTask: {
      required: true,
    }
  }
}
</script>
