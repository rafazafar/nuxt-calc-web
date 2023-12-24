// https://vuejs.org/guide/extras/render-function.html
export default defineComponent({
  render () {
    return [
      h('h1', 'Help page'),
      h('p', 'This is a help page written in Hyperscript'),
      h('p', 'Something i sincerely hope you never need to use. Dont reinvent the wheel for fun. '),
      h('p', 'And yes it does also break page/layout transitions. Needs a hard refresh')
    ]
  }
})