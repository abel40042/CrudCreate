<template>
    <div class="inputBar">
        <h3>User info</h3>
        <form @submit.prevent="submitForm">
            <div class="inputCase">
            <input id="name" type="text" placeholder="Firstname" v-model="form.firstname">
            <input id="input" type="text" placeholder="Lastname" v-model="form.lastname">
            <input id="input" type="email" placeholder="Email" v-model="form.email">
            <input id="input" type="text" placeholder="Age" v-model="form.age">
            <input id="input" type="text" placeholder="Role" v-model="form.role">
        <div class="selectionSkills">
            <BtnPlus class="btnPlus"/>
            <select name="language" id="skills" placeholder="Skills">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JS</option>
                <option value="c">C</option>
                <option value="c++">C++</option>
            </select>   
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
        console.log(formData);
      },
      async fetchData() {
        const response = await fetch('http://localhost:3000/users');
        const jsonData = await response.json();
        this.data = jsonData;
      }
    },
    mounted() {
      this.fetchData();
    },
  }
  </script>
  
<style lang="scss" scoped>
    #skills{
        width: 286px;
        height: 45px;
        background: none;
        border:#9A9A9A 1px solid;
    }
    #expDescr{
        width: 286px;
        height: 150px;
        margin-block: 25px;
        background: white;
        color: black;
    }
    .inputBar{
        color: black;
        width: 348px;
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: white;
        padding: 30px;
        padding-top: 15px;
        h3{
            font-size: 20px;
            margin: 0 0 10px;
        }
        .btnPlusInfo{
            align-self: end;
        }
        

        .selectionSkills{
            position: relative;
            margin-block: 25px;
            select{
                color: black;
            }
            .btnPlus{
            color: white;
            position: absolute;
            z-index: 0;
            right: 0;
            }
        }
        .submit{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-block: 45px;
        }
    }
    input{
            width: 286px;
            height: 35px;
            margin-block: 15px;
            border:#9A9A9A 1px solid;
            background: none;
            color: black;
        }
    #input:nth-child(1){
        margin: 0;
        margin-bottom: 25px;
    }
</style>