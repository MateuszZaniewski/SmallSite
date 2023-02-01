<template>
  <div>
    <h1 v-for="element in item" :key="element">
        {{ element }}
    </h1>
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>

</style>