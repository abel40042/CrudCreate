<template>
  <div id="infoUpdate" v-if="selectedUser">
    <div class="closeBtn" @click="closedrawer">
      <img src="../img/Frameclose.png" alt="">
    </div>
    <div class="card__avatarProfil" >
      <figure>  
        <img :src="image" alt=""/>
      </figure>
     <div class="nameSemail">
      <h3>{{selectedUser.firstname}} {{selectedUser.lastname}}</h3>
      <h3 class="emailTextContaint">{{ selectedUser.email }}</h3>
     </div>
    </div>
    <div class="card__devProfil">
      <img src="../img/Frame-2.png" alt="">
      <h3>{{ selectedUser.role }}</h3>
    </div>
    <div class="card__devProfil">
      <img src="../img/Frame-1.png" alt="">
      <h3>{{ selectedUser.age }}</h3>
    </div>
    <div class="card__devProfil" >
      <img src="../img/Frame.png" alt="">
      <div v-for="(skill, index) in selectedUser.skills" :key="index">
        <span><h3>{{ skill }}</h3></span>
      </div>
    </div>
    <div class="exp">
      <div class="ligne">
        <img src="../img/ligneGris.png">
        <div class="ligneVerticale"></div>
      </div>
      <div class="textExp">
        <h3>{{ selectedUser.expDate }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // MOVE AFTER
  .exp {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    .ligne {
      display: flex;
      margin-left: 12px;
      gap: 5px;
      flex-direction: column;
      justify-content: center;
      background-color: red;
      .ligneVerticale {
      width: 1px;
      height: 117px;
      background-color: #9A9A9A;
      margin: auto;
    }
    }
    .textExp {
      margin-left: 13px;
      display: flex;
      flex-direction: column;
    }
    
  }





  #infoUpdate{
    width: 591px;
    height: 100%;
    padding: 30px 45px 0;
    border-left: grey solid 2px;
    box-shadow: -6 8px 0px 0px black;
    h3{
    font-weight: bold;
    font-size: 14px;
      position: relative;
      margin: 0;
  }
  }
  .closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .card__avatarProfil{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20 0 30px;
  figure{
    align-self: center;
    margin: 0;
    display: flex;
    align-items: center;
    img{
      background-color: grey;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      align-self: center;
  }

  }
}
.nameSemail{
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  text-align: left;
  justify-content: space-between;
  margin: 0;
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
    margin-inline:5px ;
  }
}
</style>

<script>
import { emitter } from '../main';

export default {
  name: "InfoUpdate",
  data() {
    return {
      selectedUser: null,

    };
  },
  methods: {
    closedrawer() {
      const element = document.getElementById('infoUpdate')
      element.remove()
    }
  },
  mounted() {
  // Ajoutez un écouteur d'événements avec la nouvelle API
  emitter.on("user-clicked", (userData) => {
    this.selectedUser = userData;
  });
},
beforeUnmount() {
  // Supprimez l'écouteur d'événements avant la destruction du composant
  emitter.off("user-clicked", null, this);
},
};
</script>
