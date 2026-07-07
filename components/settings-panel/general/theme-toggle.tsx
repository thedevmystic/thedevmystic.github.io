/**
 * Copyright 2026-present Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * ------------------------------------------------------------------------------------------------
 *
 * @file theme-toggle.tsx
 * @description Setting panel component for toggling dark/light theme, high contrast, and sepia.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect, useState } from 'react';

import ComputerIcon from '@mui/icons-material/Computer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Switch,
  Tooltip,
  Divider,
} from '@mui/material';

import { useTheme } from '@providers/base-providers';

import type { Theme } from '@providers/base-providers';

type BaseTheme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const { token: theme, setToken: setTheme } = useTheme();
  const [systemHC, setSystemHC] = useState(false);
  const [baseTheme, setBaseTheme] = useState<BaseTheme>('system');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSystemHC(window.matchMedia('(prefers-contrast: high)').matches);

    const savedTheme = localStorage.getItem('theme-toggle-base') as BaseTheme | null;

    if (theme === 'light' || theme === 'dark' || theme === 'system') {
      setBaseTheme(theme);
    } else if (theme === 'high-contrast-dark') {
      setBaseTheme('dark');
    } else if (theme === 'high-contrast-light') {
      setBaseTheme('light');
    } else if (theme === 'sepia' && savedTheme) {
      setBaseTheme(savedTheme);
    } else {
      setBaseTheme('system');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isHighContrast =
    theme === 'high-contrast-light' || theme === 'high-contrast-dark' || systemHC;
  const isSepia = theme === 'sepia';

  const handleThemeChange = (
    _event: React.MouseEvent<HTMLElement>,
    selectedTheme: BaseTheme | null,
  ) => {
    if (isSepia || !selectedTheme) return;

    setBaseTheme(selectedTheme);
    localStorage.setItem('theme-toggle-base', selectedTheme);

    if (isHighContrast) {
      // If turning on a base theme while HC is active, preserve HC modifier
      if (selectedTheme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'high-contrast-dark' : 'high-contrast-light');
      } else {
        setTheme(selectedTheme === 'dark' ? 'high-contrast-dark' : 'high-contrast-light');
      }
    } else {
      setTheme(selectedTheme as Theme);
    }
  };

  const handleHighContrastToggle = (checked: boolean) => {
    if (checked) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = baseTheme === 'dark' || (baseTheme === 'system' && systemPrefersDark);
      setTheme(shouldBeDark ? 'high-contrast-dark' : 'high-contrast-light');
    } else {
      // Safely fall back to the clean base theme string ('light' | 'dark' | 'system')
      setTheme(baseTheme as Theme);
    }
  };

  const handleSepiaToggle = (checked: boolean) => {
    if (checked) {
      setTheme('sepia');
    } else {
      // Safely fall back to the clean base theme string
      setTheme(baseTheme as Theme);
    }
  };

  const currentBaseTheme = isSepia ? null : baseTheme;

  return (
    <Box sx={{ overflow: 'visible' }}>
      {/* Base theme */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          overflow: 'visible',
        }}
      >
        <Typography variant="body2" sx={{ color: isSepia ? 'text.disabled' : 'text.secondary' }}>
          Theme
        </Typography>
        <ToggleButtonGroup
          value={currentBaseTheme}
          exclusive
          onChange={handleThemeChange}
          disabled={isSepia}
          size="small"
          aria-label="Theme selection"
        >
          <ToggleButton value="light" aria-label="Light theme">
            <Tooltip title="Light">
              <LightModeIcon fontSize="small" />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="dark" aria-label="Dark theme">
            <Tooltip title="Dark">
              <DarkModeIcon fontSize="small" />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="system" aria-label="System theme">
            <Tooltip title="System">
              <ComputerIcon fontSize="small" />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Divider />

      {/* Modifiers */}
      {/* High Contrast Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          py: 1,
          overflow: 'visible',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="body2" sx={{ color: isSepia ? 'text.disabled' : 'text.secondary' }}>
            High Contrast
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: isSepia ? 'text.disabled' : 'text.secondary' }}
          >
            Increases color contrast for elements to improve readability.
          </Typography>
        </Box>
        <Switch
          checked={isHighContrast}
          onChange={(e) => handleHighContrastToggle(e.target.checked)}
          disabled={isSepia}
          color="primary"
          slotProps={{ input: { 'aria-label': 'High contrast mode' } }}
        />
      </Box>

      <Divider />

      {/* Sepia Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          py: 1,
          overflow: 'visible',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="body2">Sepia</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Applies a warm, brownish vintage tone to reduce eye strain.
          </Typography>
        </Box>
        <Switch
          checked={isSepia}
          onChange={(e) => handleSepiaToggle(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Sepia mode' } }}
        />
      </Box>
    </Box>
  );
}
