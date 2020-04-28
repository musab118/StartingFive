<template>
  <div id="custom-home">
    <HelloWorld />
  </div>
</template>

<script>
  // points to the hello world vue file
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>