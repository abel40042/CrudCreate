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
    <button type="submit">{{ textContaintSubmit }}</button>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transition: 0.3s all;
  cursor: pointer;
  button{
      background-color: #2444B5;
      padding: 15px 30px;
      color: white;
      font-size: 14px;
  }
}

</style>
