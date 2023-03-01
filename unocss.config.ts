import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [['theme-color', { color: 'pink' }]],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center'
    }
  ],
  theme: {
    colors: {
      main: 'rgba(49, 108, 251, 1)',
      mainBgColor: '#F8F8F8',
      mainBorderColor: '#D8D8D8'
    },
    boxShadow: {
      'header-shadow': '0px 6px 12px 0px rgba(49,108,251,0.05);'
    }
  }
})
