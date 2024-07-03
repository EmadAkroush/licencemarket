<template>
  <div>
    <div class="card">
      <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
          </a>
        </template>
        <template #end>
          {{ authUser }}
          <nuxt-link to="auth/login">
            <div class="flex items-center gap-2">login</div>
          </nuxt-link>
          <div class="flex items-center gap-2" >logout</div>
        </template>
      </Menubar>

    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const { authUser } = useAuth();


const router = useRouter();

const items = ref([
  {
    label: "Product",
    icon: "pi pi-palette",
    command: () => {
      router.push("/product");
    },
  },
  {
    label: "Aboutus",
    icon: "pi pi-link",
    command: () => {
      router.push("/about");
    },
  },
  {
    label: "Sender",
    icon: "pi pi-home",
    command: () => {
      router.push("/sender");
    },
  },
]);

</script>
