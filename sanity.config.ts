import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: 'AK Portfolio',
  apiVersion: '2023-07-12',
  basePath: '/admin',
  plugins: [deskTool()],
})

export default config;