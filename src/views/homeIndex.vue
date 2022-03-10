<template>
  <div>
    <h1>test</h1>
  </div>
</template>

<script lang="ts">
// import { Vue, Options } from 'vue-class-component';
import { useStore } from 'vuex';
import { defineComponent } from 'vue';

// @Options({
//   components: {},
// })
export default defineComponent({
  setup() {
    const store = useStore();
    store.commit('Session/setUser', '123');
    // const testNum = computed(() => store.getters.session.count);
    // console.log(store.getters['Session/getUser']);
    return {};
  },
});
</script>
