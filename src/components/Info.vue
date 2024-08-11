<template>
  <div
    class="d-flex flex-column text-center align-items-center justify-content-center gap-2 border border-1 shadow-sm px-2 py-2 bg-body-tertiary rounded"
  >
    <img
      src="https://blog-demo.mereith.com/static/img/0f376e6c1cb2007cb48028f6ec554978.avatar.jpg"
      alt=""
      class="rounded-circle mt-4"
      style="width: 100px"
    />
    <span class="h6">WAXSQ</span>
    <span>最喜欢小傻子</span>
    <div class="d-flex flex-row gap-1">
      <div class="d-flex flex-column"><span>7</span><span>日志</span></div>
      <div class="d-flex flex-column"><span>7</span><span>日志</span></div>
      <div class="d-flex flex-column"><span>7</span><span>日志</span></div>
    </div>
    <div class="d-flex flex-row gap-3">
      <BiGithub></BiGithub>
      <CarbonEmail></CarbonEmail>
      <RiBilibiliLine></RiBilibiliLine>
      <HugeiconsWechat></HugeiconsWechat>
    </div>
  </div>
</template>
<script setup>
import BiGithub from "~icons/bi/github";
import CarbonEmail from "~icons/carbon/email";
import RiBilibiliLine from "~icons/ri/bilibili-line";
import HugeiconsWechat from "~icons/hugeicons/wechat";
</script>
