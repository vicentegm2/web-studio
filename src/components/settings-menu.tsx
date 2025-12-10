'use client';

import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/language-context';
import { Separator } from '@/components/ui/separator';

export function SettingsMenu() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t.settings}>
          <Settings className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <h4 className="font-medium leading-none">{t.settings}</h4>
          
          <Separator />
          
          {/* Theme Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">{t.theme}</Label>
            <RadioGroup value={theme} onValueChange={setTheme}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="font-normal cursor-pointer">
                  {t.light}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="font-normal cursor-pointer">
                  {t.dark}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="font-normal cursor-pointer">
                  {t.system}
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Language Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">{t.language}</Label>
            <RadioGroup value={language} onValueChange={(value) => setLanguage(value as 'en' | 'es')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="en" id="en" />
                <Label htmlFor="en" className="font-normal cursor-pointer flex items-center gap-2">
                  <span className="text-lg">🇬🇧</span> English
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="es" id="es" />
                <Label htmlFor="es" className="font-normal cursor-pointer flex items-center gap-2">
                  <span className="text-lg">🇪🇸</span> Español
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
