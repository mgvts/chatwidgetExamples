<script lang="ts">
import {defineComponent} from 'vue';
import {config} from './devConfig'
import {ChatWidget} from "@mgvts/chat-widget";

import '@mgvts/chat-widget/dist/style.css'
export default defineComponent({
  name: 'App',
  components: {ChatWidget},
  data() {
    return {
      config
    }
  }
});
</script>

<template>
  <div
    id="app"
    style="background: coral; height: 100vh"
  >
    <ChatWidget
      :config="config"
      class="override-props"
    />
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