import { type SchemaTypeDefinition } from 'sanity'
import { experience } from './experience'
import { project } from './project'
import { newsletter } from './newsletter'
import { certification } from './certification'
import { settings } from './settings'
import { profile } from './profile'
import { techStack } from './techStack'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, project, newsletter, certification, settings, profile, techStack],
}
