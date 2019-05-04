<template lang="pug">
    #post
        b-container.mt-5.mb-5
            b-row(align-v="center").h-100
                b-col(cols="6").text-left
                    h2.mt-4.mb-1.font-weight-bold {{ allPosts[$route.params.id].title }}
                    p.text-muted {{ allPosts[$route.params.id].message }}
                    hr
                    p.text-muted.text-justify {{ allPosts[$route.params.id].description }}
                    hr
                    div.text-right
                        b-btn(to="/blog", size="sm", variant="link") Back to Blog

                b-col.text-right(cols="6")
                    b-img.shadow(
                        :src="require('../assets/'+ allPosts[$route.params.id].img +'.jpg')",
                        rounded
                    )
</template>

<script lang="ts">
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "post",
        methods: {
            ...mapActions(["fetchPosts"]),
        },
        computed: mapGetters(["allPosts"]),
        created() {
            this.fetchPosts();
        },
        components: {
        }
    };
</script>
<style scoped lang="scss">
    #post{
        img{
            width: 100%;
        }
    };
</style>

