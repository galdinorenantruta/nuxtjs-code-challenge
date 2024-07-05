import { reactive } from "vue";
import type { State, Product, Language } from "~/types";

const state = reactive<State>({
  currentLanguage: "en",
  products: [],
});

export function useStore() {
  function setLanguage(language: Language) {
    state.currentLanguage = language;
    console.log("Current Language: ", state.currentLanguage);
  }

  function setProducts(products: Product[]) {
    state.products = products;
  }

  return {
    state,
    setLanguage,
    setProducts,
  };
}
