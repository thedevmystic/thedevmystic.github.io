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
 * @file font-size-slider.tsx
 * @description Setting panel component for toggling font size.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, Slider } from '@mui/material';

import { useFontSize } from '@providers/base-providers';

import type { FontSize } from '@providers/base-providers';

const FONT_SIZES: FontSize[] = ['small', 'normal', 'large', 'xlarge'];

const marks = FONT_SIZES.map((size, index) => ({
  value: index,
  label: size.charAt(0).toUpperCase() + size.slice(1),
}));

export default function FontSizeSlider() {
  const { token: fontSize, setToken: setFontSize } = useFontSize();

  const currentSliderValue = FONT_SIZES.indexOf(fontSize ?? 'normal');

  const handleFontSizeChange = (_event: Event, value: number | number[]) => {
    setFontSize(FONT_SIZES[value as number] as FontSize);
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
        <Typography variant="body2" id="font-size-label">
          Font Size
        </Typography>
        <Slider
          aria-labelledby="font-size-label"
          value={currentSliderValue}
          onChange={handleFontSizeChange}
          marks={marks}
          step={null}
          min={0}
          max={FONT_SIZES.length - 1}
          valueLabelDisplay="off"
          sx={{
            width: 200,
          }}
        />
      </Box>
    </Box>
  );
}
