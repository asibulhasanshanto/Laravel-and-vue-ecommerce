import { createStore, createLogger } from "vuex";
import authentication from "./modules/authentication";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
    modules: {
        authentication,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
