<template>
  <div class="mx-auto">
    <div class="d-flex align-items-start justify-content-center">
      <div id="home-root" class="w-100 flex-grow-1 flex-shrink-1">
        <RouterView name="homeInfo"></RouterView>
      </div>
      <div id="home-right" class="mx-3 flex-grow-0 flex-shrink-0 d-lg-block d-none">
        <!-- <Info></Info> -->
        <RouterView name="rightInfo"></RouterView>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
@media (min-width: 1280px) {
  #home-root {
    max-width: 60rem;
  }
}

@media (min-width: 768px) {
  #home-root {
    max-width: 50rem;
  }
}

#home-right {
  min-width: 12rem;
}
</style>
