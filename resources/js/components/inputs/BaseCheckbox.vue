<template>
    <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="field"
    />
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
