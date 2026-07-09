/**
 * Copyright 2026-present Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * ------------------------------------------------------------------------------------------------
 *
 * @file export-data.tsx
 * @description Export user data settings panel component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, Button } from '@mui/material';

import exportUserData from '@lib/export-user-data';

export default function ExportData() {
  // currently not async
  const handleExport = () => {
    try {
      exportUserData();
    } catch (error) {
      console.error('Failed to export user data:', error);
    }
  };

  return (
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
      <Box>
        <Typography variant="body2">Export Personal Data</Typography>
      </Box>
      <Button variant="outlined" color="primary" onClick={handleExport}>
        Export
      </Button>
    </Box>
  );
}
