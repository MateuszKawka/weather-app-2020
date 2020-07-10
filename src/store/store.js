import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiPath = `https://www.metaweather.com/api/`

export default new Vuex.Store({
    state: {
        pickedLocation: 0,
        query: "war"
    },
    mutations: {
        pickLocation: (state, payload) => state.pickedLocation = payload,
        setQuery: (state, payload) => state.query = payload
    },
    actions: {
        async getWeatherData({state}) {
            const data = await fetch(`${apiPath}/location/search/?query=${state.query}`).then(response => response.json())
            console.log(data)
        }
    }
})