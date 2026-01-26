import { Code, Download, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SettingsMenu } from './settings-menu';
import { sanityFetch } from '@/sanity/lib/client';
import { SETTINGS_QUERY } from '@/sanity/lib/queries';
import { HeaderClient } from './header-client';

export async function Header() {
  const settings = await sanityFetch<any>({
    query: SETTINGS_QUERY,
    tags: ['settings'],
  });

  const cvFileEs = settings?.cvFileEs || '/Currículum Vitae CV - Vicente Gabriel Gómez Medina.pdf';
  const cvFileEn = settings?.cvFileEn || '/Currículum Vitae CV - Vicente Gabriel Gómez Medina_english.pdf';

  return <HeaderClient cvFileEs={cvFileEs} cvFileEn={cvFileEn} />;
}
