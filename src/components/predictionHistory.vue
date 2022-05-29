<template>
  <div>
      <div class="block mt-2 mb-2" v-for="(item,index) in listShowData" :key="index">
        <div class="m-3">
            <h6>Emotion: {{ item.emotion }}</h6>
            <p>{{ item.text }}</p>
            <div class="text-end">
                <p class="see-more" @click="goToDetail(item)">See more</p>
            </div>
        </div>
      </div>
      <b-pagination 
        v-model="currentPage" 
        pills 
        :total-rows="listItems.length"
        :per-page="perPage"
        class="justify-content-center mt-2 mb-1"
      ></b-pagination>
      <b-modal id="detail-prediction" size="xl" scrollable hide-footer>
          <DetailPrediction :idPost="clickedPost"></DetailPrediction>
      </b-modal>
  </div>
</template>

<script>
import DetailPrediction from './detailPrediction.vue'
export default {
    name: "PredictionHistory",
    components: {
        DetailPrediction
    },
    data() {
        return {
            currentPage: 1,
            perPage: 9,
            clickedPost: null,
            listItems: [
                {
                    emotion: 'Generally wholesome post 0',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 1',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 2',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 3',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 4',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 5',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 6',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 7',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 8',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 9',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 10',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 11',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 12',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post 13',
                    text: 'content of post...',
                },
            ],
        }
    },
    computed: {
        listShowData(){
            if(this.currentPage == 1){
                return this.listItems.slice(0,this.perPage)
            } else {
                let start = this.perPage * (this.currentPage - 1)
                let end = this.perPage * this.currentPage
                return this.listItems.slice(start,end)
            }
        }
    },
    methods: {
        goToDetail(post) {
            this.clickedPost = post
            this.$bvModal.show('detail-prediction')
        }
    }
}
</script>

<style scoped>
.block{
    border: 1px solid #ccc!important;
    border-radius: 5px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
.see-more{
    color: blue;
    cursor: pointer;
    display: inline;
}
.see-more:hover{
    color: darkblue;
    text-decoration: underline;
}
</style>