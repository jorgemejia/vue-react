<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Lista de usuarios</h1>

       <div v-if="customers.length === 0">
            <h2> No se encontraron datos </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                  <td>{{ customer.firstName }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.phoneNumber }}</td>


                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'edit', params: {customer: customer}}" class="btn btn-sm btn-outline-secondary">Edit Customer </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCustomer(customer)">Delete Customer</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from "axios";
import { server } from "../../helper";
import router from "../../router/index";

@Component
export default class GuestViewAll extends Vue {

    public customers: any = {};

    created() {
        this.fetchCustomers();
    }

    public deleteCustomer(data): void {
        axios.delete(`${server.baseURL}guests/${data.id}`).then(data => {
            if(data.status === 200){
                this.fetchCustomers();
            }
      });
    }

    public fetchCustomers(): void{
        axios.get(`${server.baseURL}guests?limit=10&page=1`).then(data => {
        this.customers = data.data.data;
      });
    }
}

</script>