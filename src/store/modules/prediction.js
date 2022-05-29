import { actionTypes, mutationTypes, getterTypes } from "../types.js";
import axios from "axios";

const state = {
    historyPredictions: [],
    detailPrediction: null,
    result: null
}

const mutations = {
    [mutationTypes.SET_HISTORY_PREDICTIONS](state, value) {
        state.historyPredictions = value;
    },
    [mutationTypes.SET_DETAIL_PREDICTION](state, value) {
        state.detailPrediction = value;
    },
    [mutationTypes.SET_TEXT](state, value) {
        state.result = value;
    }
}

const actions = {
    async [actionTypes.FETCH_HISTORY_PREDICTIONS]({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get("/sentiment")
            .then((resp) => {      
                resp.data.sort(function (a,b) {
                    return new Date(b.p_date) - new Date(a.p_date)
                })         
                commit(mutationTypes.SET_HISTORY_PREDICTIONS, resp.data)
                resolve(resp)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    async [actionTypes.PREDICT_POST]({ commit },payload) {
        return new Promise((resolve, reject) => {
            axios.post("/sentiment", { text: payload })
            .then((resp) => {
                commit(mutationTypes.SET_TEXT, resp.data)
                resolve(resp)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    [actionTypes.FETCH_DETAIL_PREDICTION]({ commit },predictId) {
        return new Promise((resolve, reject) => {
            axios.get(`/sentiment/history/${predictId}`)
            .then((resp) => {
                commit(mutationTypes.SET_DETAIL_PREDICTION, resp.data)
                resolve(resp)
            })
            .catch((error) => {
                reject(error.response.data.message)
            })
        })
    }
}

const getters = {
    [getterTypes.HISTORY_PREDICTIONS](state) {
        if (state.historyPredictions) {
          return state.historyPredictions;
        }
        return [];
    },
    [getterTypes.DETAIL_PREDICTION](state) {
        if (state.detailPrediction) {
          return state.detailPrediction;
        }
        return {};
    },
    [getterTypes.RESULT_PREDICTION](state) {
        if (state.result) {
          return state.result;
        }
        return {};
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
};