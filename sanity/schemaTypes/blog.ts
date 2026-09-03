import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color (Tailwind class)',
      type: 'string',
      initialValue: 'bg-[#8E90DC]'
    }),
    defineField({
      name: 'imagePlaceholder',
      title: 'Image Placeholder Text',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Blog Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url'
    })
  ]
});

