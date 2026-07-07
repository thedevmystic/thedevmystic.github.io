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
 * @file accent-toggle.tsx
 * @description Setting panel component for toggling accent color.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';

import { useAccent } from '@providers/base-providers';

import type { Accent } from '@providers/base-providers';

const ACCENTS = [
  { id: 'blue', name: 'Sapphire', color: 'var(--color-accent-blue)' },
  { id: 'green', name: 'Emerald', color: 'var(--color-accent-green)' },
  { id: 'red', name: 'Ruby', color: 'var(--color-accent-red)' },
  { id: 'pink', name: 'Quartz', color: 'var(--color-accent-pink)' },
  { id: 'yellow', name: 'Amber', color: 'var(--color-accent-yellow)' },
];

export default function AccentToggle() {
  const { token: accent, setToken: setAccent } = useAccent();

  const handleAccentChange = (
    _event: React.MouseEvent<HTMLElement>,
    selectedAccent: Accent | null,
  ) => {
    if (!selectedAccent) return;
    setAccent(selectedAccent);
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
        <Typography variant="body2">Accent</Typography>
        <ToggleButtonGroup
          value={accent}
          exclusive
          onChange={handleAccentChange}
          aria-label="Accent selection"
          sx={{
            gap: 1.5,
            border: 'none',
            '& .MuiToggleButtonGroup-grouped': {
              border: 'none',
              '&:not(:first-of-type)': { borderRadius: '35%' },
              '&:first-of-type': { borderRadius: '35%' },
            },
          }}
        >
          {ACCENTS.map(({ id, name, color }) => (
            <Tooltip key={id} title={name}>
              <ToggleButton
                value={id}
                aria-label={`${name} accent`}
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: `${color} !important`,
                  borderRadius: '35%',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',

                  '&:hover': {
                    backgroundColor: `${color} !important`,
                    transform: 'scale(1.1)',
                  },

                  '&.Mui-selected': {
                    backgroundColor: `${color} !important`,
                    transform: 'scale(1.15)',
                    outline: '2px solid',
                    outlineColor: 'var(--color-accent)',
                    outlineOffset: '2px',
                    '&:hover': {
                      backgroundColor: `${color} !important`,
                    },
                  },
                }}
              />
            </Tooltip>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
