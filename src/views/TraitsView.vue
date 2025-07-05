<script setup>
import { useI18n } from 'vue-i18n';
import allTraits from '../data/ocw_traits.json';

const { locale } = useI18n();
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ $t('traits.title') }}</h2>
    <div class="space-y-4">
      <div v-for="trait in allTraits" :key="trait.code" class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 class="font-semibold text-lg text-green-600 dark:text-green-400 capitalize">{{ trait.name[locale] || trait.name.es }}</h3>
      </div>
    </div>
  </div>
</template>