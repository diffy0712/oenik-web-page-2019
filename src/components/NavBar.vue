<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="transparent">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-container>
                        <b-row>
                            <b-col >
                                <b-navbar-nav>
                                    <b-nav-item href="#"><font-awesome-icon icon="user-secret"></font-awesome-icon></b-nav-item>
                                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                                </b-navbar-nav>
                            </b-col>
                            <b-col >
                                <b-navbar-brand class="ml-auto" href="#">NavBar</b-navbar-brand>
                            </b-col>
                            <b-col >
                                <b-navbar-nav class="ml-auto" align="right">

                                    <b-nav-item-dropdown>
                                        <!-- Using 'button-content' slot -->
                                        <template slot="button-content"><em>User</em></template>
                                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                                    </b-nav-item-dropdown>
                                </b-navbar-nav>
                            </b-col>
                        </b-row>

                    </b-container>
                </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class NavBar extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style scoped lang="scss">

</style>
