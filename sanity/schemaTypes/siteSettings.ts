import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO Description',
      type: 'text',
    }),
    defineField({
      name: 'seoImage',
      title: 'Default SEO Image (Open Graph)',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ]
});

