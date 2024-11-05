<script lang="ts">
import {defineComponent} from 'vue';
import config, {n8nConf} from './devConfig'
import ChatWidget from "../../src/components/ChatWidget.vue"
// import {ChatWidget} from "@mgvts/chat-widget";

import '@mgvts/chat-widget/dist/style.css'
export default defineComponent({
  name: 'App',
  components: {ChatWidget},
  data() {
    return {
      config: n8nConf
    }
  }
});
</script>

<template>
  <div id="app" style="background: coral; height: 100vh">
    <ChatWidget :config="config" class="override-props">
    </ChatWidget>
  </div>
</template>


<style scoped>
#app {
  padding: 20px;
}

.override-props {
  --chat-header-height: 85px;
}
</style>