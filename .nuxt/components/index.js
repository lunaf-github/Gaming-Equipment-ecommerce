export const AppCard = () => import('../../components/AppCard.vue' /* webpackChunkName: "components/app-card" */).then(c => wrapFunctional(c.default || c))
export const AppCartDisplay = () => import('../../components/AppCartDisplay.vue' /* webpackChunkName: "components/app-cart-display" */).then(c => wrapFunctional(c.default || c))
export const AppCartSteps = () => import('../../components/AppCartSteps.vue' /* webpackChunkName: "components/app-cart-steps" */).then(c => wrapFunctional(c.default || c))
export const AppFeatureProducts = () => import('../../components/AppFeatureProducts.vue' /* webpackChunkName: "components/app-feature-products" */).then(c => wrapFunctional(c.default || c))
export const AppFooter = () => import('../../components/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const AppFooterLinks = () => import('../../components/AppFooterLinks.vue' /* webpackChunkName: "components/app-footer-links" */).then(c => wrapFunctional(c.default || c))
export const AppNav = () => import('../../components/AppNav.vue' /* webpackChunkName: "components/app-nav" */).then(c => wrapFunctional(c.default || c))
export const AppSalesBoxes = () => import('../../components/AppSalesBoxes.vue' /* webpackChunkName: "components/app-sales-boxes" */).then(c => wrapFunctional(c.default || c))
export const AppStoreGrid = () => import('../../components/AppStoreGrid.vue' /* webpackChunkName: "components/app-store-grid" */).then(c => wrapFunctional(c.default || c))
export const AppTextlockup = () => import('../../components/AppTextlockup.vue' /* webpackChunkName: "components/app-textlockup" */).then(c => wrapFunctional(c.default || c))

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
