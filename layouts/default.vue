

<template>
    <div>
        <div class="container mx-auto ">
            <Header></Header>

            <div>
                <slot/>
            </div>
        </div>
    </div>

</template>

<script>
import Header from '../components/layout/Header.vue';

export default {
    components: {
        // Register the component
        Header
    },
}
</script>