<template>
    <div>
        <video autoplay></video>
        <img src="">
        <div id="screenshot">Capture Video</div>
        <div id="screenshot-button" class="capture">Shot</div>
        <canvas style="display:none;"></canvas>
    </div>
</template>

<script>

    import axios from 'axios'

    function handleError(error) {
        console.error('Error: ', error);
    }

    function handleSuccess(stream) {
        screenshotButton.disabled = false;
        video.srcObject = stream;
    }
    export default {
        name: "CaptureImage",
        props:['url'],
        mounted() {
            let captureVideoButton =
                document.querySelector('#screenshot');
            let screenshotButton = document.querySelector('.capture');
            const img = document.querySelector('img');
            const video = document.querySelector('video');
            const constraints = {
                video: true
            };

            navigator.mediaDevices.getUserMedia(constraints).
            then((stream) => {video.srcObject = stream});

            const canvas = document.createElement('canvas');

            captureVideoButton.onclick = function() {

                navigator.mediaDevices.getUserMedia(constraints).
                then(handleSuccess).catch(handleError);
            };
            if(screenshotButton){

                screenshotButton.onclick = video.onclick = function() {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d').drawImage(video, 0, 0);
                    // Other browsers will fall back to image/png
                    img.src = canvas.toDataURL('image/webp');

                    canvas.toBlob((blb)=>{
                        const data = new FormData()
                        data.append('image', blb)
                        let config = {
                            header : {
                                'Content-Type' : 'multipart/form-data'
                            }
                        }
                        axios.post(`http://localhost:3000/upload`, data, config).then(response => {
                            console.log('response', response)
                        }).catch(error => {
                            console.log('error', error)
                        })
                        /*fetch(`http://localhost:3000/upload`, {
                            method:"POST", mode:'no-cors', body:data,headers: { 'Content-Type' : 'multipart/form-data'}})
                            .then(response => console.log(response.text()))*/
                    })
                };
            } else {
                let screenshotButton = document.querySelector('#screenshot-button .capture');

                screenshotButton.onclick = video.onclick = function() {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    //canvas.getContext('2d').drawImage(video, 0, 0);
                    // Other browsers will fall back to image/png
                    img.src = canvas.toDataURL('image/webp');
                    canvas.toBlob((blb)=>{
                        const data = new FormData()
                        data.append('image', blb)

                        let config = {
                            header : {
                                'Content-Type' : 'multipart/form-data'
                            }
                        }
                        console.log(config)

                        fetch(`http://localhost:3000/upload`, {method:"PUT", mode:'no-cors', body:data,headers: { 'Content-Type' : 'multipart/form-data'}})
                            .then(response => console.log(response.text()))
                    })

                };
            }

        }
    }
</script>

<style scoped>

</style>