import Vue from 'vue'
import Component from '../src/Component.vue'

/* eslint-disable no-new */
new Vue({
  template: '<div><h3>Default component:</h3>' +
  '<component></component>' +
  '</div>',
  components: {
    Component
  }
}).$mount('#app')
