<template lang="pug">
  v-app(dark)
    app-menu(v-model="drawer")
    v-toolbar(color="primary" app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title(v-text="title")
    v-content
      landing
</template>

<script>
import Landing from './components/Landing';
import AppMenu from './components/AppMenu';

export default {
  name: 'App',
  components: {
    Landing,
    AppMenu,
  },
  data() {
    return {
      drawer: false,
      title: 'Shadskii.io',
    };
  },
};
</script>
