<template>
    <div>
        <Header></Header>
        <MyInfo></MyInfo>



    </div>
</template>

<script>
    import Header from '../components/Header';
    import MyInfo from '../components/MyInfo';

    export default {
        name: "Dashboard.vue",
        components:{
            Header,MyInfo
        },
    }
</script>

<style scoped>

</style>
