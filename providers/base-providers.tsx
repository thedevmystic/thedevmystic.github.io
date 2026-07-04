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
 * @file base-provider.tsx
 * @description Basic providers for the application.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { ReactNode } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { createTokenProvider } from 'next-tokens';

import { theme } from '@styles/theme';

/* =============================================================================================
    Theme Provider
   --------------------------------------------------------------------------------------------- */

export type Theme =
  'light' | 'dark' | 'high-contrast-light' | 'high-contrast-dark' | 'sepia' | 'system';

const { Provider: ThemeProvider, useToken: useTheme } = createTokenProvider<Theme>({
  storageKey: 'theme',
  attribute: 'data-theme',
  defaultToken: 'system',
  enableSystem: true,
  enableColorScheme: true,
  tokens: ['light', 'dark', 'high-contrast-light', 'high-contrast-dark', 'sepia', 'system'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    Accent Provider
   --------------------------------------------------------------------------------------------- */

export type Accent = 'blue' | 'red' | 'green' | 'yellow' | 'pink';

const { Provider: AccentProvider, useToken: useAccent } = createTokenProvider<Accent>({
  storageKey: 'accent',
  attribute: 'data-accent',
  defaultToken: 'blue',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['blue', 'red', 'green', 'yellow', 'pink'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    Motion Provider
   --------------------------------------------------------------------------------------------- */

export type Motion = 'system' | 'reduced';

const { Provider: MotionProvider, useToken: useMotion } = createTokenProvider<Motion>({
  storageKey: 'motion',
  attribute: 'data-motion',
  defaultToken: 'system',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['system', 'reduced'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    Content Density Provider
   --------------------------------------------------------------------------------------------- */

export type ContentDensity = 'compact' | 'comfortable' | 'spacious';

const { Provider: ContentDensityProvider, useToken: useContentDensity } =
  createTokenProvider<ContentDensity>({
    storageKey: 'content-density',
    attribute: 'data-density',
    defaultToken: 'comfortable',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['compact', 'comfortable', 'spacious'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Content Width Provider
   --------------------------------------------------------------------------------------------- */

export type ContentWidth = 'narrow' | 'standard' | 'wide';

const { Provider: ContentWidthProvider, useToken: useContentWidth } =
  createTokenProvider<ContentWidth>({
    storageKey: 'content-width',
    attribute: 'data-width',
    defaultToken: 'standard',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['narrow', 'standard', 'wide'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Font Provider
   --------------------------------------------------------------------------------------------- */

export type Font = 'sans' | 'serif' | 'comic' | 'def-sans' | 'def-serif';

const { Provider: FontProvider, useToken: useFont } = createTokenProvider<Font>({
  storageKey: 'font',
  attribute: 'data-font',
  defaultToken: 'sans',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['sans', 'serif', 'comic', 'def-sans', 'def-serif'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    Font Size Provider
   --------------------------------------------------------------------------------------------- */

export type FontSize = 'small' | 'normal' | 'large' | 'xlarge';

const { Provider: FontSizeProvider, useToken: useFontSize } = createTokenProvider<FontSize>({
  storageKey: 'font-size',
  attribute: 'data-font-size',
  defaultToken: 'normal',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['small', 'normal', 'large', 'xlarge'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    MUI Theme Provider
   --------------------------------------------------------------------------------------------- */

const MuiThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

/* =============================================================================================
    Base Providers
   --------------------------------------------------------------------------------------------- */

export const BaseProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <AccentProvider>
        <MotionProvider>
          <ContentDensityProvider>
            <ContentWidthProvider>
              <FontProvider>
                <FontSizeProvider>
                  <MuiThemeProviderWrapper>{children}</MuiThemeProviderWrapper>
                </FontSizeProvider>
              </FontProvider>
            </ContentWidthProvider>
          </ContentDensityProvider>
        </MotionProvider>
      </AccentProvider>
    </ThemeProvider>
  );
};

/* Export only hooks */
export { useTheme, useAccent, useMotion, useContentDensity, useContentWidth, useFont, useFontSize };
