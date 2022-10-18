<template>
    <router-link
        v-for="navItem in navItems"
        :key="navItem.name"
        :to="{ name: navItem.linkName }"
        class="hover:bg-gray-100 lg:hover:bg-inherit lg:text-gray-200 lg:hover:text-white transition-all duration-300 block px-4 py-2 font-medium "
        >{{navItem.name}}</router-link
    >

    <div class="div"></div>
</template>
<script>
export default {
    name: "Navmenu",
    props: {
        navItems: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        // console.log(this.navItems);
    },
};
</script>
