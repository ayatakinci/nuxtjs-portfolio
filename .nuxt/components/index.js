export { default as AppBar } from '../..\\components\\AppBar.vue'
export { default as Drawer } from '../..\\components\\Drawer.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Loading } from '../..\\components\\Loading.vue'
export { default as Menu } from '../..\\components\\Menu.vue'
export { default as Overlay } from '../..\\components\\Overlay.vue'
export { default as Project } from '../..\\components\\Project.vue'
export { default as Side } from '../..\\components\\Side.vue'
export { default as SectionsAbout } from '../..\\components\\sections\\About.vue'
export { default as SectionsContact } from '../..\\components\\sections\\Contact.vue'
export { default as SectionsGithubElement } from '../..\\components\\sections\\GithubElement.vue'
export { default as SectionsHero } from '../..\\components\\sections\\Hero.vue'
export { default as SectionsJobs } from '../..\\components\\sections\\Jobs.vue'
export { default as SectionsProjects } from '../..\\components\\sections\\Projects.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
