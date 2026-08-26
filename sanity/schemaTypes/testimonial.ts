export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Client Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'role',
        title: 'Role / Company',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule: any) => Rule.required().min(1).max(5),
      },
      {
        name: 'text',
        title: 'Testimonial Text',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Client Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
