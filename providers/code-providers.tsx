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
 * @description Code providers for the application.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { ReactNode } from 'react';

import { createTokenProvider } from 'next-tokens';

/* =============================================================================================
    Code Theme Provider
   --------------------------------------------------------------------------------------------- */

/* These sync with global app theme: light or dark */
export type CodeTheme = 'gruvbox' | 'dracula' | 'github' | 'nord' | 'solarized';

const { Provider: CodeThemeProvider, useToken: useCodeTheme } = createTokenProvider<CodeTheme>({
  storageKey: 'code-theme',
  attribute: 'data-code-theme',
  defaultToken: 'gruvbox',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['gruvbox', 'dracula', 'github', 'nord', 'solarized'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    Code Font Provider
   --------------------------------------------------------------------------------------------- */

export type CodeFont = 'jb-mono' | 'fira-code' | 'source-code-pro' | 'ubuntu-mono' | 'def-mono';

const { Provider: CodeFontProvider, useToken: useCodeFont } = createTokenProvider<CodeFont>({
  storageKey: 'code-font',
  attribute: 'data-font-mono',
  defaultToken: 'jb-mono',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['jb-mono', 'fira-code', 'source-code-pro', 'ubuntu-mono', 'def-mono'],
  disableTransitionOnChange: false,
  skipScript: true,
});

/* =============================================================================================
    Code Font Size Provider
   --------------------------------------------------------------------------------------------- */

export type CodeFontSize = 'small' | 'normal' | 'large' | 'xlarge';

const { Provider: CodeFontSizeProvider, useToken: useCodeFontSize } =
  createTokenProvider<CodeFontSize>({
    storageKey: 'code-font-size',
    attribute: 'data-code-font-size',
    defaultToken: 'normal',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['small', 'normal', 'large', 'xlarge'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Code Line Wrap Provider
   --------------------------------------------------------------------------------------------- */

export type EnableCodeLineWrap = 'on' | 'off';

const { Provider: EnableCodeLineWrap, useToken: useEnableCodeLineWrap } =
  createTokenProvider<EnableCodeLineWrap>({
    storageKey: 'enable-code-line-wrap',
    attribute: 'data-enable-code-line-wrap',
    defaultToken: 'off',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['on', 'off'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Code Label Provider
   --------------------------------------------------------------------------------------------- */

export type EnableCodeLabel = 'on' | 'off';

const { Provider: EnableCodeLabel, useToken: useEnableCodeLabel } =
  createTokenProvider<EnableCodeLabel>({
    storageKey: 'enable-code-label',
    attribute: 'data-enable-code-label',
    defaultToken: 'on',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['on', 'off'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Code Copy Button Provider
   --------------------------------------------------------------------------------------------- */

export type EnableCodeCopyButton = 'on' | 'off';

const { Provider: EnableCodeCopyButton, useToken: useEnableCodeCopyButton } =
  createTokenProvider<EnableCodeCopyButton>({
    storageKey: 'enable-code-copy-button',
    attribute: 'data-enable-code-copy-button',
    defaultToken: 'on',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['on', 'off'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Line Numbers Provider
   --------------------------------------------------------------------------------------------- */

export type EnableLineNumbers = 'on' | 'off';

const { Provider: EnableLineNumbers, useToken: useEnableLineNumbers } =
  createTokenProvider<EnableLineNumbers>({
    storageKey: 'enable-code-line-numbers',
    attribute: 'data-enable-code-line-numbers',
    defaultToken: 'on',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['on', 'off'],
    disableTransitionOnChange: false,
    skipScript: true,
  });

/* =============================================================================================
    Main Code Provider
   --------------------------------------------------------------------------------------------- */

export function CodeProviders({ children }: { children: ReactNode }) {
  return (
    <CodeThemeProvider>
      <CodeFontProvider>
        <CodeFontSizeProvider>
          <EnableCodeLineWrap>
            <EnableCodeLabel>
              <EnableCodeCopyButton>
                <EnableLineNumbers>{children}</EnableLineNumbers>
              </EnableCodeCopyButton>
            </EnableCodeLabel>
          </EnableCodeLineWrap>
        </CodeFontSizeProvider>
      </CodeFontProvider>
    </CodeThemeProvider>
  );
}

export {
  useEnableLineNumbers,
  useCodeTheme,
  useCodeFont,
  useEnableCodeLineWrap,
  useCodeFontSize,
  useEnableCodeLabel,
  useEnableCodeCopyButton,
};
