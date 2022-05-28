<template>
    <div>
        <b-card title="Result">
            <b-row class="mt-2 mb-2">
                <b-col cols="12">
                    <b-row class="m-2">
                        <b-col cols="12" class="mt-2 mb-2">
                            <b-card>
                                <h5>Emotions</h5>
                                <hr>
                                <div class="d-flex text-center mb-4">
                                    <div class="block block-emotion" v-for="item in result" :key="item">
                                        <img :src="'../reaction-icon/'+item+'.svg'" :alt="item">
                                        <p class="text-in-block">{{ item }}</p>
                                    </div>
                                </div>
                                <h5 class="mb-2">The meaning of the predicted mood</h5>
                                <hr>
                                <div class="d-flex text-center mb-4">
                                    <div class="block">
                                        <p style="margin:0.5rem !important" class="text-in-block">{{ emotionText }}</p>
                                    </div>
                                </div>
                            </b-card>
                        </b-col>
                        <b-col cols="12">
                            <apexChart type="bar" :options="options" :series="series"></apexChart>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "resultPredict",
    data() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                title: {
                    text: 'Prediction results',
                    align: 'center',
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
            series: [{
                name: 'series-1',
                data: [45, 50, 49, 60, 70, 91]
            }],
            result: ['like','love'],
            emotionText: 'Generally wholesome post'
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