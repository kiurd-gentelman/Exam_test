<template>
    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">My Info</div>
                        <div class="card-body">
                            <form method="POST" @submit.prevent="doWork" >
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Input value</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control " name="name"  v-model="inputValue" required  >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">Search value</label>

                                    <div class="col-md-6">
                                        <input id="email" type="text" class="form-control" name="email"  v-model="searchValue" required >

                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Khoj
                                        </button>
                                    </div>
                                </div>



                                <div class="form-group row mt-5">
                                    <label for="result" class="col-md-4 col-form-label text-md-right">Search value</label>

                                    <div class="col-md-6">
                                        <input id="result" type="email" class="form-control" name="result"  v-model="result" disabled>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                inputValue:'',
                searchValue:'',
                result:'nothing'
            }
        },
        methods:{
            doWork(){
                axios.post('/api/do-something',{
                    inputValue: this.inputValue,
                    searchValue:this.searchValue
                }).then(response=>{
                    this.result = response.data.result
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>
