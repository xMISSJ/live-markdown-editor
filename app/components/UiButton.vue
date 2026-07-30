<script setup lang="ts">
type ButtonVariant = 'default' | 'chip'

const props = withDefaults(defineProps<{
  variant?: ButtonVariant
  active?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'default',
  active: false,
  type: 'button',
})

const variantClass = computed(() => {
  if (props.variant === 'chip') {
    return props.active
      ? 'rounded-full border-accent bg-accent/20 text-ink'
      : 'rounded-full border-line bg-transparent text-ink-muted hover:border-accent hover:text-ink'
  }

  return 'rounded-md border-line bg-panel-elevated text-ink hover:border-accent'
})

const sizeClass = computed(() =>
  props.variant === 'chip'
    ? 'px-[0.55rem] py-[0.28rem] text-[0.74rem] tracking-[0.03em]'
    : 'px-3 py-1.5 text-[0.85rem]',
)
</script>

<template>
  <button
    :type="props.type"
    class="inline-flex cursor-pointer items-center border font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    :class="[variantClass, sizeClass]"
  >
    <slot />
  </button>
</template>
