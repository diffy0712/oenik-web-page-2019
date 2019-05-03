<template lang="pug">
    div
        b-navbar(toggleable='lg' type='light' variant='transparent')
            b-navbar-toggle(target='nav-collapse')
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
                            b-navbar-brand.ml-auto(href='#') MITRAVEL
                        b-col
                            b-navbar-nav.ml-auto(align='right')
                                b-nav-item(href='#')
                                    | About Me
                                b-nav-item(href='#')
                                    | Blog

</template>

<script lang="ts">

</script>

<style scoped lang="scss">

</style>
