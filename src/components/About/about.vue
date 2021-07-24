<template>
    <div><!-- start first div -->
        <cnav></cnav>
        <div class="container px-0>">
            <div class="back">
                <router-link to="/">
                    <button class="btn btn-outline-info mb-3">
                        <i class="fa fa-arrow-left mx-2"></i>
                        back
                    </button>
                </router-link>
            </div><!-- end div class back -->
        </div><!-- end div class container px-0 -->
    </div><!--end first div -->
    <div>
        <section1></section1>
        <section2></section2>
    </div><!-- end second div -->
</template>

<script>

import section1 from "./section1";
import section2 from "./section2";
import cnav from "..//Partials/navbar";
export default {
    name: "about",
    components: {
        section1,
        section2,
        cnav,
    },
};

//auto added in Vue 3
/*
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
*/
</script>

<style scoped>
    .back {
        text-align: left;
    }
</style>
