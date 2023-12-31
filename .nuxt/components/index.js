import { wrapFunctional } from './utils'

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

export const LazyAppBar = import('../..\\components\\AppBar.vue' /* webpackChunkName: "components/app-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawer = import('../..\\components\\Drawer.vue' /* webpackChunkName: "components/drawer" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../..\\components\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../..\\components\\Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const LazyOverlay = import('../..\\components\\Overlay.vue' /* webpackChunkName: "components/overlay" */).then(c => wrapFunctional(c.default || c))
export const LazyProject = import('../..\\components\\Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c))
export const LazySide = import('../..\\components\\Side.vue' /* webpackChunkName: "components/side" */).then(c => wrapFunctional(c.default || c))
export const LazySectionsAbout = import('../..\\components\\sections\\About.vue' /* webpackChunkName: "components/sections-about" */).then(c => wrapFunctional(c.default || c))
export const LazySectionsContact = import('../..\\components\\sections\\Contact.vue' /* webpackChunkName: "components/sections-contact" */).then(c => wrapFunctional(c.default || c))
export const LazySectionsGithubElement = import('../..\\components\\sections\\GithubElement.vue' /* webpackChunkName: "components/sections-github-element" */).then(c => wrapFunctional(c.default || c))
export const LazySectionsHero = import('../..\\components\\sections\\Hero.vue' /* webpackChunkName: "components/sections-hero" */).then(c => wrapFunctional(c.default || c))
export const LazySectionsJobs = import('../..\\components\\sections\\Jobs.vue' /* webpackChunkName: "components/sections-jobs" */).then(c => wrapFunctional(c.default || c))
export const LazySectionsProjects = import('../..\\components\\sections\\Projects.vue' /* webpackChunkName: "components/sections-projects" */).then(c => wrapFunctional(c.default || c))
