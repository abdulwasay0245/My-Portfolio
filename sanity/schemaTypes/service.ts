export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional brief description of the service',
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      description: 'Upload an image to replace the default abstract shapes',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Where the arrow button should link to',
    },
  ],
}
