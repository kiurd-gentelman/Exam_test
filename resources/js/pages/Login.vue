<template>

    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form method="POST" @submit.prevent="login">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="email" required autocomplete="email" autofocus>


                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control " v-model="password" name="password" required autocomplete="current-password">

                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" >

                                        <label class="form-check-label" for="remember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" onC>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue",
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            login(){
                // console.log(this.email)
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/login',{
                        email: this.email,
                        password:this.password
                    }).then(response=>{
                        this.getUserData();
                        this.$router.push('dashboard')
                    })
                });
            },
            getUserData(){
                axios.get('/api/user').then(response =>{
                    console.log(response.data)
                    // this.$store.commit('SET_USER' , response.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
