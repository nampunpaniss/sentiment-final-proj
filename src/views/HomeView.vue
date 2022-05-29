<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-col cols="12" class="pt-3 pb-3">
        <b-card class="p-3 text-center">
          <h1>Online Social Media Sentiment Analysis for University Admission</h1>
        </b-card>
      </b-col>
      <b-row>
        <b-col cols="12" sm="8">
          <b-card style="min-height: 1309px;">
            <div class="mt-2 mb-2">
              <b-form-group
                id="text-area-field"
                :description="countCharacter + '/ 5000 characters'"
                :invalid-feedback="invalidFeedback"
                :state="state || stateAfterPredict"
              >
                <b-form-textarea
                  id="textarea-no-resize"
                  placeholder="Enter the text of the post you want to predict."
                  rows="8"
                  no-resize
                  v-model="textPost"
                  :state="state"
                  trim
                ></b-form-textarea>
              </b-form-group>
            </div>
            <div class="mt-2 mb-5 d-flex justify-content-end">
              <b-button :disabled="predicting" variant="warning" style="width:100px;margin-right: 0.5rem;" @click="resetText">Reset</b-button>
              <b-button :disabled="predicting" variant="success" style="width:100px;" @click="predict"><b-spinner small v-show="predicting"></b-spinner> Predict</b-button>
            </div>
            <div class="mb-2">
              <ResultPredict :resultPredict="resultPredict" :loading="loadingResult"></ResultPredict>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4">
          <b-card style="min-height: 1309px;">
            <b-card-title class="text-center">Prediction history</b-card-title>
            <div class="mt-2 mb-2">
              <PredictionHistory></PredictionHistory>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ResultPredict from '@/components/resultPredict.vue';
import PredictionHistory from '@/components/predictionHistory.vue';
import { actionTypes, getterTypes } from "@/store/types";
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    ResultPredict,
    PredictionHistory
  },
  data() {
    return {
      textPost: null,
      predicting: false,
      stateAfterPredict: false,
      clickedButton: true,
      loadingResult: false,
      resultPredict: null
    }
  },
  computed: {
    ...mapGetters([getterTypes.RESULT_PREDICTION]),
    state() {
      if(this.textPost){
        return this.textPost.length >= 1 && this.textPost.length <= 5000
      }
      return null
    },
    invalidFeedback() {
      if (this.textPost && this.textPost.length > 0 ) {
        return 'Enter at least 10 characters and no more than 5000 characters.'
      }
      return 'Please enter something.'
    },
    countCharacter(){
      if(this.textPost != null){
        return this.textPost.length
      }
      return 0
    }
  },
  methods: {
    ...mapActions([actionTypes.PREDICT_POST,actionTypes.FETCH_HISTORY_PREDICTIONS]),
    resetText(){
      this.textPost = null
      this.resultPredict = null
    },
    predict(){
      this.predicting = true
      this.loadingResult = true
      if(this.state){
        this.predictPost(this.textPost).then(()=>{
          this.resultPredict = this.resultPrediction
          setTimeout(() => {
            this.fetchHistoryPredictions()
            this.predicting = false
            this.loadingResult = false
          }, 2000);
        });
      } else{
        this.predicting = false
        this.loadingResult = false
        this.$bvToast.toast(`error`, {
          variant: 'danger',
          title: 'error',
          autoHideDelay: 5000,
          appendToast: false
        })
      }
    }
  }
}
</script>

<style scoped>
.block-title{
  background-color: white;
}
</style>