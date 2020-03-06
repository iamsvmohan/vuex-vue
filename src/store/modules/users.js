/* eslint-disable promise/param-names */
import api from '@/utils/api'

const state = {
    users: null
}

const getters = {
    
}

const mutations = {
    SAVE_USERS: (state, res) => {
        state.users = res
    },   
}

const actions = {
    GET_USERS: ({ commit }) => {
        return new Promise((resolve, reject) => {
            api.get('/users?since=135').catch(err => {
                console.log("--->>>>>>>>>>err",err)
                reject(err)
            }).then(resp => {
                console.log("--->>>>>>>>>>err",resp)
                // commit('SAVE_USERS',resp)
                resolve(resp)
            })
        })
    },     
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}