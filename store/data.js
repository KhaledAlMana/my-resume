import { getData } from "~/store/helpers/options";

export const state = {
  cv: {
    general: {
      title: "",
      subtitle: "",
    },
    skills: [],
  },
};

export const mutations = {
  SET_ITEM(state, item) {
    state.cv = Object.assign(state.cv, item);
  },
};

export const actions = {
  fetchData: async ({ commit }, item) => {
    await commit("SET_ITEM", { [`${item}`]: getData(item).data });
  },
};

// export const getters = {
//   getData: (state) => (item) => {
//     return state.cv[item];
//   },
// };
