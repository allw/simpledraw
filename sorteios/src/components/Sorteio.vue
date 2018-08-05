<template>
  <div class="sorteio">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
        Sorteios
        {{ number }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sorteio',
  data() {
    return {
      number: 12
    }
  }
}
</script>

<style scoped>
</style>