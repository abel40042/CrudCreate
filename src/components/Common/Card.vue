<template>
  <div id="card" @click="handleClick">
    
    <div class="card__avatarProfil" >
      <figure>  
        <img :src="image" alt=""/>
      </figure>
     <div class="nameSemail">
      <h3>{{jsonData.firstname}} {{jsonData.lastname}}</h3>
      <h3 class="emailTextContaint">{{ jsonData.email }}</h3>
     </div>
    </div>
    <div class="card__devProfil">
      <img src="../../img/Frame-2.png" alt="">
      <h3>{{ jsonData.role }}</h3>
    </div>
    <div class="card__devProfil">
      <img src="../../img/Frame-1.png" alt="">
      <h3>{{ jsonData.age }}</h3>
    </div>
    <div class="card__devProfil" >
      <img src="../../img/Frame.png" alt="">
      <div v-for="(list,index) in jsonData.skills" :key="index">
        <span><h3>{{ list }}</h3></span>
      </div>
      
    </div>
  
  </div>
</template>

<script>
import {emitter} from '@/main';

export default {
  name: "CardUser",
  props: {
    jsonData:{
      type: Object,
      required: true
    },
    
  },

  methods: {
    handleClick() {
      emitter.emit('user-clicked', this.jsonData);
      console.log(this.jsonData)
    },
},
};
</script>

<style lang="scss" scoped>
#card {
  color: black;
  box-shadow: 0 0 2px 2px rgba(#000, 0.2);
  width: 227px;
  height: 200px;
  padding: 18px 19px;
  cursor: pointer;
  h3{
    font-weight: normal;
    font-size: 14px;
  }
}
.card__avatarProfil{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  figure{
    margin: 0;

    img{
      background-color: grey;
      width: 45px;
      height: 45px;
      border-radius: 50%;
  }

  }
}
.nameSemail{
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  text-align: left;
  justify-content: space-between;
  height: 45px;
  h3{
    font-weight: normal;
    font-size: 14px;
    margin-left: 0;
    margin: 0;
  } 
  .emailTextContaint{
    font-size: 14px;
    font-weight: normal;
    color: gray;
    margin: 0;
  }
}
.card__devProfil{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  img{
    width: 24px;
    height: 24px;
  }
}


</style>
