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
 * @file code-font-toggle.tsx
 * @description Settings panel component for code font toggle.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useCodeFont } from '@providers/code-providers';

import type { CodeFont } from '@providers/code-providers';

export default function CodeFontToggle() {
  const { token: codeFont, setToken: setCodeFont } = useCodeFont();

  const handleCodeFontChange = (event: SelectChangeEvent<CodeFont>) => {
    setCodeFont(event.target.value as CodeFont);
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
        <Typography variant="body2" id="code-font-label">
          Code Font
        </Typography>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select
            labelId="code-font-label"
            value={codeFont || ''}
            onChange={handleCodeFontChange}
            inputProps={{ 'aria-label': 'Code font' }}
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
            <MenuItem value="jb-mono">
              <Typography variant="body2">JetBrains Mono</Typography>
            </MenuItem>
            <MenuItem value="fira-code">
              <Typography variant="body2">Fira Code</Typography>
            </MenuItem>
            <MenuItem value="source-code-pro">
              <Typography variant="body2">Source Code Pro</Typography>
            </MenuItem>
            <MenuItem value="ubuntu-mono">
              <Typography variant="body2">Ubuntu Mono</Typography>
            </MenuItem>
            <MenuItem value="def-mono">
              <Typography variant="body2">Default Monospace</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
