<template lang="pug">
    div
        b-navbar.py-4(toggleable='lg' type='light' variant='transparent')
            b-collapse#nav-collapse(is-nav='')
                b-container
                    b-row
                        b-col
                            b-navbar-nav
                                b-nav-item(href='#')
                                    font-awesome-icon(:icon="['fab', 'facebook-f']",  class="icon alt")
                                b-nav-item(href='#')
                                    font-awesome-icon(:icon="['fab', 'instagram']",  class="icon alt")
                                b-nav-item(href='#')
                                    font-awesome-icon(:icon="['fab', 'twitter']",  class="icon alt")
                        b-col
                            b-navbar-brand.ml-auto.font-weight-bold(to='/') MITRAVEL
                        b-col
                            b-navbar-nav.ml-auto(align='right')
                                b-nav-item(to='about')
                                    | ABOUT
                                b-nav-item(to='blog')
                                    | BLOG

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
