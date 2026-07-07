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
 * @file index.tsx
 * @description Code catagory settings panel component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Typography, Divider } from '@mui/material';

import CodeFontSizeSlider from './code-font-size-slider';
import CodeFontToggle from './code-font-toggle';
import CodeThemeToggle from './code-theme-toggle';
import CodeToggles from './ui-toggles';

export default function CodeSettingsPanel() {
  return (
    <>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Code
      </Typography>
      <CodeThemeToggle />
      <Divider />
      <CodeFontToggle />
      <Divider />
      <CodeFontSizeSlider />
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
        Toggles
      </Typography>
      <CodeToggles />
    </>
  );
}
