<template>
  <MdEditor v-model="state.text" 
  :disabled="state.disabled"
  :theme="state.theme" @onUploadImg="onUploadImg" @onSave="onSave" 
  class="edit"
  ref="editor"
  />
  <BToastOrchestrator />
</template>
<script setup>
import { reactive ,ref } from "vue";
import { useRoute } from 'vue-router'
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import http from "../request";
import { useToast } from 'bootstrap-vue-next';
const state = reactive({
  text: "# div1",
  theme: "github",
  disabled: false,
  catalog:true,
  title:'新增文档'
});
const editor = ref();

const route = useRoute()

let saveTips = { title: '保存中...', value: true, variant: 'success', pos: 'top-center' }
let saveTipsObj;

//提示
const { show, remove } = useToast();

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
  state.text = valueHtml;
  state.disabled = true;
  saveTipsObj = show({
    props: saveTips
  })
  
  setTimeout(() => {
    remove(saveTipsObj)
    state.disabled = false;
    saveTipsObj = null;
  }, 2000);
}

const init = () =>{
  var artcleId = route.params.id;
  if(artcleId){
    state.title = '编辑'
  }
  document.title = state.title
}

init()


</script>

<style>
  .edit{
    height: 80vh;
  }
</style>
