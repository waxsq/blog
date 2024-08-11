<template>
  <BNavbar
    :class="topsrcoll ? 'top' : ''"
    toggleable="lg"
    class="bg-body-tertiary shadow px-2 text-body-emphasis mb-4"
    fixed="top"
    v-b-color-mode="currentColor"
    sticky="top"
  >
    <BNavbarBrand href="/">WAXSQ</BNavbarBrand>
    <BNavbarToggle @click="clickShowNav" />
    <!-- 完全展开 -->
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#">Link</BNavItem>
        <BNavItem href="#" disabled>Disabled</BNavItem>
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0 px-2">
        <BNavItemDropdown text="Lang" right>
          <BDropdownItem href="#">EN</BDropdownItem>
          <BDropdownItem href="#">ES</BDropdownItem>
          <BDropdownItem href="#">RU</BDropdownItem>
          <BDropdownItem href="#">FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <BDropdownItem href="#">Profile</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <TwemojiSmilingFaceWithSunglasses
              v-if="currentColor == 'light'"
            ></TwemojiSmilingFaceWithSunglasses>
            <TwemojiFullMoon v-if="currentColor == 'dark'"></TwemojiFullMoon>
          </template>
          <BDropdownItemButton buttonClass="w-3" @click="changeColor('light')">
            <div class="d-flex justify-content-center align-items-center">
              <TwemojiSmilingFaceWithSunglasses></TwemojiSmilingFaceWithSunglasses>
              <span class="px-1">light</span>
            </div>
          </BDropdownItemButton>
          <BDropdownItemButton buttonClass="w-3" @click="changeColor('dark')">
            <div class="d-flex justify-content-center align-items-center">
              <TwemojiFullMoon></TwemojiFullMoon>
              <span class="px-1">dark</span>
            </div>
          </BDropdownItemButton>
        </BNavItemDropdown>
      </BNavbarNav>
    </BCollapse>

    <!-- 小页面导航栏 -->
    <BOffcanvas v-model="showNav" />
  </BNavbar>
</template>

<script setup>
import EmojioneSun from "~icons/emojione/sun";
import TwemojiSmilingFaceWithSunglasses from "~icons/twemoji/smiling-face-with-sunglasses";
import EmojioneV1FullMoon from "~icons/emojione-v1/full-moon";
import TwemojiFullMoon from "~icons/twemoji/full-moon";
import { ref, onMounted, watch } from "vue";
import { vBColorMode } from "bootstrap-vue-next";
const showNav = ref(false);
const currentColor = ref("light");

//导航栏主题
const changeColor = (value) => {
  currentColor.value = value;
};
//处理导航栏事件
let scrollTop = ref("");
let topsrcoll = ref(false); //上移样式
let topage = () => {};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

watch(scrollTop, (newVal, oldVal) => {
  console.log(newVal, oldVal);
  if (newVal > 100) {
    if (newVal > oldVal) {
      topsrcoll.value = true;
      // console.log('下滑');
    } else {
      topsrcoll.value = false;
      // console.log('上滑');
    }
  }
});

const clickShowNav = () => {
  showNav.value = !showNav.value;
};

let handleScroll = () => {
  //返回文档在垂直方向已滚动的像素值。
  //获取或设置一个元素的内容垂直滚动的像素数
  //获取或设置一个元素的内容垂直滚动的像素数
  scrollTop.value =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
};
</script>

<style lang="css">
.top {
  transform: translateY(-90px);
}
</style>
