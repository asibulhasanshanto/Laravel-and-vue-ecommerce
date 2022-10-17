# Ecommerce (laravel and vue)

A simple ecommerce project using laravel and vue

## Laravel9 and Vue3 installation

1. ```bash
   laravel new ecommerce
   ```
2. ```bash
   npm install vue@next vue-loader@next
   ```
3. ```bash
   npm install
   ```
4. Create app.vue and create a vue app in app.js

    -   1. **_app.js_** file will look like this

        ```javascript
        import "./bootstrap";

        import { createApp } from "vue";
        import app from "./layouts/app.vue";

        createApp(app).mount("#app");
        ```

    -   2. **_app.vue_** file will look like this
        ```html
        <template>
            <div id="app">
                <h1>hello world</h1>
            </div>
        </template>
        ```
    -   3. the body section on **_welcome.blade.php_** file will look like this

        ```html
        <body>
            <div id="app"></div>

            @vite('resources/js/app.js')
        </body>
        ```

5. install vitejs vue plugin and add it to the vite.config.js

    ```bash
    npm install @vitejs/plugin-vue
    ```

    ```javascript
    import { defineConfig } from "vite";
    import laravel from "laravel-vite-plugin";
    import vue from "@vitejs/plugin-vue";
    export default defineConfig({
        plugins: [
            vue(),
            laravel({
                input: ["resources/css/app.css", "resources/js/app.js"],
                refresh: true,
            }),
        ],
    });
    ```

6. run `npm run dev` and `php artisan serve` to see the result
