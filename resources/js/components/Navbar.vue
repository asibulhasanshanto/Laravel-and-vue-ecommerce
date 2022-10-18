<template>
    <!-- navbar -->
    <nav class="bg-gray-800 sticky top-0 z-50 hidden lg:block">
        <div class="container">
            <div class="flex">
                <Categories></Categories>
                <!-- nav menu -->
                <div class="flex items-center justify-between flex-grow pl-12">
                    <div
                        class="flex items-center space-x-6 text-base capitalize"
                    >
                        <Navmenu></Navmenu>
                    </div>
                    <router-link
                        class="ml-auto justify-self-end text-gray-200 hover:text-white transition"
                        :to="{ name: 'Login' }"
                        >Login</router-link
                    >
                </div>
                <!-- nav menu end -->
            </div>
        </div>
    </nav>
    <!-- navbar end -->

    <!-- mobile menubar -->
    <div
        class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40"
    >
        <a
            href="javascript:void(0)"
            @click="toggleMenu"
            class="block text-center text-gray-700 hover:text-primary transition relative"
        >
            <div class="text-2xl" id="menuBar">
                <i class="fas fa-bars"></i>
            </div>
            <div class="text-xs leading-3">Menu</div>
        </a>
        <a
            href="#"
            class="block text-center text-gray-700 hover:text-primary transition relative"
        >
            <div class="text-2xl">
                <i class="fas fa-list-ul"></i>
            </div>
            <div class="text-xs leading-3">Category</div>
        </a>
        <a
            href="#"
            class="block text-center text-gray-700 hover:text-primary transition relative"
        >
            <div class="text-2xl">
                <i class="fas fa-search"></i>
            </div>
            <div class="text-xs leading-3">Search</div>
        </a>
        <a
            href="cart.html"
            class="text-center text-gray-700 hover:text-primary transition relative"
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
    </div>
    <!-- mobile menu end -->

    <!-- mobile sidebar menu -->
    <div
        v-if="mobileSidebar"
        class="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow"
        id="mobileMenu"
    >
        <div class="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
            <div
                @click="toggleMenu"
                id="closeMenu"
                class="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
            >
                <i class="fas fa-times"></i>
            </div>
            <!-- navlink -->
            <h3
                class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4"
            >
                Menu
            </h3>
            <div class="flex flex-col justify-between h-full">
                <div class="link_holder">
                    <Navmenu></Navmenu>
                </div>
                <div class="login_holder flex items-start">
                    <router-link
                        class="mb-20 ml-6 text-white bg-primary px-4 py-2 rounded-md flex items-center justify-center font-bold hover:border hover:border-primary hover:bg-white hover:text-primary transition"
                        :to="{ name: 'Login' }"
                        >Login</router-link
                    >
                </div>
            </div>

            <!-- navlinks end -->
        </div>
    </div>
    <!-- mobile sidebar menu end -->
</template>

<script>
import Categories from "./Categories.vue";
import Navmenu from "./Navmenu.vue";
export default {
    name: "Navbar",
    data() {
        return {
            mobileSidebar: false,
            NavItems: [
                {
                    name: "Home",
                    linkName: "Home",
                },
                {
                    name: "Shop",
                    linkName: "Home",
                },
                {
                    name: "About",
                    linkName: "Home",
                },
                {
                    name: "Contact",
                    linkName: "Home",
                },
            ],
        };
    },
    methods: {
        toggleMenu() {
            // console.log("toggle menu");
            this.mobileSidebar = !this.mobileSidebar;
        },
        resetWindow() {
            this.mobileSidebar = false;
        },
    },
    components: {
        Categories,
        Navmenu,
    },
    mounted() {
        window.addEventListener("resize", this.resetWindow);
    },
    unmounted() {
        window.removeEventListener("resize", this.resetWindow);
    },
};
</script>
