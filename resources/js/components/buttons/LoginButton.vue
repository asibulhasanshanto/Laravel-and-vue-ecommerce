<template>
    <router-link
        v-if="type != 'mobile'"
        class="ml-auto justify-self-end text-gray-200 hover:text-white transition"
        :to="{ name: 'Login' }"
        >Login</router-link
    >
    <div v-if="type == 'mobile'" class="login_holder flex items-start">
        <router-link
            class="mb-20 ml-6 text-white bg-primary px-4 py-2 rounded-md flex items-center justify-center font-bold hover:border hover:border-primary hover:bg-white hover:text-primary transition"
            :to="{ name: 'Login' }"
            >Login</router-link
        >
    </div>
</template>

<script>
export default {
    name: "LoginButton",
    props: {
        type: {
            type: String,
            default: "button",
        },
    },
};
</script>
