<script>
export default {
  name: "BtnPlus",

};
</script>

<template>
  <div class="btn">
    +
  </div>
</template>

<style lang="scss" scoped>
.btn {
  color: white;
  width: 45px;
  height: 45px;
  background-color: #2444B5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transition: 0.3s all;
  cursor: pointer;
}
.btn:hover{
  background-color: #2756fe;
  color: rgb(202, 214, 255);
}
</style>
