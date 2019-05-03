<template lang="pug">
  #home
    b-container
      b-row(align-v="center")
        b-col
          h1 | Mother earth hosts our travels
          p | The state of Utah in the United Stated is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
          b-btn(size="lg", variant="primary") Learn More
        b-col
          b-img(src="https://picsum.photos/1024/400/?image=41", fluid, alt="Responsive image")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>
