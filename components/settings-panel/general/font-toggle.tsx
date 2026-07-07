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
 * @file font-toggle.tsx
 * @description Setting panel component for toggling font.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useFont } from '@providers/base-providers';

import type { Font } from '@providers/base-providers';

export default function FontToggle() {
  const { token: font, setToken: setFont } = useFont();

  const handleFontChange = (event: SelectChangeEvent<Font>) => {
    setFont(event.target.value as Font);
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
        <Typography variant="body2" id="font-label">
          Font
        </Typography>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select
            labelId="font-label"
            value={font || ''}
            onChange={handleFontChange}
            inputProps={{ 'aria-label': 'Font' }}
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
            <MenuItem value="sans">
              <Typography variant="body2">Sans</Typography>
            </MenuItem>
            <MenuItem value="serif">
              <Typography variant="body2">Serif</Typography>
            </MenuItem>
            <MenuItem value="comic">
              <Typography variant="body2">Comic</Typography>
            </MenuItem>
            <MenuItem value="def-sans">
              <Typography variant="body2">Default Sans</Typography>
            </MenuItem>
            <MenuItem value="def-serif">
              <Typography variant="body2">Default Serif</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
