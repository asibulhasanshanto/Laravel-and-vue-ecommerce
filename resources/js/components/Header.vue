<template>
    <!-- header -->
    <header class="py-4 shadow-sm bg-blue-100 lg:bg-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <a href="#" class="block w-32">
                <!-- <img
                    src="{{asset('images/logo.svg')}}"
                    alt="logo"
                    class="w-full"
                /> -->
                <h3>Logo</h3>
            </a>
            <!-- logo end -->

            <!-- searchbar -->
            <div class="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <i class="fas fa-search"></i>
                </span>
                <input
                    type="text"
                    class="pl-12 w-full border border-r-0 border-primary focus:outline-primary py-3 px-3 rounded-l-md focus:border-primary transition-all duration-300"
                    placeholder="search"
                />
                <button
                    type="submit"
                    class="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
                >
                    Search
                </button>
            </div>
            <!-- searchbar end -->

            <!-- navicons -->
            <div class="space-x-4 flex items-center">
                <a
                    href="wishlist.html"
                    class="block text-center text-gray-700 hover:text-primary transition relative"
                >
                    <span
                        class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
                        >5</span
                    >
                    <div class="text-2xl">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="text-xs leading-3">Wish List</div>
                </a>
                <a
                    href="cart.html"
                    class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative"
                >
                    <span
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
                        >3</span
                    >
                    <div class="text-2xl">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                </a>
                <a
                    v-if="isAuthenticated"
                    href="account.html"
                    class="block text-center text-gray-700 hover:text-primary transition"
                >
                    <div class="text-2xl">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="text-xs leading-3">Account</div>
                </a>
            </div>
            <!-- navicons end -->
        </div>
    </header>
    <!-- header end -->
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters("authentication", ["isAuthenticated"]),
    },
};
</script>
