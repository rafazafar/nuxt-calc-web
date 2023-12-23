// https://nuxt.com/docs/examples/advanced/jsx
// https://vuejs.org/guide/extras/render-function.html#jsx-tsx
export default defineComponent({
  render () {
    return (
      <>
        <h1>About page was written in TSX</h1>
        <p>This format does not work with nuxt page/layout transitions. Disable that to ensure routing doesnt break</p>
        <nuxt-link to="/" class="border px-6 py-3 block w-max hover:bg-slate-100">Go to Home</nuxt-link>
      </>
    )
  }
})  
