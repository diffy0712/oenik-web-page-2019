<template lang="pug">
    div
        footer
            b-container
                hr
                b-row.mb-5.mt-4(align-v="center")
                    b-col.text-left.text-muted
                        | 2019 Mitravel
                    b-col.text-right
                        b-btn(to="terms_of_service", variant="link") Terms Of Service
                        b-btn(to="privacy_policy", variant="link") Privacy Policy
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class FooterBar extends Vue {
    }
</script>

<style scoped lang="scss">

</style>
