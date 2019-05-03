<template lang="pug">
  #home
    b-container.h-100(class="bv-example-row bv-example-row-flex-cols")
      b-row.h-100(align-v="center")
        b-col(cols="5").text-left
          h1.mb-4.font-weight-bold Mother earth hosts our travels
          p.mb-4.text-muted The state of Utah in the United Stated is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
          b-btn(size="lg", variant="primary") Learn More
        b-col
          b-row(align-v="end")
            b-col.text-right.p-0.pr-2.pb-2(cols="6")
              b-img.shadow(
                src="../assets/cliff.jpg",
                v-bind:width="imageProps.width * imageProps.first_multiplier",
                v-bind:height="imageProps.height * imageProps.first_multiplier",
                rounded
              )
            b-col.text-left.p-0.pl-2.pb-2(cols="6")
                b-img.shadow(
                    src="../assets/lake.jpg",
                    v-bind:width="imageProps.width * imageProps.second_multiplier",
                    v-bind:height="imageProps.height * imageProps.second_multiplier",
                    rounded
                )
          b-row(align-v="start")
            b-col.text-right.p-0.pr-2.pt-2(cols="6")
                b-img.shadow(
                    src="../assets/ice.jpg",
                    v-bind:width="imageProps.width * imageProps.third_multiplier",
                    v-bind:height="imageProps.height * imageProps.third_multiplier",
                    rounded
                )
            b-col.text-left.p-0.pl-2.pt-2(cols="6")
                b-img.shadow(
                    src="../assets/cliff_1.jpg",
                    v-bind:width="imageProps.width * imageProps.fourth_multiplier",
                    v-bind:height="imageProps.height * imageProps.fourth_multiplier",
                    rounded
                )
</template>

<script>
  export default {
    data() {
      return {
          imageProps: {
              width: 200,
              height: 200,
              first_multiplier: 0.9,
              second_multiplier: 1.8,
              third_multiplier: 1.1,
              fourth_multiplier: 0.7,
          },
      };
    },
  };
</script>
<style scoped lang="scss">
#home{
  height: calc(100vh - 83px);
};
</style>
