<template>
    <nav class="navigation">
        <nuxt-link class="navigation__item" to="/">Home</nuxt-link>
        <nuxt-link class="navigation__item" to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link class="navigation__item" to="/about">About us/Contacts</nuxt-link>
    </nav>
</template>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    padding-right: 55px;
    padding-top: 75px;
}
.navigation__item {
    text-decoration: none;
    text-align: right;
    color: #F4F7C5;
    font-size: 26px;
    margin: 5px 0;
}
</style>