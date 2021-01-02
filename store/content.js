import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    allArticles: [],
    paginatedArticles: null,
})

export const mutations = {
    SET_ARTICLES(state, content) {
        state.allArticles = content.allArticles
        state.paginatedArticles = content.paginatedArticles
    },
}

export const actions = {
    async GET_ARTICLES({ commit, state }, content) {
        commit('SET_ARTICLES', content)
    },
}

export const getters = {
    getArticles: (state) => {
        return state.allArticles
    },
    getPaginated: (state) => {
        return state.paginatedArticles
    },
}