// uno.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    // ...UnoCSS options
    transformers: [
        transformerDirectives(),
    ],
    presets: [
        presetUno(),
        presetIcons({ /* options */
            // cdn:'https://esm.sh/',
            autoInstall:true
        }),
        // ...other presets

    ],
})


// uno.config.ts





