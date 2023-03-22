<style lang="scss" scoped>
   .inputBar {
    width: 348px;
    padding: 0;
    text-align: left;
    h3 {
      font-size: 20px;
      font-weight: 600;
    }
   }
   .inputCase {
    display: flex;
    flex-direction: column;
   }
   input {
    width: 286px;
    height: 23px;
    margin-block: 15px;
    border: blue solid 1px;
    padding: 10px;
   }
   .selectionSkills{
    position: relative;
    margin-block: 15px;
    width: 308px;
  }
  .skillsInput {
    margin: 0;
  }

   .btnPlus {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
   }
   .btnPlusInfo {
    float: right;
   }
   .submit {
    margin: 45px 0 35px;
   }
</style>
<template>
    <div class="inputBar">
        <h3>User info</h3>
        <form @submit.prevent="submitForm">
            <div class="inputCase">
            <input  type="text" placeholder="Firstname" v-model="form.firstname">
            <input  type="text" placeholder="Lastname" v-model="form.lastname">
            <input  type="email" placeholder="Email" v-model="form.email">
            <input  type="text" placeholder="Age" v-model="form.age">
            <input  type="text" placeholder="Role" v-model="form.role">
        <div class="selectionSkills">
            <BtnPlus class="btnPlus"/>
            <input type="text" class="skillsInput" placeholder="skills" v-model="form.skills">
        </div>
            <input id="input" type="text" placeholder="Experiences Title" v-model="form.expTitle">
            <input type="text" id="expDescr" placeholder="Experiences Description" v-model="form.expDesc">
            <input id="input" type="text" placeholder="Experiences Date" v-model="form.expDate">
        </div>
        <BtnPlus class="btnPlusInfo"/>
        <div class="submit">
            <BtnSubmit textContaintSubmit="Add user info"/>
        </div>
        </form>

    </div>
</template>

  
  <script>
  import BtnPlus from "../components/Common/btn+.vue"
  import BtnSubmit from "../components/Common/BtnSubmit.vue";
  import jsonData from '../dataBase/dataBase.json'
  
  export default {
    name: "InputRequest",
    components: {
      BtnPlus,
      BtnSubmit,
    },
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          email: '',
          role: '',
          skills: [],
          expTitle: '',
          expDesc: '',
          expDate: '',
        },
        data: jsonData
      }
    },
    methods: {
      async submitForm() {
        const formData = JSON.stringify(this.form);
        await this.postData(formData)
        console.log(formData);
      },
      async fetchData() {
        const response = await fetch('http://localhost:3000/users');
        const jsonData = await response.json();
        this.data = jsonData;
      },
      async postData(data) {
        const postResponse = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
        console.log(postResponse)
      }
    },
    mounted() {
      this.fetchData();
    },
  }
  </script>
  
