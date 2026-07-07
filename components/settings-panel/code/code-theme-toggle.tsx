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
 * @file code-theme-toggle.tsx
 * @description Settings panel component for code theme toggle.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useCodeTheme } from '@providers/code-providers';
import type { CodeTheme } from '@providers/code-providers';

export default function CodeThemeToggle() {
  const { token: codeTheme, setToken: setCodeTheme } = useCodeTheme();

  const handleCodeThemeChange = (event: SelectChangeEvent<CodeTheme>) => {
    setCodeTheme(event.target.value as CodeTheme);
  };

  return (
    <Box sx={{ overflow: 'visible' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          overflow: 'visible',
        }}
      >
        <Typography variant="body2" id="code-theme-label">
          Code Theme
        </Typography>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select
            labelId="code-theme-label"
            value={codeTheme || ''}
            onChange={handleCodeThemeChange}
            inputProps={{ 'aria-label': 'Code theme' }}
            MenuProps={{
              slotProps: {
                paper: {
                  sx: {
                    backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 50%, transparent)',
                    backdropFilter: 'blur(6px) !important',
                    WebkitBackdropFilter: 'blur(6px) !important',
                    border: '1px solid var(--color-border)',

                    '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
                      backdropFilter: 'none !important',
                      WebkitBackdropFilter: 'none !important',
                      backgroundColor: 'var(--color-bg-feature)',
                      border: '2px solid var(--color-border)',
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value="dracula">
              <Typography variant="body2">Dracula</Typography>
            </MenuItem>
            <MenuItem value="gruvbox">
              <Typography variant="body2">Gruvbox</Typography>
            </MenuItem>
            <MenuItem value="github">
              <Typography variant="body2">GitHub</Typography>
            </MenuItem>
            <MenuItem value="nord">
              <Typography variant="body2">Nord</Typography>
            </MenuItem>
            <MenuItem value="solarized">
              <Typography variant="body2">Solarized</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
