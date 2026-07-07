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
 * @file content-width-toggle.tsx
 * @description Setting panel component for toggling content width.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useContentWidth } from '@providers/base-providers';

import type { ContentWidth } from '@providers/base-providers';

export default function ContentWidthToggle() {
  const { token: contentWidth, setToken: setContentWidth } = useContentWidth();

  const handleContentWidthChange = (event: SelectChangeEvent<ContentWidth>) => {
    setContentWidth(event.target.value as ContentWidth);
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
        <Typography variant="body2" id="content-width-label">
          Content Width
        </Typography>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select
            labelId="content-width-label"
            value={contentWidth || ''}
            onChange={handleContentWidthChange}
            inputProps={{ 'aria-label': 'Content width' }}
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
            <MenuItem value="narrow">
              <Typography variant="body2">Narrow</Typography>
            </MenuItem>
            <MenuItem value="standard">
              <Typography variant="body2">Standard</Typography>
            </MenuItem>
            <MenuItem value="wide">
              <Typography variant="body2">Wide</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
