<script>


export default {
  name: "BtnSubmit",
  props: {
    textContaintSubmit: {
      type: String,
      required: true,
    }
  }

};
</script>

<template>
  <div class="btn">
    <a href="/">{{ textContaintSubmit }}</a>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  color: white;
  background-color: #2444B5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transition: 0.3s all;
  cursor: pointer;
  a{
      background-color: #2444B5;
      padding: 15px 30px;
      color: white;
      font-size: 14px;
  }
}
.btn:hover{
  background-color: #2756fe;
  color: rgb(202, 214, 255);
}
</style>
