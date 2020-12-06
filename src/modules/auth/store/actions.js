import * as types from './mutations-types'
import services from '@/http'
import * as storage from '../storage'
export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then((result) => {
    const { body } = result
    const { res = body.body } = body
    const { accessToken, id } = res
    console.log(accessToken)
    dispatch('ActionSetToken', accessToken)
    dispatch('ActionSetUser', id)
  })
}
export const ActionCreateUser = ({ dispatch }, payload) => {
  return services.auth.signup(payload)
}
export const ActionSetUser = ({ commit }, payload) => {
  storage.setLocalUserId(payload)
  storage.setHeaderIUserId(payload)
  commit(types.SET_USER, payload)
}
export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}
