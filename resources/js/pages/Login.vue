<template>

    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="card-header ">
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
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="card-header ">
                                <div class="card-body">
                                    <form method="POST"  @submit.prevent="register">


                                    <div class="form-group row">
                                        <label for="regname" class="col-md-4 col-form-label text-md-right">Name</label>

                                        <div class="col-md-6">
                                            <input id="regname" type="text" class="form-control " v-model="regForm.name" name="name"  required  autofocus>
                                            <div v-if="regForm.errors.has('name')" v-html="regForm.errors.get('name')" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div class="col-md-6">
                                            <input id="regemail" type="email" class="form-control " v-model="regForm.email" name="email"  required >
                                            <div v-if="regForm.errors.has('email')" v-html="regForm.errors.get('email')" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="regpassword" class="col-md-4 col-form-label text-md-right">Password</label>

                                        <div class="col-md-6">
                                            <input id="regpassword" type="password" class="form-control " v-model="regForm.password" name="password" required >
                                            <div v-if="regForm.errors.has('password')" v-html="regForm.errors.get('password')" />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from 'vform'
    export default {
        name: "Login.vue",
        data(){
            return{
                email:'',
                password:'',
                regForm: new Form({
                    name: '',
                    email: '',
                    password: ''
                })
            }
        },
        methods:{
            async login() {
                // console.log(this.email)
                await axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password
                    }).then(response => {
                        this.$toast.success({
                            title:'Success!',
                            message:'Login successful'
                        })
                        this.getUserData();
                        this.$router.push('dashboard')
                    })
                });
            },

            async register() {
                console.log(3)
                await this.regForm.post('/register').then(response =>{
                    this.regForm.name = '';
                    this.regForm.email = '';
                    this.regForm.password = '';
                    this.$toast.success({
                        title:'Success!',
                        message:'Operation successful'
                    })
                })
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
