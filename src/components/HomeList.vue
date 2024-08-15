<template>
    <div class="border border-1 shadow p-3 bg-body-tertiary rounded">
        <div class="position-relative mb-5">
            <p class="position-absolute start-50 h4">
                <BLink to="/detail/1">公告</BLink>
            </p>
            <RouterLink to="/edit/1" class="position-absolute end-0 fw-lighter text-black-50"
                style="text-decoration: none">
                编辑</RouterLink>
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

</template>
<script setup>
import MynauiEditOne from "~icons/mynaui/edit-one";
import HugeiconsFile02 from "~icons/hugeicons/file-02";
import MynauiMessage from "~icons/mynaui/message";
import { RouterLink } from "vue-router";
</script>