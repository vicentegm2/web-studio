import { defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile / Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline (Job Title)',
      type: 'string',
      description: 'e.g. "Software Engineer"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'headline_es',
        title: 'Headline (Spanish)',
        type: 'string',
    }),
    defineField({
      name: 'bio_en',
      title: 'Bio (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bio_es',
      title: 'Bio (Spanish)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'softSkills',
      title: 'Soft Skills',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of soft skills (e.g. Teamwork, Communication)',
    }),
    // We can also add softSkills_es if these need to be translated, 
    // but usually string arrays are harder to localize strictly without objects.
    // For now assuming the simple string array might mix languages or we just stick to one, 
    // OR we change to object with en/es keys.
    // Let's make it an object array for better support if needed, or just separate arrays.
    // For simplicity based on Plan:
    defineField({
        name: 'softSkills_es',
        title: 'Soft Skills (Spanish)',
        type: 'array',
        of: [{ type: 'string' }],
    }),
  ],
})
