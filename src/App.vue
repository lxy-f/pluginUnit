<template>
  <div
    id="app"
    style="display: flex"
  >
    <div class="tabList">
      <SideNav />
    </div>
    <router-view />
  </div>
</template>
<script>
import SideNav from './components/SideNav'

export default {
  components: {SideNav},
}
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #F5F8FC;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.tabList {
  height: 100vh;
  background: #001529;
}
</style>
