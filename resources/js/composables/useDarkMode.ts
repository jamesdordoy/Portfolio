import { ref, onMounted } from 'vue';

const isDark = ref(true);

export function useDarkMode() {
    onMounted(() => {
        isDark.value = document.documentElement.classList.contains('dark');
    });

    const toggle = (): void => {
        isDark.value = !isDark.value;
        document.documentElement.classList.toggle('dark', isDark.value);
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };

    return { isDark, toggle };
}
