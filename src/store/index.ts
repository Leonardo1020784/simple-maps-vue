import { createStore } from "vuex";
import { Point, generatePoints } from "../points";

interface State {
  points: Point[];
  activePoint: Point | null;
  selectedPoints: Point[];
}

const store = createStore<State>({
  state: {
    points: generatePoints(10000),
    activePoint: null,
    selectedPoints: [],
  },
  mutations: {
    setPoints(state, points: Point[]) {
      state.points = points;
    },
    setActivePoint(state, point: Point) {
      state.activePoint = point;
    },
    setSelectedPoints(state, points: Point[]) {
      state.selectedPoints = points;
    },
  },
  actions: {
    selectPoint({ commit }, point: Point) {
      commit("setActivePoint", point);
    },
    updateSelectedPoints({ commit }, points: Point[]) {
      commit("setSelectedPoints", points);
    },
  },
});

export default store;
