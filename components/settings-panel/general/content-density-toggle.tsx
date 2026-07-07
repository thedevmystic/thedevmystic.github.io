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
 * @file content-density-toggle.tsx
 * @description Setting panel component for toggling content density.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useContentDensity } from '@providers/base-providers';

import type { ContentDensity } from '@providers/base-providers';

export default function ContentDensityToggle() {
  const { token: contentDensity, setToken: setContentDensity } = useContentDensity();

  const handleContentDensityChange = (event: SelectChangeEvent<ContentDensity>) => {
    setContentDensity(event.target.value as ContentDensity);
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
        <Typography variant="body2" id="content-density-label">
          Content Density
        </Typography>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <Select
            labelId="content-density-label"
            value={contentDensity || ''}
            onChange={handleContentDensityChange}
            inputProps={{ 'aria-label': 'Content density' }}
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
            <MenuItem value="compact">
              <Typography variant="body2">Compact</Typography>
            </MenuItem>
            <MenuItem value="comfortable">
              <Typography variant="body2">Comfortable</Typography>
            </MenuItem>
            <MenuItem value="spacious">
              <Typography variant="body2">Spacious</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
