<template>
  <!-- Simple header with scrollable tabs. -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Stations</span>
    </div>
    <!-- Tabs -->
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect" v-show="currentRoute === 'stations'">
      <a href="#introduction" class="mdl-layout__tab is-active">Intro</a>
      <a href="#scroll-tab-1" class="mdl-layout__tab">Tab 1</a>
      <a href="#scroll-tab-2" class="mdl-layout__tab">Tab 2</a>
      <a href="#scroll-tab-3" class="mdl-layout__tab">Tab 3</a>
      <a href="#scroll-tab-4" class="mdl-layout__tab">Tab 4</a>
      <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>
      <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Stations</span>
    <nav class="mdl-navigation">
      <router-link :to="{name: 'home'}" class="mdl-navigation__link" @click.native="hideMenu">Home</router-link>
      <router-link :to="{name: 'stations'}" class="mdl-navigation__link" @click.native="hideMenu">Stations</router-link>
      <router-link :to="{name: 'about'}" class="mdl-navigation__link" @click.native="hideMenu">About</router-link>
     
    </nav>
  </div>
  <main class="mdl-layout__content">
    <router-view></router-view>
  </main>
</div>

</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  data () {
    return {
      current: ''
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    }
  },
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'stations') {
        document.querySelector('div.mdl-layout__tab-bar-container').style.display = 'block'
      } else {
        document.querySelector('div.mdl-layout__tab-bar-container').style.display = 'none'
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url("https://code.getmdl.io/1.3.0/material.purple-deep_purple.min.css");
body {
  margin: 0;
}
.mdl-card {
  width: 100%;
}
.text-left {
  text-align: left;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav-btn {
  float: right;
}
main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
