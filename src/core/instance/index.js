import {
  initMixin
} from './init'
import {
  stateMixin
} from './state'
import {
  renderMixin
} from './render'
import {
  eventsMixin
} from './events'
import {
  lifecycleMixin
} from './lifecycle'
import {
  warn
} from '../util/index'

// VUE的定义 ES5用 Function 实现的类，我们只能通过 new Vue 去实例化
// 通过函数方法构建一个类,在这个类上挂载许多原型方法
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // new Vue就是调用了 _init方法 ,它挂载在vue原型中的方法 在init.js 中

  this._init(options)
}
// 把 Vue 当参数传入，它们的功能都是给 Vue 的 prototype 上扩展一些方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
