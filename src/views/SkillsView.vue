<script setup>
import { useI18n } from 'vue-i18n';
import allSkills from '../data/ocw_skills.json';

const { locale } = useI18n();
</script>


<template>
  <div>
    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ $t('skills.title') }}</h2>
    <div class="space-y-4">
      <div v-for="skill in allSkills" :key="skill.code" class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 class="font-semibold text-lg text-blue-600 dark:text-blue-400 capitalize">{{ skill.name[locale] || skill.name.es }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mt-1">{{ skill.desc[locale] || skill.desc.es }}</p>
      </div>
    </div>
  </div>
</template>