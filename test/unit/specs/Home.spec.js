import Vue from 'vue'
import App from 'App.vue'

describe('App.vue', () => {
  it('should render correct home contents', () => {
    const vm = new Vue(App).$mount()
    expect(vm.$el.textContent).to.contain('App')
  })
})
