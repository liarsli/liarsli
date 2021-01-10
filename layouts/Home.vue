<template>
  <div class="layout">
    <div class="logo" v-if="show">
        <nuxt-link to="/" class="logo__link">
            <img src="@/assets/img/logo.svg" alt="Логотип 'Медик Лилиана'" class="logo__img">
        </nuxt-link>
    </div>
    <transition name="fade">
        <nuxt-link to="/portfolio" class="link">View Portfolio</nuxt-link>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
        margin-top: -50px;
        width: 20%;
        img { width: 100%; }
    }
    .link {
        margin-top: 30px;
        padding: 10px 20px;
        text-decoration: none;
        color: #fff;
        background-color: #EA907A;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>