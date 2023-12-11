<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="maltHeader">
      <RouterLink to="..">
        <img src="./assets/img/geriOk.png" alt="" id="geriOk">
      </RouterLink>
      <RouterLink to="/">
        <img src="./assets/img/maltLogoPngArkaYok.png" alt="" id="maltHeaderLogo">
      </RouterLink>
      <div>
        <img style="opacity: 0%;" src="./assets/img/geriOk.png" alt="" id="geriOk">
      </div>
    </div>
  </header>
  <router-view />
</template>

<style>
.maltHeader {
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#maltHeaderLogo {
  width: 140px;
  height: 140px;
}

#geriOk {
  align-self: center;
}
</style>