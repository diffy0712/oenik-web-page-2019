<template lang="pug">
    #post
        | {{ $route.params.id }}

</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Post extends Vue {
        @Prop() private msg!: string;
        @Prop() private title!: string;
        @Prop() private imageSrc!: string;
        @Prop() private tag?: string;
        public data() {
            return {
            };
        }
    }
</script>
<style scoped lang="scss">
    #post{

    };
</style>

