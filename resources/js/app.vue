<template>
    <div class="test">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Login' }">Login</router-link>
        <router-link :to="{ name: 'Registration' }">Registration</router-link>
    </div>
    <div class="">
        <router-view></router-view>
    </div>
</template>


