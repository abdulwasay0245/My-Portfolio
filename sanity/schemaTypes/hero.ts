import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Top Greeting Tag',
      type: 'string',
      initialValue: 'Hello!'
    }),
    defineField({
      name: 'headline',
      title: 'Main Headline',
      description: 'Use <orange>text</orange> to highlight words in orange.',
      type: 'text',
      initialValue: "I'm <orange>Wasay</orange>,<br /> Ai & workflow automation expert."
    }),
    defineField({
      name: 'statsText',
      title: 'Stats Number (e.g. 3+ Years)',
      type: 'string',
      initialValue: '3+ Years'
    }),
    defineField({
      name: 'statsLabel',
      title: 'Stats Label (e.g. Experience)',
      type: 'string',
      initialValue: 'Experience'
    }),
    defineField({
      name: 'quoteText',
      title: 'Floating Quote Text',
      type: 'text',
      initialValue: "Abdul's full-stack development skills ensured our project's success.<br/>Highly Recommended"
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Person Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ]
});

