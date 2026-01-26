import { groq } from 'next-sanity'

// Profile / Hero Query
export const PROFILE_QUERY = groq`*[_type == "profile" && _id == "profile"][0]{
  _id,
  name,
  headline,
  headline_es,
  bio_en,
  bio_es,
  "avatarUrl": avatar.asset->url,
  avatar,
  softSkills,
  softSkills_es
}`

// Settings Query
export const SETTINGS_QUERY = groq`*[_type == "settings" && _id == "settings"][0]{
  _id,
  title,
  description,
  copyright,
  "cvFileEs": cvFile_es.asset->url,
  "cvFileEn": cvFile_en.asset->url,
  cvFile_es,
  cvFile_en,
  socialLinks[]{
    name,
    url,
    iconName
  }
}`

// Tech Stack Query
export const TECH_STACK_QUERY = groq`*[_type == "techStack"] | order(_createdAt asc){
  _id,
  name,
  icon,
  description_en,
  description_es
}`

// Experience Query
export const EXPERIENCE_QUERY = groq`*[_type == "experience"] | order(order asc){
  _id,
  company,
  role,
  period,
  description,
  "logoUrl": logo.asset->url,
  logo,
  order
}`

// Projects Query
export const PROJECTS_QUERY = groq`*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  slug,
  description,
  "imageUrl": mainImage.asset->url,
  mainImage,
  tags,
  codeUrl,
  demoUrl,
  videoUrl
}`

// Certifications Query
export const CERTIFICATIONS_QUERY = groq`*[_type == "certification"] | order(_createdAt desc){
  _id,
  name,
  issuer,
  date,
  credentialUrl,
  "imageUrl": image.asset->url,
  image
}`

// Newsletters Query
export const NEWSLETTERS_QUERY = groq`*[_type == "newsletter"] | order(_createdAt desc){
  _id,
  title,
  slug,
  description,
  link,
  "coverImageUrl": coverImage.asset->url,
  coverImage,
  tags,
  featured
}`

// Featured Newsletter Query
export const FEATURED_NEWSLETTER_QUERY = groq`*[_type == "newsletter" && featured == true][0]{
  _id,
  title,
  slug,
  description,
  link,
  "coverImageUrl": coverImage.asset->url,
  coverImage,
  tags
}`
