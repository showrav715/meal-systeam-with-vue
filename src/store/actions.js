
import AxiosClient from "../libs/AxiosClient";
export const getMeals = ({ commit }, keyword) => {
    AxiosClient.get(`/search.php?s=${keyword}`)
        .then(({data}) => {
        commit('setMeals',data.meals)
    })  
}