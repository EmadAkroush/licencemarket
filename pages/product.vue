<template>
  <div class="container md:px-16 md:py-16 xl:px-16 xl:py-16 px-4 py-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-4">
      <div v-for="(item, index) in 10" >
        <Card>
          <template #title>Simple Card</template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
        </Card>
      </div>
    
    </div>
  </div>
</template>
<script>
definePageMeta({
  middleware: "auth",
});
export default {};
</script>
