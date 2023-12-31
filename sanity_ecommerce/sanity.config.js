import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity_ecommerce',

  projectId: '6izarh0n',
  dataset: 'production',
  ignoreBrowserTokenWarning: true,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
