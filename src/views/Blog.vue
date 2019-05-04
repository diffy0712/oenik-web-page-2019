<template lang="pug">
    #blog
        b-container.h-100
            b-row(align-v="center").mb-5
                b-col(cols="6" offset="3").text-center
                    h1.mt-5.mb-2.font-weight-bold Blog
                    p.text-muted
                        | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when type specimen book.
            b-row
                b-col(v-for='post in allPosts' :key='post.id', :cols="post.col").mb-5
                    blog-card(:id="post.id", :title="post.title", :msg="post.msg", :imageSrc="post.img", :isVertical="post.isVertical", :tag="post.tag")
</template>

<script lang="ts">
    import BlogCard from '@/components/BlogCard.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "blog",
        methods: {
            ...mapActions(["fetchPosts"]),
        },
        computed: mapGetters(["allPosts"]),
        created() {
            this.fetchPosts();
        },
        components: {
            BlogCard
        }
    };
</script>

<style scoped lang="scss">
    #blog{
    };
</style>

