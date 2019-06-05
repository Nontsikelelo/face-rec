<template>
    <div>
 <capture-image></capture-image>
    </div>
</template>

<script>
   import CaptureImage from "./CaptureImage";
    export default {
        name: "Attendance",
        components: {
            CaptureImage
        },
        data () {
            return {
                photo: null
            };
        },
        methods:{
            started(a){
              console.log('started',a)
            },
            stopped(a){
                console.log('started',a)
            },
            error(a){
                console.log('started',a)
            },
            take_photo(a){
                console.log(a)
            }
        }
    }
</script>

<style scoped>

</style>