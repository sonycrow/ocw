<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import allCards from '../data/ocw_codex.json';
import CardGallery from '../components/CardGallery.vue';
import CardTable from '../components/CardTable.vue';
import { useCardUtils } from '../composables/useCardUtils';

const { locale } = useI18n();
const { getTraitName, getCardImageUrl } = useCardUtils();
const viewMode = ref('gallery');
const searchTerm = ref('');
const typeFilter = ref('');
const classFilter = ref('');

const isModalOpen = ref(false);
const selectedCard = ref(null);

const openModal = (card) => {
  selectedCard.value = card;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedCard.value = null;
};

const filteredCards = computed(() => {
    return allCards.filter(card => {
        const name = card.name[locale.value] || card.name.es;
        const nameMatch = name.toLowerCase().includes(searchTerm.value.toLowerCase());
        const typeMatch = typeFilter.value ? card.type === typeFilter.value : true;
        const classMatch = classFilter.value ? card.class === classFilter.value : true;
        return nameMatch && typeMatch && classMatch;
    });
});

const uniqueTypes = computed(() => [...new Set(allCards.map(card => card.type))]);
const uniqueClasses = computed(() => [...new Set(allCards.map(card => card.class))].filter(Boolean));
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ $t('codex.title') }}</h2>
    <div class="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-wrap items-center gap-4">
      <div class="flex-grow min-w-[200px]">
        <input type="text" v-model="searchTerm" :placeholder="$t('codex.searchPlaceholder')" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="flex-grow min-w-[150px]">
        <select v-model="typeFilter" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
          <option value="">{{ $t('codex.allTypes') }}</option>
          <option v-for="type in uniqueTypes" :key="type" :value="type" class="capitalize">{{ getTraitName(type) }}</option>
        </select>
      </div>
      <div class="flex-grow min-w-[150px]">
        <select v-model="classFilter" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
          <option value="">{{ $t('codex.allClasses') }}</option>
          <option v-for="cls in uniqueClasses" :key="cls" :value="cls" class="capitalize">{{ getTraitName(cls) }}</option>
        </select>
      </div>
      <div>
        <button @click="viewMode = 'gallery'" :class="{'bg-blue-500 text-white': viewMode === 'gallery'}" class="p-2 rounded-l-md border dark:border-gray-600">{{ $t('codex.galleryView') }}</button>
        <button @click="viewMode = 'table'" :class="{'bg-blue-500 text-white': viewMode === 'table'}" class="p-2 rounded-r-md border dark:border-gray-600">{{ $t('codex.tableView') }}</button>
      </div>
    </div>
    <p v-if="filteredCards.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-8">{{ $t('codex.noResults') }}</p>
    <div v-else>
      <!-- Se ha eliminado el componente <transition> para forzar un renderizado completo y evitar problemas de reconciliación de Vue. -->
      <!-- Este enfoque es más robusto y soluciona el problema de que el contenido desaparezca al cambiar de vista. -->
      <CardGallery v-if="viewMode === 'gallery'" :cards="filteredCards" @open-modal="openModal" />
      <CardTable v-else :cards="filteredCards" @open-modal="openModal" />
    </div>

    <!-- Modal centralizado -->
    <div v-if="isModalOpen && selectedCard" @click="closeModal" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 transition-opacity duration-300">
        <div @click.stop class="relative max-w-full max-h-full">
            <button @click="closeModal" class="absolute -top-3 -right-3 text-white bg-gray-900 bg-opacity-75 rounded-full p-1.5 z-10 hover:bg-opacity-100 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <img 
                :src="getCardImageUrl(selectedCard)" 
                alt="Vista ampliada de la carta" 
                class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                @error="$event.target.src = `https://placehold.co/400x560/2d3748/ffffff?text=${encodeURIComponent(selectedCard.name[locale] || selectedCard.name.es)}`"
            >
        </div>
    </div>
  </div>
</template>