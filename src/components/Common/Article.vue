

<template>
  <div>
    source:
    <span
      class="read-text"
      :class="{
        'is-active': isRead,
      }"
      >{{ source }}</span
    >
    <slot />
    <Card
      :title="data.title"
      :image="data.image"
      :publish-at="data.publishAt"
      :description="data.description"
      :author="data.author"
      @read="handleRead"
    />
    <slot name="delete" />
  </div>
</template>
<script>
import Card from "../Common/Card.vue";
export default {
  name: "HomeArticle",
  components: {
    Card,
  },
  props: {
    source: {
      type: String,
      default: "Net",
    },
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      isRead: false,
    };
  },
  methods: {
    handleRead(isRead) {
      this.isRead = isRead;
    },
  },
};
</script>

<style lang="scss" scoped>
.is-active {
  color: #f00;
}
</style>
