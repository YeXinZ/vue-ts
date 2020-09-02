<!--
 * @Descripttion: 
 * @Author: Thea
 * @Date: 2020-09-01 11:23:39
 * @LastEditTime: 2020-09-01 17:34:04
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="scss">
</style>
