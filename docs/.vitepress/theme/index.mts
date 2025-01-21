import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import { onMounted, watch, nextTick, toRefs } from 'vue'
import { useData, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'

export default {
    extends: DefaultTheme,
    // ...DefaultTheme, //或者这样写也可
    setup() {
        //图片放大功能
        {
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
        };
        //评论功能
        {
            const { frontmatter } = toRefs(useData());
            const route = useRoute();

            giscusTalk(
                {
                    repo: 'vrxiaojie/wiki',
                    repoId: 'R_kgDONWyiJg',
                    category: 'General', // 默认: `General`
                    categoryId: 'DIC_kwDONWyiJs4CmMcX',
                    mapping: 'pathname', // 默认: `pathname`
                    inputPosition: 'top', // 默认: `top`
                    lang: 'zh-CN', // 默认: `zh-CN`
                    lightTheme: 'light', // 默认: `light`
                    darkTheme: 'dark', // 默认: `transparent_dark`
                    loading: 'lazy',
                },
                {
                    frontmatter,
                    route,
                },
                // 是否全部页面启动评论区。
                // 默认为 true，表示启用，此参数可忽略；
                // 如果为 false，表示不启用。
                // 可以在页面使用 `comment: true` 前言单独启用
                true
            );
        }
    }

}