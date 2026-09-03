import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name & Mode',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date Duration',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'color',
      title: 'Dot Color',
      type: 'string',
      options: {
        list: [
          { title: 'Orange', value: 'orange' },
          { title: 'Dark', value: 'dark' }
        ]
      },
      initialValue: 'dark'
    })
  ]
});

