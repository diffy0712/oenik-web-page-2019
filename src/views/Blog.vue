<template lang="pug">
    #blog
        b-container.h-100
            b-row(align-v="center").mb-5
                b-col(cols="6" offset="3").text-center
                    h1.mt-5.mb-2.font-weight-bold Blog
                    p.text-muted
                        | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when type specimen book.
            b-row.mb-5
                b-col(cols="8")
                    blog-card(title="A guide to Forest Vacations", imageSrc="blog_01", msg="Destinations", tag="Featured", id="1")
                b-col(cols="4")
                    blog-card(title="Travelling to USA", imageSrc="blog_02", msg="Destinations", id="2")
            b-row.mb-5
                b-col(cols="4")
                    blog-card(title="Party Jokes Startling but unnecessary", imageSrc="blog_03", msg="Destinations", tag="Starring", isVertical="true", id="3")
                b-col(cols="4")
                    blog-card(title="Maui By Air The Best Way Around The Island", imageSrc="blog_04", msg="Destinations", isVertical="true", id="4")
                b-col(cols="4")
                    blog-card(title="Travelling To Barcelona", imageSrc="blog_05", msg="Destinations", isVertical="true", id="5")


</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import FooterBar from '@/components/FooterBar.vue';
    import BlogCard from '@/components/BlogCard.vue';

    @Component({
        components: {
            BlogCard,
            FooterBar,
        },
    })
    export default class Blog extends Vue {}
</script>
<style scoped lang="scss">
    #blog{
    };
</style>

