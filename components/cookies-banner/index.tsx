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
 * @description GTag component + Cookie Settings banner for tracking consent and events in the application.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect, useState } from 'react';

import { Box, Button, Fade, Link as MuiLink, Stack, Switch, Typography } from '@mui/material';
import Cookies from 'js-cookie';

import useIsMounted from '@hooks/use-is-mounted';
import { gtag_init, gtag_update_consent } from '@lib/gtag';
import {
  useAnalyticsCookies,
  useMarketingCookies,
  useThirdPartyCookies,
  useAnalyticsOptOut,
} from '@providers/cookies-providers';

type ConsentBannerState = 'shown' | 'not-shown';
type CookiePrefState = 'enabled' | 'disabled';
type BannerView = 'default' | 'customize';

interface CookieDraftPrefs {
  analytics: boolean;
  marketing: boolean;
  thirdParty: boolean;
}

const CONSENT_COOKIE_NAME = 'shown-consent-banner';
const CONSENT_COOKIE_OPTIONS = { expires: 365, path: '/' };

export default function CookiesBanner({ nonce }: { nonce?: string }) {
  const [analyticsCookiesState, setAnalyticsCookiesState] = useAnalyticsCookies();
  const [marketingCookiesState, setMarketingCookiesState] = useMarketingCookies();
  const [thirdPartyCookiesState, setThirdPartyCookiesState] = useThirdPartyCookies();
  const [optOutState] = useAnalyticsOptOut();
  const isMounted = useIsMounted();

  const [bannerOpen, setBannerOpen] = useState(false);
  const [view, setView] = useState<BannerView>('default');
  const [draftPrefs, setDraftPrefs] = useState<CookieDraftPrefs>({
    analytics: false,
    marketing: false,
    thirdParty: false,
  });

  useEffect(() => {
    const state: ConsentBannerState =
      (Cookies.get(CONSENT_COOKIE_NAME) as ConsentBannerState) || 'not-shown';
    setBannerOpen(state !== 'shown');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    gtag_init({
      analytics: analyticsCookiesState === 'enabled',
      marketing: marketingCookiesState === 'enabled',
      optedOut: optOutState === 'opted-out',
      nonce: nonce,
    });
  }, [analyticsCookiesState, marketingCookiesState, optOutState]);

  const persistConsentShown = () => {
    Cookies.set(CONSENT_COOKIE_NAME, 'shown', CONSENT_COOKIE_OPTIONS);
  };

  const applyConsent = (prefs: CookiePrefState) => {
    setAnalyticsCookiesState(prefs);
    setMarketingCookiesState(prefs);
    setThirdPartyCookiesState(prefs);
    persistConsentShown();
    setBannerOpen(false);
    setView('default');
    gtag_update_consent({
      analytics: prefs === 'enabled',
      marketing: prefs === 'enabled',
    });
  };

  const handleAccept = () => applyConsent('enabled');

  const handleReject = () => applyConsent('disabled');

  const handleOpenCustomize = () => {
    setDraftPrefs({
      analytics: analyticsCookiesState === 'enabled',
      marketing: marketingCookiesState === 'enabled',
      thirdParty: thirdPartyCookiesState === 'enabled',
    });
    setView('customize');
  };

  const handleSavePreferences = () => {
    setAnalyticsCookiesState(draftPrefs.analytics ? 'enabled' : 'disabled');
    setMarketingCookiesState(draftPrefs.marketing ? 'enabled' : 'disabled');
    setThirdPartyCookiesState(draftPrefs.thirdParty ? 'enabled' : 'disabled');
    persistConsentShown();
    setBannerOpen(false);
    setView('default');
    gtag_update_consent({
      analytics: draftPrefs.analytics,
      marketing: draftPrefs.marketing,
    });
  };

  const toggleDraftPref = (key: keyof CookieDraftPrefs) => {
    setDraftPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isMounted) return null;

  if (!bannerOpen) return null;

  return (
    <Fade in={bannerOpen}>
      <Box
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        sx={{
          position: 'fixed',
          bottom: { xs: 12, sm: 24 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(640px, calc(100% - 24px))',
          zIndex: 999,
          borderRadius: 2,
          p: { xs: 2.5, sm: 3 },
          backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 75%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--color-border)',
          transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            backgroundColor: 'var(--color-bg-feature)',
            border: '2px solid var(--color-border)',
          },
        }}
      >
        {view === 'default' ? (
          <Stack spacing={1.5}>
            <Typography id="cookie-banner-title" variant="subtitle1" sx={{ fontWeight: 600 }}>
              Cookie Settings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We use cookies to deliver and improve our services, analyze site usage, and if you
              agree, to customize or personalize your experience and market our services to you. You
              can read our Cookie Policy{' '}
              <MuiLink href="/legal/cookies" underline="hover">
                here
              </MuiLink>
              .
            </Typography>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1.5,
                justifyContent: 'flex-end',
                pt: 0.5,
              }}
            >
              <Button variant="outlined" color="secondary" onClick={handleOpenCustomize}>
                Customize
              </Button>
              <Button variant="outlined" onClick={handleReject}>
                Reject
              </Button>
              <Button variant="contained" onClick={handleAccept}>
                Accept
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Typography id="cookie-banner-title" variant="subtitle1" sx={{ fontWeight: 600 }}>
              Customize Cookie Preferences
            </Typography>

            <Stack spacing={1}>
              <CookieToggleRow
                label="Essential"
                description="Required for the site to function. Always on."
                checked
              />
              <CookieToggleRow
                label="Analytics"
                description="Helps us understand how the site is used."
                checked={draftPrefs.analytics}
                onChange={() => toggleDraftPref('analytics')}
              />
              <CookieToggleRow
                label="Marketing"
                description="Used to tailor and measure marketing efforts."
                checked={draftPrefs.marketing}
                onChange={() => toggleDraftPref('marketing')}
              />
              <CookieToggleRow
                label="Third-Party"
                description="Enables third-party embeds and integrations."
                checked={draftPrefs.thirdParty}
                onChange={() => toggleDraftPref('thirdParty')}
              />
            </Stack>

            <Stack
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1.5,
                justifyContent: 'flex-end',
                pt: 0.5,
              }}
            >
              <Button variant="outlined" color="secondary" onClick={() => setView('default')}>
                Back
              </Button>
              <Button variant="contained" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </Stack>
          </Stack>
        )}
      </Box>
    </Fade>
  );
}

interface CookieToggleRowProps {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

function CookieToggleRow({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: CookieToggleRowProps) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,

        py: 1,
        px: 1.5,
        borderRadius: 2,
        backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 50%, transparent)',
      }}
    >
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Switch
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        slotProps={{ input: { 'aria-label': `${label} cookies` } }}
        sx={{ overflow: 'visible' }}
      />
    </Stack>
  );
}
