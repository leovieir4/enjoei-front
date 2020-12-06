import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({ routes })
