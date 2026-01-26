import { defineField, defineType } from 'sanity'

export const techStack = defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Key',
      type: 'string',
      description: 'Key to map to frontend icon component (e.g. "IconReact", "IconCSharp")',
      options: {
        list: [
            { title: 'C#', value: 'IconCSharp' },
            { title: '.NET', value: 'IconDotNet' },
            { title: 'React', value: 'IconReact' },
            { title: 'SQL Server', value: 'Database' },
            { title: 'Git', value: 'IconGit' },
            { title: 'Microservices', value: 'Share2' },
            { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'description_en',
      title: 'Description (English)',
      type: 'string',
    }),
    defineField({
      name: 'description_es',
      title: 'Description (Spanish)',
      type: 'string',
    }),
  ],
})
