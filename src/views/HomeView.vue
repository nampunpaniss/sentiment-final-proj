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
          <b-card>
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
              <b-button :disabled="predicting" variant="warning" style="margin-right: 0.5rem;" @click="resetText">Reset</b-button>
              <b-button :disabled="predicting" variant="success" style="width:100px;" @click="predict"><b-spinner small v-show="predicting"></b-spinner> Predict</b-button>
            </div>
            <div class="mb-2">
              <ResultPredict></ResultPredict>
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
import ResultPredict from '@/components/resultPredict.vue'
export default {
  name: 'HomeView',
  components: {
    ResultPredict
  },
  data() {
    return {
      textPost: null,
      predicting: false,
      stateAfterPredict: false
    }
  },
  computed: {
    state() {
      if(this.textPost){
        return this.textPost.length >= 10 && this.textPost.length <= 5000
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
    resetText(){
      this.textPost = null
    },
    predict(){
      this.predicting = true
      if(this.state){
        setTimeout(() => {
          this.predicting = false
        }, 3000);
      } else{
        this.predicting = false
        this.$bvToast.toast(`error`, {
          variant: 'danger',
          title: 'error',
          autoHideDelay: 5000,
          appendToast: false
        })

        // this.$bvToast.toast("error", { variant: 'danger' })
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