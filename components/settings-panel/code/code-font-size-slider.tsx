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
 * @file code-font-size-slider.tsx
 * @description Setting panel component for toggling code font size.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, Slider } from '@mui/material';

import { useCodeFontSize } from '@providers/code-providers';

import type { CodeFontSize } from '@providers/code-providers';

const FONT_SIZES: CodeFontSize[] = ['small', 'normal', 'large', 'xlarge'];

const marks = FONT_SIZES.map((size, index) => ({
  value: index,
  label: size.charAt(0).toUpperCase() + size.slice(1),
}));

export default function CodeFontSizeSlider() {
  const { token: codeFontSize, setToken: setCodeFontSize } = useCodeFontSize();

  const currentSliderValue = FONT_SIZES.indexOf(codeFontSize ?? 'normal');

  const handleCodeFontSizeChange = (_event: Event, value: number | number[]) => {
    setCodeFontSize(FONT_SIZES[value as number] as CodeFontSize);
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
        <Typography variant="body2" id="code-font-size-label">
          Code Font Size
        </Typography>
        <Slider
          aria-labelledby="code-font-size-label"
          value={currentSliderValue}
          onChange={handleCodeFontSizeChange}
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
