import AxiosClient from "../libs/AxiosClient";

export const HomeMeal = async ({ commit }) => {
    const res = [];
    
    AxiosClient.get(`/search.php?f=c`).then(({ data }) => {
        commit("setMeals", data.meals);
      });
 
};

export const getMeals = ({ commit }, keyword) => {
  AxiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setMeals", data.meals);
  });
};

export const getMealsByLetter = ({ commit }, keyword) => {
  AxiosClient.get(`/search.php?f=${keyword}`).then(({ data }) => {
    commit("setMeals", data.meals);
  });
};
