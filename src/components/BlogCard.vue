<template lang="pug">
#blog_card(v-bind:class="{ vertical: isVertical }", :style="{'background-image': 'url(' + require('../assets/'+ imageSrc +'.jpg') + ')'}" )
    .viniet
    .bottom
        h6.font-weight-bold(v-if="msg") {{ msg }}
        router-link(:to="{ name: 'post', params: { id: id }}")
            h3.font-weight-bold {{ title }}
    span.tag(v-if="tag")
        b-btn(variant="primary") {{ tag }}
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class BlogCard extends Vue {
        @Prop() private id!: string;
        @Prop() private msg!: string;
        @Prop() private title!: string;
        @Prop() private imageSrc!: string;
        @Prop() private tag?: string;
        @Prop() private isVertical?: boolean;
    }
</script>
<style scoped lang="scss">
    #blog_card{
        height: 300px;
        width: 100%;
        background-size: cover;
        position: relative;
        border-radius: 1rem;
        &.vertical{
            height: 450px;
        }
        .viniet{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            background: rgba(0,0,0,0.15);
            border-radius: 1rem;
        }
        .bottom{
            position: absolute;
            bottom: 25px;
            left: 20px;
            h6, h3 {
                color: #fff;
                text-align: left;
            }
            a{
                &:hover,
                &:focus{
                    text-decoration: none;
                }
            }
        }
        .tag{
            position: absolute;
            top: 20px;
            right: 20px;
            color: #fff;
        }
    };
</style>

