<template>
  <v-container fluid>
    <!-- <v-slide-y-transition mode="out-in"> -->
    <v-layout
      row
      wrap
      align-center
      justify-space-around>
      <v-flex
        text-xs-center
        xs12
        sm8
        md5
        lg3
      >
        <div class="text-xs-center">
          <v-avatar size="225px">
            <img
              :src="jake"
              class="img-circle elevation-7 mb-1">
          </v-avatar>
          <div class="headline">Jake <span style="font-weight:bold">Hassel</span></div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">Frontend Software Developer</div>
          <v-layout justify-space-between>
            <v-btn
              fab
              icon
              href="https://github.com/shadskii"
              class="body-2">
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
            <v-btn
              fab
              icon
              href="https://www.linkedin.com/in/jacob-k-hassel/"
              class="body-2">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              fab
              icon
              href="https://www.facebook.com/jakehasssel"
              class="body-2">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              fab
              icon
              href="mailto:me@shadskii.io"
              class="body-2">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12>
        <app-showcase />
      </v-flex>
    </v-layout>
    <!-- </v-slide-y-transition> -->

  </v-container>
</template>

<script>
import AppShowcase from './AppShowcase.vue';
import jake from '../assets/jake.png';
export default {
  name: 'Landing',
  components: {
    AppShowcase,
  },
  data() {
    return {
      jake,
    };
  },
};
</script>

<style scoped>
</style>
