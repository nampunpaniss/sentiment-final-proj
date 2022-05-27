<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-col cols="12" class="pt-3 pb-3">
        <b-card class="p-3">
          <h1>Online Social Media Sentiment Analysis for University Admission</h1>
        </b-card>
      </b-col>
      <b-row>
        <b-col cols="12" sm="8">
          <b-card title="Card title" sub-title="Card subtitle">
            <div>
              <apexChart width="500" type="bar" :options="options" :series="series"></apexChart>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4">
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
              content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
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
      }]
    }
  },
}
</script>

<style scoped>
.block-title{
  background-color: white;
}
</style>