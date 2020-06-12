<template>
  <div v-html="value"></div>
</template>

<script lang="ts" src="./viewmodel.ts"></script>

<style lang="scss">
.note-editor {
  .dropdown-toggle {
    &:after {
      content: none;
    }
  }
}
</style>