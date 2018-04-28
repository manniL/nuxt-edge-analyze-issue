<script>

import md from '~/markdown'

export default {
  functional: true,
  render (h, { data }) {
    const content = (data.domProps ? data.domProps.textContent || data.domProps.innerHTML : false) || ''
    return h('div', {
      domProps: {
        innerHTML: md().render(content)
      }
    })
  }
}
</script>
