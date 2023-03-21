

<template>
  <div class="home">
    <h3>User list</h3>
    <HomeArticle
      v-for="(d, index) in dataHomeArticle"
      :key="`dt-${index}}`"
      :source="d.source"
      :data="d">
      <!-- <template #default>
        <div>
          test <br />
          default slot
        </div>
      </template>

      <template #delete>
        <button @click="handleDelete(index)">DELETE</button>
      </template> -->
    </HomeArticle>
  </div>
</template>

<script>
import HomeArticle from "../components/Home/Article.vue";

export default {
  name: "ArticleRequest",
  components: {
    HomeArticle,
  },
  data() {
    return {
      dataHomeArticle: [],
    };
  },
  mounted() {
    this.getHomeArticleData();
  },
  methods: {
    async getHomeArticleData() {
      try {
        await this.simulateRequest();
        this.dataHomeArticle = [
          {
            firstname: "firstName",
            firstname: "lastName",
            email: "name@email.com",
            age: 45,
            image: "",
            description: "Lorem ipsum dolor",
            publishAt: "15/03",
            author: {
              firstname: "Radonirina",
              lastname: "Maminiaina",
            },
          },
          {
            source: "unknown",
            title: "Second article",
            image: "",
            publishAt: "14/03",
            author: {
              firstname: "SAHA",
              lastname: "Academy",
            },
          },
        ];
      } catch (err) {
        console.error(err);
      }
    },
    simulateRequest() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
    handleDelete(indexDelete) {
      this.dataHomeArticle = this.dataHomeArticle.filter((_, index) => index !== indexDelete
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  h3{
        font-size: 20px;
        margin: 0 0 10px;
        color: black;
    }
}
</style>
