import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals);
    })
    .catch(error => {
      console.error('Error searching meals:', error);
      // Aqui você pode tratar o erro de forma adequada, como exibir uma mensagem de erro para o usuário.
    });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    }).catch(error => {
      console.error('Error searching meals:', error);
      // Aqui você pode tratar o erro de forma adequada, como exibir uma mensagem de erro para o usuário.
    });
}

export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data.meals)
    }).catch(error => {
      console.error('Error searching meals:', error);
      // Aqui você pode tratar o erro de forma adequada, como exibir uma mensagem de erro para o usuário.
    });
}