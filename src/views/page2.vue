<template>
    <div>
        2
    </div>
</template>

<script>
export default {
    methods:{
        getData(){
            $.ajax({
                type:"get",
                url:"https://www.ifsvc.cn",
                success:function (res) {
                    console.log(res)
                },
                error:function (err) {
                    console.log(err)
                }
            })
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style>

</style>
