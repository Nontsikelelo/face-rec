<template>
    <div>
        <WebCam
                ref="webcam"
                :deviceId="deviceId"
                width="auto"
                height="100%"
                @cameras="onCameras"
                @camera-change="onCameraChange"
                :isFrontCam="frontCam"
                :googleKey="googleKey"
        >
        </WebCam>
    </div>
</template>

<script>
    import { WebCam } from 'vue-cam-vision'
    export default {
        name: "Attendance",
        components: {
            WebCam
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
            }
        }
    }
</script>

<style scoped>

</style>