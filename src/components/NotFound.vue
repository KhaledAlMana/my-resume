<template>
<div class="not-found">
    <img :src="`${icons.test}`">
    <h1>Page Not Found </h1>    
</div>
</template>
<script lang="js">
// import { mdiHelpRhombusOutline } from "@mdi/js";
var notFoundIcon = require("../assets/helpers/imgs/not-found.png");    

export default {
    name: "NotFound",
    data(){
        return { icons:{ test: notFoundIcon } };
    }
}
</script>

<style lang="scss" scoped>

.not-found {
    text-align: center;
    h1 {
        color : black;
    }
    .v-icon{
        color: darkgreen;
    }
}
</style>

