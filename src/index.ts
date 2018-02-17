import 'bootstrap';
import Vue from "vue";

import SteamCompare from "./components/Compare.vue"
import SteamDiscover from "./components/Discover.vue"
import SteamExport from "./components/Export.vue"

const app = new Vue({
    el: "body#app",
    components: {
        SteamCompare,
        SteamDiscover,
        SteamExport
    },
});