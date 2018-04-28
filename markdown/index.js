import MarkdownIt from 'markdown-it'

export default () => {
  return new MarkdownIt({
    html: true,
    typographer: true
  })
}

