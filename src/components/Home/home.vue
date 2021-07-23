<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6" v-for="i in 4" :key="i">
                    <div class="row grey_bg">
                        <!-- image/screenshot here -->
                        <div class="col-md-4 img_holder">
                            <div>
                                <img src class="img-fluid" alt />
                            </div>
                            <div class>
                                <h3></h3>
                            </div>
                        </div> <!-- end div class col-md-4 img_holder -->
                        <!-- company details here -->
                        <div class="col-md-8">
                            <div class="details text-left">
                                <h4></h4>
                                <h5 class="pt-3">
                                    headquarters:
                                    <span></span>
                                </h5>
                                <h5 class="pt-3">
                                    industry:
                                    <span></span>
                                </h5>
                                <h5 class="pt-3">
                                    founded:
                                    <span></span>
                                </h5>
                                <div class="inline">
                                    <h5 class="pt-3">
                                        industry:
                                        <span></span>
                                    </h5>
                                    <router-link to="{name: 'About', params: { companyid: company.objectID},}">read more</router-link>
                                </div><!-- end div class inline -->
                            </div>
                        </div> 
                    </div><!-- end div class row grey_bg -->
                </div><!-- end div class col-md-6 -->
            </div><!-- end row div -->
        </div><!-- end container -->
    </div>
</template>

<script>
const axios = require('axios')
import VClamp from 'vue-clamp'

export default {
    components: {
        VClamp,
    },
    name: 'home',
    data() {
        return {
            secretKey: '$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC',/*usually do not put secrets on git*/
            companies: [],
        }
    },//end data()
    mounted() {
        this.getCompany()
    },
    methods: {
        async getCompany() {
            try{
                let response = await this.$http.get(
                    `https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275`,
                    {
                        headers: {
                            'secret-key': this.secretKey,
                        },
                    },
                )
                console.log(response.data)
                this.companies = response.data
            }catch (error){
                console.log("Oops! An error was found: ", error.response)
            }
        },
    },//end emthodds 
}

</script>


<style scoped>

.grey_bg {
    width: 100%;
    background: #a6a6a6;
    border: solid #000 0;
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
    -moz-box-shadow:  5px 0 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin-top: 20px;
}

h4{
    font-size: 20px;
}

h5 {
    font-size: 16px;
}

.pt-3 span {
    font-size: 14px;
    line-height: 22px;
}

a {
    text-decoration: none !important;
}

h3 {
    font-size: 22px;
    margin-top: 20px;
}

@media screen and (max-width: 578px) and (min-width: 275px) {
    h3{
        text-align: center;
        padding-top: 30px;
    }
    h5{
        text-align: center;
    }
    h4{
        text-align: center;
    }
}

@media screen and (max-width: 768px) and (min-width: 575px) {
    h3{
        text-align: left;
        padding-top: 30px;
    }
}
</style>