<template>
  {{useUser.count}}
  <button @click="useUser.increment">add</button>
</template>

<script setup>
import { useUserStore } from './store/useUserState';
const useUser = useUserStore()
</script>

<script>
export default {
  name: 'App',
}
</script>
