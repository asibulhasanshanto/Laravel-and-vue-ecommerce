<template>
    <!-- form wrapper -->
    <div class="container py-16">
        <div
            class="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden"
        >
            <h2 class="text-2xl uppercase font-medium mb-6">LOGIN</h2>

            <form @submit.prevent="submit">
                <div class="space-y-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email Address <span class="text-primary">*</span>
                        </label>
                        <input
                            type="email"
                            class="input-box"
                            placeholder="example@mail.com"
                        />
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block"
                            >Password <span class="text-primary">*</span></label
                        >
                        <input
                            type="password"
                            class="input-box"
                            placeholder="type password"
                        />
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input
                            type="checkbox"
                            id="agreement"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                        />
                        <label
                            for="agreement"
                            class="text-gray-600 ml-3 cursor-pointer"
                        >
                            Remember Me
                        </label>
                    </div>
                    <a href="#" class="text-primary">Forgot Password?</a>
                </div>
                <div class="mt-4">
                    <button
                        type="submit"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p class="mt-4 text-gray-600 text-center">
                Don't have an account?
                <a href="register.html" class="text-primary">Register Now </a>
            </p>
        </div>
    </div>
    <!-- form wrapper end -->
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "Login",
    methods: {
        ...mapActions("authentication", ["login"]),
        async submit() {
            await this.login("test@test.com", "password");
        },
    },
};
</script>
