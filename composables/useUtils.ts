export const useUtils = (list: []) => list.sort(() => Math.random() - 0.5)

export const statusSettings = Object.freeze({
  DEFAULT: "default",
  MATCH: "match",
  RESULT: "result",
});
