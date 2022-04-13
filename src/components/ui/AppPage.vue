<template>
  <div class="card">
      <h1 class="card-title">
        {{title}}
        <slot name="header"/>
      </h1>
      <slot/>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        document.title = `${props.title} | Клон Банка`
    }

}
</script>

<style>

</style>