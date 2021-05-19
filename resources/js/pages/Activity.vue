<template>
    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">My Info</div>
                        <div class="card-body">
                            <form method="POST" @submit.prevent="getData" >
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Start Date</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control datepicker " name="name"  v-model="start_date" required  >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">End Date</label>

                                    <div class="col-md-6">
                                        <input id="text" type="text" class="form-control datepicker"  v-model="end_date" required >

                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Khoj
                                        </button>
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
        name: "Activity",
        data(){
            return{
                start_date:'',
                end_date:''
            }
        },
        methods:{
            getData(){
                axios.post('/api/do-something',{
                    start_date: this.start_date,
                    end_date:this.end_date
                }).then(response=>{
                    // this.result = response.data.result
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>
