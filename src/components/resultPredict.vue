<template>
    <div>
        <b-card title="Result">
            <div class="mt-2 mb-2">
                <apexChart width="500" type="bar" :options="options" :series="series"></apexChart>
            </div>
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
                xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                },
                yaxis: {
                max: 100
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
        }
    }
}
</script>

<style>

</style>