import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    })
  ]
});

