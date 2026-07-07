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
 * @file ui-toggles.tsx
 * @description Code settings panel toggles for ui elements.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, Divider, Switch } from '@mui/material';

import {
  useEnableCodeLineWrap,
  useEnableCodeLabel,
  useEnableLineNumbers,
  useEnableCodeCopyButton,
} from '@providers/code-providers';

export default function CodeToggles() {
  const { setToken: setEnableCodeLineWrap } = useEnableCodeLineWrap();
  const { setToken: setEnableCodeLabel } = useEnableCodeLabel();
  const { setToken: setEnableLineNumbers } = useEnableLineNumbers();
  const { setToken: setEnableCodeCopyButton } = useEnableCodeCopyButton();

  const handleToggleCodeLineWrap = (checked: boolean) => {
    if (checked) {
      setEnableCodeLineWrap('on');
    } else {
      setEnableCodeLineWrap('off');
    }
  };

  const handleToggleCodeLabel = (checked: boolean) => {
    if (checked) {
      setEnableCodeLabel('on');
    } else {
      setEnableCodeLabel('off');
    }
  };

  const handleToggleLineNumbers = (checked: boolean) => {
    if (checked) {
      setEnableLineNumbers('on');
    } else {
      setEnableLineNumbers('off');
    }
  };

  const handleToggleCodeCopyButton = (checked: boolean) => {
    if (checked) {
      setEnableCodeCopyButton('on');
    } else {
      setEnableCodeCopyButton('off');
    }
  };

  return (
    <>
      {/* Line Wrap Toggle */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          py: 1,
          overflow: 'visible',
        }}
      >
        <Typography variant="body2">Wrap Lines</Typography>
        <Switch
          checked={useEnableCodeLineWrap().token === 'on'}
          onChange={(e) => handleToggleCodeLineWrap(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Wrap lines' } }}
        />
      </Box>

      <Divider />

      {/* Language Label Toggle */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          py: 1,
          overflow: 'visible',
        }}
      >
        <Typography variant="body2">Show Language Label</Typography>
        <Switch
          checked={useEnableCodeLabel().token === 'on'}
          onChange={(e) => handleToggleCodeLabel(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Show language label' } }}
        />
      </Box>

      <Divider />

      {/* Line Numbers Toggle */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          py: 1,
          overflow: 'visible',
        }}
      >
        <Typography variant="body2">Show Line Numbers</Typography>
        <Switch
          checked={useEnableLineNumbers().token === 'on'}
          onChange={(e) => handleToggleLineNumbers(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Show line numbers' } }}
        />
      </Box>

      <Divider />

      {/* Code Copy Button Toggle */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 64,
          py: 1,
          overflow: 'visible',
        }}
      >
        <Typography variant="body2">Show Copy Button</Typography>
        <Switch
          checked={useEnableCodeCopyButton().token === 'on'}
          onChange={(e) => handleToggleCodeCopyButton(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Show copy button' } }}
        />
      </Box>
    </>
  );
}
