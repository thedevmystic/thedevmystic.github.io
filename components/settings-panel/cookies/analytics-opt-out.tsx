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
 * @file analytics-opt-out.tsx
 * @description Analytics opt out toggles settings panel component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, Switch } from '@mui/material';

import {
  useAnalyticsCookies,
  useMarketingCookies,
  useThirdPartyCookies,
  useAnalyticsOptOut,
} from '@providers/cookies-providers';

export default function CookiesToggles() {
  const [_analyticsCookiesState, setAnalyticsCookiesState] = useAnalyticsCookies();
  const [_marketingCookiesState, setMarketingCookiesState] = useMarketingCookies();
  const [_thirdPartyCookiesState, setThirdPartyCookiesState] = useThirdPartyCookies();
  const [analyticsOptOut, setAnalyticsOptOut] = useAnalyticsOptOut();

  const handleToggleAnalyticsOptOut = (checked: boolean) => {
    if (checked) {
      setAnalyticsOptOut('opted-out');
      setAnalyticsCookiesState('disabled');
      setMarketingCookiesState('disabled');
      setThirdPartyCookiesState('disabled');
    } else {
      setAnalyticsOptOut('opted-in');
    }
  };

  return (
    <>
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
        <Typography variant="body2">Analytics Opt Out</Typography>
        <Switch
          checked={analyticsOptOut === 'opted-out'}
          onChange={(e) => handleToggleAnalyticsOptOut(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Analytics Opt Out' } }}
        />
      </Box>
    </>
  );
}
