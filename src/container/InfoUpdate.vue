<template>
        <div id="infoUpdate">
          <span>{{ firstname }}Firstname</span>
          <span>{{ lastname }} Lastname</span>
          <span>{{ email }} Email</span>
        </div>
</template>
<script>

export default {
  name: "InfoUpdate",
};
</script>
<style lang="scss" scoped>
  #infoUpdate{
    width: 500px;
    height: 100vh;
    background-color: grey;
  }
</style>