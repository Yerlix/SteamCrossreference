<template>
    <div class="tab-pane fade show active" id="nav-compare" role="tabpanel" aria-labelledby="nav-compare-tab">
        <header>
            <div class="row">
                <div class="col">
                    <h3>Compare Steam Libraries</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <form>
                        <div class="form-row">
                            <div class="col-2">

                            </div>
                            <div class="col-8">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">#</div>
                                    </div>
                                    <input type="text" class="form-control" id="steamid" placeholder="Username or Steam-ID" v-model="inputSteamId" >
                                </div>
                            </div>
                            <div class="col-2">
                                <button type="submit" class="btn btn-primary" v-on:click="add">Add to the Grid</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="list-compare list-group">
                        <compare-list-item v-for="account in accounts" v-bind:model="account"></compare-list-item>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container-fluid">

            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
    import CompareListItem from "./compare/Item.vue"

    export default Vue.extend({
        props: [],
        data() {
            return {
                steamaccounts: string[],
                inputSteamId: ""
            }
        },
        methods: {
            add() {
                this.steamaccounts.push(this.inputSteamId);
            }
        },
        computed: {
            accounts() {
                for (let i = 0, l = this.steamaccounts.length; i < l; i++) {

                }
            }
        },
        components: {
            CompareListItem
        }
    });
</script>