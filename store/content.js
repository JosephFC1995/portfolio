import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    articles: [],
})

export const mutations = {
    SET_ARTICLES(state, articles) {
        state.articles = articles
    },
}

export const actions = {
    async GET_ARTICLES({ commit, state }, articles) {
        commit('SET_ARTICLES', articles)
    },
}

export const getters = {
    getArticles: (state) => {
        return state.articles
    },
}