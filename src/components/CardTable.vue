<script setup>
import { useCardUtils } from '../composables/useCardUtils';

defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
defineEmits(['open-modal']);

const { getDeploymentCost, getTraitName } = useCardUtils();
</script>

<template>
    <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
        <table class="min-w-full">
            <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.name') }}</th>
                    <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.type') }}</th>
                    <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.class') }}</th>
                    <th class="py-3 px-6 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.cost') }}</th>
                    <th class="py-3 px-6 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.hp') }}</th>
                    <th class="py-3 px-6 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.atk') }}</th>
                    <th class="py-3 px-6 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{{ $t('codex.table.def') }}</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="card in cards" :key="card.number" @click="$emit('open-modal', card)" class="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                    <td class="py-4 px-6 whitespace-nowrap font-medium text-gray-900 dark:text-white">{{ card.name.es || card.name.en }}</td>
                    <td class="py-4 px-6 whitespace-nowrap text-gray-500 dark:text-gray-300 capitalize">{{ getTraitName(card.type) }}</td>
                    <td class="py-4 px-6 whitespace-nowrap text-gray-500 dark:text-gray-300 capitalize">{{ getTraitName(card.class) }}</td>
                    <td class="py-4 px-6 whitespace-nowrap text-center font-semibold text-green-500">{{ getDeploymentCost(card) }}</td>
                    <template v-if="card.type === 'character'">
                        <td class="py-4 px-6 whitespace-nowrap text-center font-semibold text-red-500">{{ card.hp }}</td>
                        <td class="py-4 px-6 whitespace-nowrap text-center font-semibold text-orange-500">{{ card.atk }}</td>
                        <td class="py-4 px-6 whitespace-nowrap text-center font-semibold text-blue-500">{{ card.def }}</td>
                    </template>
                    <template v-else-if="card.type === 'equip'">
                        <td class="py-4 px-6 whitespace-nowrap text-center text-gray-400">{{ card.hp > 0 ? `+${card.hp}` : '—' }}</td>
                        <td class="py-4 px-6 whitespace-nowrap text-center text-gray-400">{{ card.atk > 0 ? `+${card.atk}` : '—' }}</td>
                        <td class="py-4 px-6 whitespace-nowrap text-center text-gray-400">{{ card.def > 0 ? `+${card.def}` : '—' }}</td>
                    </template>
                    <template v-else>
                        <td class="py-4 px-6 whitespace-nowrap text-center text-gray-400" colspan="3">N/A</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>