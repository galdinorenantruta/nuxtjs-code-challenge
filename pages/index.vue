<script setup lang="ts">
import { ref } from "vue";
import AddProductForm from "~/components/AddProductForm.vue";
import ProductList from "~/components/ProductList.vue";
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import { useStore } from "~/composables/useStore";
import type { Product, Language } from "~/types";

const { $client } = useNuxtApp();
const { state, setProducts, setLanguage } = useStore();
const products = ref<Product[]>([]);

async function loadProducts() {
  try {
    const response = await $client.getProducts.useQuery();
    console.log("Response from getProducts:", response);
    products.value = response.data.value ?? [];
    console.log("Products data:", products.value);
  } catch (error) {
    console.warn("Error fetching products:", error);
  }
}

loadProducts();

async function handleAddProduct(product: Omit<Product, "id">) {
  try {
    const addedProduct = await $client.addProduct.mutate(product);

    products.value.push(addedProduct);
    console.log("Product added:", addedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

function changeLanguage(locale: Language): void {
  setLanguage(locale);
}
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <p>Intro</p>
    <ProductList :products="products" />
    <AddProductForm @add-product="handleAddProduct" />
    <LanguageSwitcher @changeLanguage="changeLanguage" />
  </div>
</template>
