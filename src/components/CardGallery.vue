<script setup>
import { useCardUtils } from '../composables/useCardUtils';

defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
defineEmits(['open-modal']);

const { getDeploymentCost, getTraitName, getCardImageUrl } = useCardUtils();
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div v-for="card in cards" :key="card.number" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div @click="$emit('open-modal', card)" class="cursor-pointer">
                <img 
                    :src="getCardImageUrl(card)" 
                    :alt="$t('codex.cardImageAlt', { cardName: card.name.es })" 
                    class="w-full h-auto object-cover bg-gray-300 dark:bg-gray-700"
                    @error="$event.target.src = `https://placehold.co/400x560/2d3748/ffffff?text=${encodeURIComponent(card.name.es || card.name.en)}`"
                >
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg text-gray-800 dark:text-white">{{ card.name.es || card.name.en }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 capitalize">{{ getTraitName(card.class) }} - {{ getTraitName(card.type) }}</p>
                <!-- Character Stats -->
                <div v-if="card.type === 'character'" class="flex justify-around items-center mt-4 text-center text-xs text-gray-700 dark:text-gray-300">
                    <div>
                        <span class="font-bold text-green-500">COSTE</span>
                        <p class="text-lg">{{ getDeploymentCost(card) }}</p>
                    </div>
                    <div>
                        <span class="font-bold text-red-500">HP</span>
                        <p class="text-lg">{{card.hp}}</p>
                    </div>
                    <div>
                        <span class="font-bold text-orange-500">ATK</span>
                        <p class="text-lg">{{card.atk}}</p>
                    </div>
                    <div>
                        <span class="font-bold text-blue-500">DEF</span>
                        <p class="text-lg">{{card.def}}</p>
                    </div>
                </div>
                <!-- Equip Stats -->
                <div v-else-if="card.type === 'equip'" class="flex justify-around items-center mt-4 text-center text-xs text-gray-700 dark:text-gray-300">
                    <div>
                        <span class="font-bold text-green-500">COSTE</span>
                        <p class="text-lg">{{ getDeploymentCost(card) }}</p>
                    </div>
                    <div v-if="card.hp > 0">
                        <span class="font-bold text-red-500">HP</span>
                        <p class="text-lg">+{{card.hp}}</p>
                    </div>
                    <div v-if="card.atk > 0">
                        <span class="font-bold text-orange-500">ATK</span>
                        <p class="text-lg">+{{card.atk}}</p>
                    </div>
                    <div v-if="card.def > 0">
                        <span class="font-bold text-blue-500">DEF</span>
                        <p class="text-lg">+{{card.def}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>