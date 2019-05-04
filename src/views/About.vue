<template lang="pug">
  #about
    b-container.h-100
      b-row(align-v="center")
        b-col(cols="6").text-left
          h1.mt-4.mb-4 About
          p.text-muted
            | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          p.text-muted
            | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          h2.mt-4.mb-4 Contacts
          b-row(align-v="center")
            b-col(cols="6")
              p.text-muted
                b-btn(src="mailto:info@mitravel.com", variant="link")
                  font-awesome-icon(:icon="['fas', 'envelope']",  class="icon alt").mr-2
                  | info@mitravel.com
              p.text-muted
                b-btn(src="https://facebook.com/mitravel", variant="link")
                  font-awesome-icon(:icon="['fab', 'facebook-f']",  class="icon alt").mr-2
                  | facebook.com/mitravel
            b-col(cols="6")
              p.text-muted
                b-btn(src="https://instagram.com/mitravel", variant="link")
                  font-awesome-icon(:icon="['fab', 'instagram']",  class="icon alt").mr-2
                  | instagram.com/mitravel
              p.text-muted
                b-btn(src="https://twitter.com/mitravel", variant="link")
                  font-awesome-icon(:icon="['fab', 'twitter']",  class="icon alt").mr-2
                  | twitter.com/twitter

        b-col.text-right(cols="6")
          b-img.shadow(
            src="../assets/about_2.jpg",
            v-bind:width="imageProps.width",
            rounded
          )
          b-img.shadow.about-image-overlapped(
            src="../assets/about.jpg",
            v-bind:width="imageProps.width2",
            rounded
          )

</template>

<script>
  export default {
    data() {
      return {
        imageProps: {
          width: 500,
          width2: 200,
        },
      };
    },
  };
</script>
<style scoped lang="scss">
  #about{
    margin-top: 5rem;
    margin-bottom: 10rem;
    .about-image-overlapped{
      position: absolute;
      bottom: -50px;
      left: 0;
    }
  };
</style>

