<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">
        <nuxt-link to="/" class="logo__link">
          <img src="@/assets/img/logo.svg" alt="Логотип 'Медик Лилиана'" class="logo__img">
        </nuxt-link>
      </div>
      <Navbar />
    </aside>
    <content class="content">
      <nuxt/>
    </content>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  components: {
    Navbar
  }  
}
</script>

<style lang="scss">
* { margin: 0; padding: 0; }
html { font-family: 'Raleway', sans-serif; }
.layout {
  display: flex;
  .sidebar {
    background-color: #EA907A;
    width: 30vw;
    height: 100vh;
    z-index: 0;
    .logo {
      width: 35vw;
      padding-left: 20%;
      padding-top: 10%;
      &__img {
        width: 100%;
      }
    }
  }
  .content {
    display: flex;
    background-color: #FBC687;
    width: 70vw;
  }
}
</style>

