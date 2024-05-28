// src/store/index.ts
import { createStore } from "vuex";

export interface Point {
  id: number;
  name: string;
  code: string;
  coordinates: [number, number];
  // Add other fields as necessary
}

interface State {
  points: Point[];
  activePoint: Point | null;
  selectedPoints: Point[];
}

const store = createStore<State>({
  state: {
    points: [], // Will be populated with at least 10,000 points
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
    fetchPoints({ commit }) {
      // Simulate fetching points
      const points = Array.from({ length: 10000 }, (_, i) => ({
        id: i,
        name: `Point ${i}`,
        code: `P${i}`,
        coordinates: [Math.random() * 180 - 90, Math.random() * 360 - 180],
      }));
      commit("setPoints", points);
    },
    selectPoint({ commit }, point: Point) {
      commit("setActivePoint", point);
    },
    updateSelectedPoints({ commit }, points: Point[]) {
      commit("setSelectedPoints", points);
    },
  },
});

export default store;
