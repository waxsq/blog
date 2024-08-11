<template>
  <MdEditor
    v-model="state.text"
    :theme="state.theme"
    @onUploadImg="onUploadImg"
  />
</template>
<script setup>
import { reactive } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import http from "../request";
const state = reactive({
  text: "",
  theme: "github",
});

//文件上传配置
const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append("file", file);
        http
          .post("/file/uploadImg", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            rev(res);
          })
          .catch((error) => {
            rej(error);
          });
      });
    })
  );
  //回调方法
  callback(
    res.map((item) => {
      return {
        url: "https://localhost:7216" + item.wUrl,
        title: item.wName,
      };
    })
  );
};
</script>
