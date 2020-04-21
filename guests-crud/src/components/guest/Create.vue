<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create User </h2>
          <form 
            id="app"
            @submit.prevent="submitForm"
            method="post"
          >
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="myModel.first_name" name="title" class="form-control" placeholder="Enter firstname" />
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="myModel.email" name="title" class="form-control" placeholder="Enter email"/>
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Phone </label>
                <input type="text" id="phone_number" v-model="myModel.phone_number" name="title" class="form-control" placeholder="Enter Phone number"/>
            </div>
            <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Customer </button>
            </div>           
          </form>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";
import server from "../../helper/index" 
import router from "../../router/index";

@Component
export default class GuestCreate extends Vue {
  
    public myModel =  {
               "first_name" : "",
               "email": "",
               "phone_number": ""
    }

    public submitForm(): void {

    const payload = {
        "firstName":this.myModel.first_name,
        "phoneNumber": this.myModel.phone_number,
        "email":this.myModel.email
    }

    axios.post(`${server.baseURL}guests`, payload).then(data => {
        console.log("response from server", data);
        if(data.status === 201){
            alert('Datos guardados con éxito');
            router.push({ name: "view" });
        }
      });
    
        
    }
    
}
</script>