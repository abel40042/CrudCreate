<template>
  <div id="infoUpdate" v-if="selectedUser">
    <p>{{ selectedUser.firstname }} Firstname</p>
    <p>{{ selectedUser.lastname }} Lastname</p>
    <p>{{ selectedUser.email }} Email</p>
  </div>
</template>

<script>
import mitt from 'mitt';
const emitter = mitt();
export default {
  name: "InfoUpdate",
  data() {
    return {
      selectedUser: null,
    };
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

<style lang="scss" scoped>
  #infoUpdate{
    width: 500px;
    height: 100vh;
    background-color: grey;
  }
</style>500px