<template>
  <div>
    <div
      class="mt-48 flex justify-center items-center h-full justify-items-center content-center flex-col"
    >
      <div class="flex flex-col">
        <p>number</p>
        <InputText class="mt-2" type="text " v-model="Number" />
        <p class="mt-4">password</p>
        <Password class="mt-2" v-model="Pass" toggleMask />

        <Button label="Submit" class="mt-5" @click="login" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { authUser } = useAuth();
const Number = ref(null)
const Pass = ref(null)


 async function login() {
 
// let datavalid = await form.value.items[0].isValid

try {
        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { Number: Number.value }
        })
        authUser.value = Number.value
        
        // setCookie('cookie', Number.value )
        navigateTo('/product')
        
    
} catch (error) {
    // errors.value = Object.values(error.data.data.message).flat();
    navigateTo('/product')

} finally {
}

}
</script>
