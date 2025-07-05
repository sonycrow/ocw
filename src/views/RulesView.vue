<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { marked } from 'marked';

const { t, locale } = useI18n();
const rulesContent = ref('');

const loadRules = async () => {
  try {
    // Vite feature: Importing a file with `?raw` imports it as a string.
    const mdModule = await import(`../assets/rules/rules-${locale.value}.md?raw`);
    rulesContent.value = marked(mdModule.default);
  } catch (e) {
    console.warn(`Rules for locale "${locale.value}" not found. Falling back to 'es'.`);
    const fallbackModule = await import('../assets/rules/rules-es.md?raw');
    rulesContent.value = marked(fallbackModule.default);
  }
};

// Load rules on component mount and when locale changes
watch(locale, loadRules, { immediate: true });
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ $t('rules.title') }}</h2>
    <!-- Render the HTML converted from Markdown -->
    <div v-html="rulesContent" class="prose dark:prose-invert max-w-none markdown-content"></div>
  </div>
</template>

<style scoped>
.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
    @apply font-semibold text-gray-800 dark:text-gray-100;
}

.markdown-content :deep(h1) {
    @apply text-3xl mt-10 mb-4 pb-2 border-b border-gray-300 dark:border-gray-700;
}

.markdown-content :deep(h2) {
    @apply text-2xl mt-8 mb-4 pb-2 border-b border-gray-300 dark:border-gray-700;
}

.markdown-content :deep(h3) {
    @apply text-xl mt-8 mb-4;
}

.markdown-content :deep(p) {
    @apply mb-4 leading-relaxed;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
    @apply mb-4 pl-8 space-y-2;
}

.markdown-content :deep(ul) {
    @apply list-disc;
}

.markdown-content :deep(ol) {
    @apply list-decimal;
}

.markdown-content :deep(li::marker) {
    @apply text-gray-500 dark:text-gray-400;
}

.markdown-content :deep(hr) {
    @apply my-8 border-t border-gray-300 dark:border-gray-700;
}

.markdown-content :deep(blockquote) {
    @apply my-6 px-4 py-2 border-l-4 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 italic;
}

.markdown-content :deep(blockquote p) {
    @apply mb-0;
}

.markdown-content :deep(a) {
  @apply text-blue-600 dark:text-blue-400 font-medium no-underline hover:underline;
}

.markdown-content :deep(strong) {
    @apply font-semibold text-gray-800 dark:text-gray-200;
}

.markdown-content :deep(em) {
    @apply italic;
}

/* Styling for inline code like `{skill}` */
.markdown-content :deep(code) {
  @apply bg-gray-200 dark:bg-gray-700 rounded-md px-1.5 py-0.5 text-sm font-mono font-normal text-gray-600 dark:text-gray-400 before:content-[''] after:content-[''];
}

/* Code blocks */
.markdown-content :deep(pre) {
  @apply bg-gray-100 dark:bg-gray-900 rounded-lg p-4 my-6 overflow-x-auto;
}

.markdown-content :deep(pre code) {
  @apply bg-transparent p-0 text-sm text-gray-800 dark:text-gray-200;
}
</style>
