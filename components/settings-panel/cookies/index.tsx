/**
 * Copyright 2026-present Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
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
 * @description Cookies/Privacy settings panel component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Typography, Divider, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

import AnalyticsOptOut from './analytics-opt-out';
import CookiesToggles from './cookies-toggles';
import ExportData from './export-data';

export default function CodeSettingsPanel() {
  return (
    <>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Cookies Preferences
      </Typography>
      <CookiesToggles />
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
        Data
      </Typography>
      <AnalyticsOptOut />
      <Divider />
      <ExportData />

      <Typography
        variant="body2"
        sx={{
          mt: 3,
          display: 'block',
          textAlign: 'center',
        }}
      >
        <MuiLink
          component={NextLink}
          href="/legal/cookies"
          underline="hover"
          sx={{
            color: 'text.secondary',
            fontSize: '0.8125rem',
          }}
        >
          Learn more about cookies
        </MuiLink>
      </Typography>
    </>
  );
}
