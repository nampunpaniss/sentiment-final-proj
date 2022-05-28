<template>
  <div>
      <div class="block mt-2 mb-2" v-for="item in listItems" :key="item">
        <div class="m-3">
            <h6>Emotion: {{ item.emotion }}</h6>
            <p>{{ item.text }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PredictionHistory",
    data() {
        return {
            listItems: [
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                },
                {
                    emotion: 'Generally wholesome post',
                    text: 'content of post...',
                }
            ],
        }
    },
}
</script>

<style scoped>
.block{
    border: 1px solid #ccc!important;
    border-radius: 5px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>