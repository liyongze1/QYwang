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
import Banner from '../views/banner/Banner.vue'
export default {
  components: { Nav,Banner },

}
</script>

<style>
.banner_box{
    height: 480px;
    position: relative;
}
</style>