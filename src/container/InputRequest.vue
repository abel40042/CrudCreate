
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
          <BtnPlus class="btnPlus" @click="addSkillsValue"/>
          <input type="text" class="skillsInput" placeholder="skills" v-model="nouvelleValeur">
        <div class="skillsGet">
          <span v-for="element in listeElement" :key="element.id">
            <div class="skillsCont">
              <div class="skills">
                <p>{{ element.valeur }}</p>
              </div>
              <div class="delete">
                <img src="../img/delete.png" alt="" @click="supprimerElement(element.id)">
              </div>
            </div>
          </span>
        </div>
            
      </div>
          <input id="input" type="text" placeholder="Experiences Title" v-model="form.expTitle">
          <input type="text" id="expDescr" placeholder="Experiences Description" v-model="form.expDesc">
          <div class="expDateAdd">
            <input id="input" type="text" placeholder="Experiences Date" v-model="newExpDate">
            <span v-for="elem in listExpDate" :key="elem.id">
            <div class="expDateCont">
              <div class="expDate">
                <p>{{ elem.valeur }} </p>
              </div>
              <div class="delete" >
                <img src="../img/delete.png" alt="" @click="supprimElemDate(elem.id)">
              </div>
            </div>
            </span>
          </div>
      </div>
      <div class="plusBtnInfo">
        <BtnPlus class="btnPlusInfo" @click="addExpDates"/>
      </div>
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
          expDate: [],
        },
        data: jsonData,
        nouvelleValeur: "",
        listeElement: [],
        newExpDate: "",
        listExpDate: [],
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
        
        
      },
      addSkillsValue() {
        const nouvelId = Date.now().toString()
        this.listeElement.push({ id: nouvelId, valeur: this.nouvelleValeur })
        this.form.skills.push(this.nouvelleValeur);
        this.nouvelleValeur = "";
      },

      supprimerElement(idElement) {
      const indexElement = this.listeElement.findIndex(element => element.id === idElement)
      this.listeElement.splice(indexElement, 1)
    },

    addExpDates() {
        const newDates = Date.now().toString()
        this.listExpDate.push({ id: newDates, valeur: this.newExpDate })
        this.form.expDate.push(this.newExpDate);
        this.newExpDate = " ";
      },
      supprimElemDate(idElem) {
        const indexElem = this.listExpDate.findIndex(elem => elem.id === idElem)
        this.listExpDate.splice(indexElem, 1)
      }
      
    },
    mounted() {
      this.fetchData();
    },
  }
  </script>

<style lang="scss" scoped>
   .inputBar {
    width: 348px;
    padding: 0;
    text-align: left;
    h3 {
      font-size: 20px;              
      font-weight: 600;
      margin: 0;
      margin-inline-start: 20px;
    }
    strong {
      font-size: 14px;
    }
   }
   .inputCase {
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   input {
    width: 286px;
    height: 23px;
    margin-block: 15px;
    border: grey solid 1px;
    padding: 10px;
   }
   .selectionSkills{
    position: relative;
    margin-block: 15px;
    width: 308px;
  }
  .skillsInput {
    margin: 0 0 10px;
  }

   .btnPlus {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
   }
   .inputBar .plusBtnInfo {
    width: 308px;
    height: 23px;
    align-self: center;
    position: relative;
    display: flex;
    margin-inline: auto;
   }
   .btnPlusInfo {
    position: absolute;
    right: 0;
  }
   .submit {
    margin: 45px 0 35px;
   }

   .skillsGet {
    
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   .skillsCont {
    width: 286px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
   }
   .skills {
    width: 234px;
    height: 25px;
    background-color: #DDE3EB;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 0 10px;
    padding-inline: 10px;
    p {
      font-size: 14px;
    }
   }
   .delete {
    margin-inline-start: 15px;
    position: absolute;
    right: 10px;
    top: 10px;
}

  .expDateCont {
    display: flex;
    flex-direction: row;
    width: 296px;
    height: 73px;
    background-color: #DDE3EB;
    padding: 5px 15px 0;
    margin: 5px 0 5px;
    position: relative;
  }
</style>  
