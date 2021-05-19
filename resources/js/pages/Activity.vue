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
                                    <label class="col-md-4 col-form-label text-md-right">Start Date</label>
                                    <div class="col-md-6">
                                        <VueDatePicker  class="form-control"
                                                       v-model="start_date"
                                                       format="YYYY-MM-DD"
                                                       required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="end_date" class="col-md-4 col-form-label text-md-right">End Date</label>

                                    <div class="col-md-6">
                                        <VueDatePicker  class="form-control"
                                                        v-model="end_date"
                                                        format="YYYY-MM-DD"
                                                        required />

                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Get All Data
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card-body">
                            {{all_data}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { VueDatePicker } from '@mathieustan/vue-datepicker';
    import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
    export default {
        name: "Activity",
        components : {
            VueDatePicker,
        },
        data(){
            return{
                date: new Date(),
                start_date:this.date,
                end_date:this.date,
                all_data:''
            }
        },
        methods:{
            getData(){
                axios.post('/api/get-data',{
                    start_date: this.start_date,
                    end_date:this.end_date
                }).then(response=>{
                    // this.result = response.data.result
                    // console.log(response.data)
                    this.all_data= response.data
                })
            },
        },
    }
</script>

<style scoped>

</style>
