<template>
    <Header></Header>

    <Navbar></Navbar>
    <!-- other pages via route -->
    <router-view></router-view>

    <!-- footer -->
    <Footer></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Navbar,
    },
};
</script>
