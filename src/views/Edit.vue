<template>
  <MdEditor
    v-model="articleEntity.wActContent"
    :disabled="state.disabled"
    :theme="state.theme"
    @onUploadImg="onUploadImg"
    @onSave="onSave"
    class="edit"
    ref="editor"
  />
  <BToastOrchestrator />
</template>
<script setup>
import { reactive, ref, onMounted, toRaw } from "vue";
import { useRoute } from "vue-router";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import http from "../request";
import { useToast } from "bootstrap-vue-next";
const state = reactive({
  text: "# div1",
  theme: "github",
  disabled: false,
  catalog: true,
  title: "新增文档",
});
const articleEntity = reactive({
  wActId: "",
  wActTitle: "",
  wActContent: "",
  wAcrDesc: "",
});
const editor = ref();

const route = useRoute();
//提示
const { show, remove } = useToast();

let saveTips = {
  title: "保存中...",
  value: true,
  variant: "success",
  pos: "top-center",
};
let saveTipsObj;

onMounted(() => {
  var artcleId = route.params.id;
  loadingData(artcleId);
});

const loadingData = (artId = "0") => {
  if (artId) {
    http.get(`article/one?id=${artId}`).then((res) => {
      articleEntity.wActId = res.wActId;
      articleEntity.wActTitle = res.wActTitle;
      articleEntity.wActContent = res.wActContent;
      articleEntity.wAcrDesc = res.wAcrDesc;
    });
  }
};

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

//文档保存
const onSave = (valueHtml, previewHtml) => {
  articleEntity.wActContent = valueHtml;
  state.disabled = true;
  saveTipsObj = show({
    props: saveTips,
  });
  var data = toRaw(articleEntity);
  http
    .post("article/addOrUpdate", data)
    .then((res) => {
      articleEntity.wActId = res.wActId;
      articleEntity.wActTitle = res.wActTitle;
      articleEntity.wActContent = res.wActContent;
      articleEntity.wAcrDesc = res.wAcrDesc;
    })
    .then(() => {
      remove(saveTipsObj);
      state.disabled = false;
      saveTipsObj = null;
    });
};
</script>

<style>
.edit {
  height: 80vh;
}
</style>
