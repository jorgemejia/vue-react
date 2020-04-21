<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Customers </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit Customer </h2>
          <form id="create-post-form" @submit.prevent="editCustomer">
            <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="myModel.firstName" name="title" class="form-control" placeholder="Enter firstname" />
               </div>
             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="myModel.email" name="title" class="form-control" placeholder="Enter email"/>
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Phone </label>
                <input type="text" id="phone_number" v-model="myModel.phoneNumber" name="title" class="form-control" placeholder="Enter Phone number"/>
            </div>

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit Customer </button>
              </div>           
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from "axios";
import { server } from "../../helper";
import router from "../../router/index";


@Component
export default class GuestEdit extends Vue {

public myModel =   {
               "first_name" : "",
               "email": "",
               "phone_number": "",
               "id": ""
    };

  created() {
    //this.customer = this.$route.params;
    this.myModel["firstName"] = this.$route.params.customer.firstName;
    this.myModel["email"] = this.$route.params.customer.email;
    this.myModel["phoneNumber"] = this.$route.params.customer.phoneNumber;
    this.myModel["id"] = this.$route.params.customer.id;

    console.log(this.$route.params);
  }

  public navigate(): void {
      console.log("im here");
      router.push({ name: "view" });
  }

  public editCustomer(): void {
      axios.patch(`${server.baseURL}guests/${this.myModel.id}`, this.myModel).then(data => {
        console.log("response from server", data);
        if(data.status === 200){
            alert('Datos guardados con éxito');
            router.push({ name: "view" });
        }
        
      });
  }

}
</script>