<template>
  <div class="flex flex-row justify-around my-16">
    <textarea v-model="content"/>
    <markdown-renderer v-html="content"/>
  </div>
</template>

<script>

export default {
  components: {
    MarkdownRenderer: () => import('@/components/MarkdownRenderer')
  },
  data () {
    return {
      content: '# Hey!'
    }
  }
}
</script>
