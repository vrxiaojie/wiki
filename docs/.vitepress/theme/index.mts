import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

export default {
    extends: DefaultTheme,
    // ...DefaultTheme, //或者这样写也可
    setup() {
        const route = useRoute()
        const initZoom = () => {
            //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
        };
        onMounted(() => {
            initZoom()
        })
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        )
    }
}