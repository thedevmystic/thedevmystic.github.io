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
 * @file cookies-toggles.tsx
 * @description Cookies toggles settings panel component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { Box, Typography, Divider, Switch } from '@mui/material';

import { gtag_update_consent } from '@lib/gtag';
import {
  useAnalyticsCookies,
  useMarketingCookies,
  useThirdPartyCookies,
} from '@providers/cookies-providers';

export default function CookiesToggles() {
  const [analyticsCookies, setAnalyticsCookies] = useAnalyticsCookies();
  const [marketingCookies, setMarketingCookies] = useMarketingCookies();
  const [thirdPartyCookies, setThirdPartyCookies] = useThirdPartyCookies();

  const handleToggleAnalyticsCookies = (checked: boolean) => {
    if (checked) {
      setAnalyticsCookies('enabled');
    } else {
      setAnalyticsCookies('disabled');
    }
    gtag_update_consent({ analytics: checked, marketing: marketingCookies === 'enabled' });
  };

  const handleToggleMarketingCookies = (checked: boolean) => {
    if (checked) {
      setMarketingCookies('enabled');
    } else {
      setMarketingCookies('disabled');
    }
    gtag_update_consent({ analytics: analyticsCookies === 'enabled', marketing: checked });
  };

  const handleToggleThirdCookies = (checked: boolean) => {
    if (checked) {
      setThirdPartyCookies('enabled');
    } else {
      setThirdPartyCookies('disabled');
    }
  };

  return (
    <>
      {/* Essential Cookies Toggle (Always on) */}
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
        <Typography variant="body2">Essential Cookies (Required)</Typography>
        <Switch
          checked={true}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Essential Cookies' } }}
        />
      </Box>

      <Divider />

      {/* Analytics Cookies Toggle */}
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
        <Typography variant="body2">Analytics Cookies</Typography>
        <Switch
          checked={analyticsCookies === 'enabled'}
          onChange={(e) => handleToggleAnalyticsCookies(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Analytics Cookies' } }}
        />
      </Box>

      <Divider />

      {/* Marketing Cookies Toggle */}
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
        <Typography variant="body2">Marketing Cookies</Typography>
        <Switch
          checked={marketingCookies === 'enabled'}
          onChange={(e) => handleToggleMarketingCookies(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Marketing Cookies' } }}
        />
      </Box>

      <Divider />

      {/* Third-Party Cookies Toggle */}
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
        <Typography variant="body2">Third-Party Cookies</Typography>
        <Switch
          checked={thirdPartyCookies === 'enabled'}
          onChange={(e) => handleToggleThirdCookies(e.target.checked)}
          color="primary"
          slotProps={{ input: { 'aria-label': 'Third-Party Cookies' } }}
        />
      </Box>
    </>
  );
}
