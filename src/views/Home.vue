<template>
    <div class="page">
        <div class="banner_box">
            <Nav></Nav>
            <Banner></Banner>
        </div>
    </div>
</template>

<script>
import Nav from './nav/Nav.vue'
import Banner from "./banner/Banner.vue"
export default {
  components: { Nav,Banner },

}
</script>

<style>

</style>