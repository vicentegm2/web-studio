import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Used for SEO and meta tags',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2024 Vicente Gabriel Gómez Medina. All rights reserved.',
    }),
    defineField({
      name: 'cvFile_es',
      title: 'CV File (Spanish)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'cvFile_en',
      title: 'CV File (English)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Platform Name',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'e.g., "Github", "Linkedin", "Twitter"',
              options: {
                list: [
                  { title: 'GitHub', value: 'Github' },
                  { title: 'LinkedIn', value: 'Linkedin' },
                  { title: 'Twitter', value: 'Twitter' },
                  { title: 'Instagram', value: 'Instagram' },
                  { title: 'Mail', value: 'Mail' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
})
