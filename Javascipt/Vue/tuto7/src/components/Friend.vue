<template>
  <div>
    <h1>Friend</h1>
    {{id}}
    {{age}}
    {{weight}}
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'age',
    'weight'
  ]
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>

