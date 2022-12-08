export { default as AppFeatureProducts } from '../../components/AppFeatureProducts.vue'
export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppFooterLinks } from '../../components/AppFooterLinks.vue'
export { default as AppNav } from '../../components/AppNav.vue'
export { default as AppSalesBoxes } from '../../components/AppSalesBoxes.vue'
export { default as AppStoreGrid } from '../../components/AppStoreGrid.vue'
export { default as AppTextlockup } from '../../components/AppTextlockup.vue'

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
