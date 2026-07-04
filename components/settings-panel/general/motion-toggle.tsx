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
 * @file motion-toggle.tsx
 * @description Setting panel component for toggling motion preferences.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import MotionPhotosOffIcon from '@mui/icons-material/MotionPhotosOff';
import { Box, Typography, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';

import { useMotion } from '@providers/base-providers';

import type { Motion } from '@providers/base-providers';

export default function MotionToggle() {
  const { token: motion, setToken: setMotion } = useMotion();

  const handleMotionChange = (_event: React.MouseEvent<HTMLElement>, motion: Motion | null) => {
    if (motion === null) return;
    setMotion(motion);
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="body2">Motion</Typography>
          <Typography variant="caption" color="text.secondary">
            Reduce animations and motion effects.
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={motion}
          exclusive
          onChange={handleMotionChange}
          size="small"
          aria-label="Motion selection"
        >
          <ToggleButton value="system" aria-label="System motion preference">
            <Tooltip title="System">
              <MotionPhotosAutoIcon fontSize="small" />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="disabled" aria-label="Reduced motion preference">
            <Tooltip title="Reduced">
              <MotionPhotosOffIcon fontSize="small" />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
