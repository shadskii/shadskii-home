<template>
  <v-container
    grid-list-md
    text-xs-center
    fluid>
    <v-layout
      justify-center
      row
      wrap>
      <v-flex
        v-for="n in apps"
        :key="n.name"
        xs3
      >
        <v-avatar
          size="220px"
          class="img-circle elevation-7 mb-1"
          @click="openLink(n.url)">
          <v-img
            :src="n.pic"
            contain
          />
        </v-avatar>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
/**
 * An app that should be shown off
 */
class AppLink {
  /**
     *
     * @param {String} name Name of the app
     * @param {*} url Url to the app
     * @param {*} pic Represents the app
     */
  constructor(name, url, pic) {
    this.name = name;
    this.url = url;
    this.pic = pic;
  }
}

const apps = [
  new AppLink('The Naticks', 'shadskii.github.io/the-naticks-website/', require('../assets/naticks.png')),
  new AppLink('Ironman', 'shadskii.github.io/ironman/', require('../assets/ironman.png')),
  new AppLink('We Rate Dogs', 'shadskii.github.io/rate-dogs/', require('../assets/rate-dogs.png')),
  new AppLink('Scratch Kitchen', 'shadskii.github.io/scratch/', require('../assets/scratch.png')),
];

export default {
  data() {
    return {
      apps,
    };
  },
  methods: {
    openLink(url) {
      window.open(`https://${url}`, '_blank');
    },
  },
};
</script>
