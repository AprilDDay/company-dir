<template>
    <div>
        <div class="body">
            <div class="container px-0">
                <div class="row">
                    <!-- more card details here -->
                    <div class="col-md-7 white_bg">
                        <h4>about us</h4>
                        <div class="about mt-4">
                            <p>{{ companies ? companies.Long_description : 'Not available ' }}</p>
                        </div><!-- end div class about mt-4 -->
                    </div><!-- end class col-md-7 white_bg -->
                </div><!-- end class row -->
            </div><!-- end container px-0 -->
        </div><!-- end class body -->
    </div>
</template>

<script>
    const axios = require("axios")
    export default {
        name: "",
        data(){
            return{
                secretKey: "$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC",
                companies: null,
                router: this.$route.params.companyid,
            };
        },
        mounted(){
            this.getCompany();
        },
        methods: {
            async getCompany(){
                try{
                    let response = await this.$http.get(
                        `https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275`,
                        {
                            headers: {
                                  "secret-key": this.secretKey,
                            }, 
                        },
                    );
                }catch(error){
                    console.log("Oops! There was an error:", error.response);
                }
            },
        },
    };
</script>

<style scoped>
    .body {
        background: #f6f8f8;
        height: 100%;
    }

    .white_bg {
        background: white;
        border: 2px solid white;
        width: 100%;
        box-shadow: 0 0.75rem 6rem rgba(56, 65, 74, 0.03);
        margin-bottom: 24px;
        border-radius: 0.25rem;
        padding: 2rem;
        margin-top: 20px;
    }

    .about p {
        text-align: left;
        font-size: 14px;
        line-height: 25px;
    }
</style>