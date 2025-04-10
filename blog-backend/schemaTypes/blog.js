export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug (for URL)',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required(),
      },
    ],
  }
  