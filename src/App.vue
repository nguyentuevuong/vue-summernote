<template>
  <div id="app" class="container px-3 py-3">
    <v-wysiwyg v-model="content" />
    <hr />
    <pre>{{content}}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public content: string = "<h2>Hello!</h2>";
}
</script>