<template>
  <div class="mx-auto">
    <div class="d-flex align-items-start justify-content-center">
      <div
        id="home-root"
        class="w-100 border border-1 shadow p-3 bg-body-tertiary rounded flex-grow-1 flex-shrink-1"
      >
        <div class="position-relative mb-5">
          <p class="position-absolute start-50 h4"><BLink to="/detail/1">公告</BLink></p>
          <RouterLink
            to="/edit/1"
            class="position-absolute end-0 fw-lighter text-black-50"
            style="text-decoration: none"
            >编辑</RouterLink
          >
        </div>
        <!-- 文章信息 -->
        <div class="gap-3 d-flex justify-content-center">
          <div class="fw-lighter gap-1 d-flex align-items-center">
            <MynauiEditOne></MynauiEditOne>
            <span>2022-09-11</span>
          </div>
          <div class="fw-lighter gap-1 d-flex align-items-center">
            <HugeiconsFile02></HugeiconsFile02>
            <span>公告</span>
          </div>
          <div class="fw-lighter gap-1 d-flex align-items-center">
            <MynauiMessage></MynauiMessage>
            <span>122</span>
          </div>
        </div>
      </div>
      <div
        id="home-right"
        class="mx-3 flex-grow-0 flex-shrink-0 d-lg-block d-none"
      >
        <Info></Info>
      </div>
    </div>
  </div>
</template>
<script setup>
import MynauiEditOne from "~icons/mynaui/edit-one";
import HugeiconsFile02 from "~icons/hugeicons/file-02";
import MynauiMessage from "~icons/mynaui/message";
import { RouterLink } from "vue-router";
import Info from "../components/Info.vue";
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
