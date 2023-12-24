// https://nuxt.com/docs/examples/advanced/jsx
// https://vuejs.org/guide/extras/render-function.html#jsx-tsx
export default defineComponent({
  setup() {
   return null
  },
  render () {
    const hehe = useState('tsx_demo', () => 'hehe')
    return (
      <>
        <h1>About page was written in TSX</h1>
        <p>This format does not work with nuxt page/layout transitions. Disable that to ensure routing doesnt break</p>
        <p>Oh and app needs a full reload if theres a new route using TSX. {hehe.value}</p>
        <nuxt-link to="/" class="btn btn-primary">Go to Home</nuxt-link>
      </>
    )
  }
})  
