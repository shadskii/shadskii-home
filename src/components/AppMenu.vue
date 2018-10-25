<template lang="pug">
  v-navigation-drawer(
    v-model="model"
    persistent
    fixed
    disable-resize-watcher
    app
  )
    v-list(three-line)
      v-list-tile(
        v-for="(item) in items"
        :key="item.name"
        :href="item.url"
      )
        v-list-tile-content
          v-list-tile-title(v-text="item.name")
          v-list-tile-sub-title(v-text="item.description")
    v-footer(fixed).footer
      span &nbsp;&nbsp;&copy; Jake made dis
</template>

<script>
/**
 * Object that will link to my apps
 */
class AppLink {
  /**
   * @param {String} name name of app
   * @param {String} url url of app
   * @param {String} description description of app
   */
  constructor(name, url, description) {
    this.name = name;
    this.url = url;
    this.description = description;
  }
}

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        new AppLink('Crypto Stats', 'https://shadskii.github.io/crypto-stats/', 'Track your favorite cryptocurrencies!'),
        new AppLink('Hungry Seals', 'https://shadskii.github.io/hungry-seals/', 'This dude eats fish'),
        new AppLink('Boaty Boat', 'https://shadskii.github.io/boaty-boat/', 'Help Boaty Boat the boat survive his boating adventure'),
        new AppLink('Jimmy Eats Dicks', 'https://shadskii.github.io/jimmy-eats-dicks/', 'Jimmy loves dicks'),
        new AppLink('Jacob Loves Ding Dongs', 'https://shadskii.github.io/jacob-loves-ding-dong/', 'Jacob seriously loves ding dongs'),
      ],
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
<style scoped>
.footer{
  background: none;
}
</style>
