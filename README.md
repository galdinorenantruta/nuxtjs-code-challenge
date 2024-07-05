# NuxtJS Developer Challenge

# Getting Started

Clone the repository.
Install dependencies (npm install).
Configure environment variables.
Start the development server (npm run dev).

# Data Retrieval and Manipulation

Implemented try/catch block to fetch product data using $client.getProducts.useQuery().
Assigned fetched data to products.value, accessing .data.value to retrieve actual reactive data.

# AddProductForm.vue Component

Captures product data using v-model on a reactive product object.
Emits an add-product event with the product data to the parent component when the form is submitted.
Página index.vue
Utilizes ref to maintain a reactive list of products.
loadProducts() is an asynchronous function that loads existing products when the page initializes.
handleAddProduct() is an asynchronous function that handles the addition of new products:
Calls $client.addProduct.mutate() to send the new product data to the TRPC server.
Updates the local product list with the newly added product after the operation successfully completes.

# LanguageSwitcher.vue Component

Maintains buttons to switch between languages.
Each button triggers a function (setLanguage(locale)) that updates the global state with the selected language.
n the main file, updates were made to load and display products based on the current language stored in the global state.
Imports useStore to access setLanguage, which updates the global state with the selected language.

# Other Changes Made

Code Review and Refinement: Reviewed and refined the codebase.
Enhanced Typing: Improved type safety and typings within the code.
