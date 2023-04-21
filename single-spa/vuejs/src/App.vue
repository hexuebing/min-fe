<template>
  <div id="app">
    <Parcel :config="parcelConfig" :mountParcel="mountParcel" />
    <div>
      <router-link to="/foo">foo</router-link>
      <router-link to="/bar">bar</router-link>
    </div>
    <router-view></router-view>
    <button @click="clickHandler">click me</button>
  </div>
</template>

<script>
import Parcel from "single-spa-vue/parcel";
import { mountRootParcel } from "single-spa";

export default {
  name: "App",
  components: {
    Parcel,
  },
  data() {
    return {
      parcelConfig: window.System.import("@study/navbar"),
      mountParcel: mountRootParcel,
    };
  },
  methods: {
    async clickHandler() {
      const toolsModule = await window.System.import("@study/tools");
      toolsModule.publicApiFunction("vuejs");
    },
  },
  async mounted() {
    const toolsModule = await window.System.import("@study/tools");
    toolsModule.sharedSubject.subscribe(console.log);
  },
};
</script>
