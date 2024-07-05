<template>
  <div class="container md:px-16 md:py-16 xl:px-16 xl:py-16 px-4 py-4">
    <div class="card">
      <DataTable
        v-model:filters="filters"
        v-model:selection="selectedCustomer"
        :value="customers"
        stateStorage="session"
        stateKey="dt-state-demo-session"
        paginator
        :rows="5"
        filterDisplay="menu"
        selectionMode="single"
        dataKey="id"
        :globalFilterFields="[
          'productname',
          'price',

         
        ]"
        tableStyle="min-width: 50rem"
      >
        <template #header>
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Global Search"
            />
          </IconField>
        </template>
        <Column field="productname" header="productname" sortable style="width: 25%">
          <template #filter="{ filterModel }">
            <InputText
              v-model="filterModel.value"
              type="text"
              placeholder="Search by name"
            />
          </template>
        </Column>
        <Column
          header="price"
          sortable
          sortField="price"
          filterField="price"
          filterMatchMode="contains"
          style="width: 25%"
        >
          <template #body="{ data }">
            <div class="flex items-center gap-2">
        
              <span>{{ data.price }}</span>
            </div>
          </template>
          <template #filter="{ filterModel }">
            <InputText
              v-model="filterModel.value"
              type="text"
              placeholder="Search by country"
            />
          </template>
        </Column>
     
        <template #empty> No customers found. </template>
      </DataTable>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

const customers = ref([
    { "id": 1, "productname": "John Doe", "price": "1000" },
    { "id": 2, "productname": "Jane Smith", "price": "2000" },
    { "id": 3, "productname": "Sam Johnson", "price": "3000" },
    { "id": 4, "productname": "Nancy Brown", "price": "2000" },
    { "id": 5, "productname": "John Doe", "price": "1000" },
    { "id": 6, "productname": "Jane Smith", "price": "4000" },
    { "id": 7, "productname": "Sam Johnson", "price": "1000" },
    { "id": 8, "productname": "Nancy Brown", "price": "1000" },
    { "id": 9, "productname": "John Doe", "price": "3000" },
    { "id": 10, "productname": "Jane Smith", "price": "4000" },
    { "id": 11, "productname": "Sam Johnson", "price": "5000" },
    { "id": 12, "productname": "Nancy Brown", "price": "4000" },

]);
const selectedCustomer = ref();
const filters = ref(
    {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    }
);
</script>
