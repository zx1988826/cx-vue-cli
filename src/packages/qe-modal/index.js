import qeModal from './qe-modal'

qeModal.install = Vue => Vue.component(qeModal.name, qeModal)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(qeModal);
}

export default qeModal