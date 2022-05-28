<template>
    <div class="m-2">
        <b-row>
            <b-col cols="12" sm="6">
                <b-card>
                    <b-card-title class="text-center">Prediction result</b-card-title>
                    <apexChart type="bar" :options="options" :series="[{name:'value',data:detail.scoreClass}]" class="mb-4"></apexChart>
                    <h4 class="mb-4">This post expresses emotions</h4>
                    <div class="d-flex text-center mb-4">
                        <div class="block block-emotion" v-for="(item,index) in detail.classPredict" :key="index">
                            <img :src="'../reaction-icon/'+item+'.svg'" :alt="item">
                            <p class="text-in-block">{{ item }}</p>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col cols="12" sm="6">
                <b-card>
                    <h4>Emotion</h4>
                    <div class="d-flex text-center mb-4">
                        <div class="block">
                            <p style="margin:0.5rem !important" class="text-in-block">{{ detail.emotion }}</p>
                        </div>
                    </div>
                    <b-card>
                        <p>{{ detail.text }}</p>
                    </b-card>
                    <p class="text-muted mb-4">Predicted on: {{ detail.startPredict | moment('MMMM DD, YYYY [at] h:mm:ss a') }}</p>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'detailPrediction',
    data (){
        return {
            detail: {
                text: 'content of post...',
                emotion: 'Generally wholesome post',
                classPredict: ['like','love'],
                scoreClass: [45, 50, 49, 60, 70, 91],
                startPredict: Date.now(),
            },
            options: {
                chart: {
                    id: 'detail-predict'
                },
                colors: ['#0d6efd','#d63384','#ffc107','#fd7e14','#0dcaf0','#dc3545'],
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
                        distributed: true,
                    }
                },
                fill: {
                    opacity: 0.9,
                    type: 'solid',
                },
                xaxis: {
                    categories: ['Like', 'Love', "Haha", "Wow", "Sad", "Angry"],
                    title: {
                        text: 'Class'
                    }
                },
                yaxis: {
                    max: 100,
                    title: {
                        text: 'Prediction (%)'
                    }
                },
            },
        }
    }
}
</script>

<style scoped>
.block{
    border: 1px solid #ccc!important;
    border-radius: 10px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
.block-emotion{
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: center;
}
img{
    width: 50px;
    height: 50px;
    margin: 0.5rem;
}
.text-in-block{
    font-size:x-large;
    font-weight:600;
    margin-bottom: 0 !important;
}
</style>