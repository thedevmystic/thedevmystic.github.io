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
 * @file code-block-view.tsx
 * @description Main code block element that actually renders the code.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  useEnableCodeLabel,
  useEnableCodeCopyButton,
  useEnableLineNumbers,
} from '@providers/code-providers';
import { CopyButton } from './copy-button';

interface CodeBlockViewProps {
  html: string;
  code: string;
  language: string;
}

const LABELS = {
  python: 'Python',
  cpp: 'C++',
  c: 'C',
  bash: 'Bash',
  json: 'JSON',
} as const;

export const CodeBlockView = ({ html, code, language }: CodeBlockViewProps) => {
  const { token: enableCodeLabel } = useEnableCodeLabel();
  const { token: enableCodeCopyButton } = useEnableCodeCopyButton();
  const { token: enableLineNumbers } = useEnableLineNumbers();

  const showHeader = enableCodeLabel === 'on' || enableCodeCopyButton === 'on';

  return (
    <Box
      sx={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--code-font-size)',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'var(--shiki-background)',
        color: 'var(--shiki-foreground)',
        border: '1px solid var(--color-border)',

        '[data-theme="high-contrast-dark"] &, [data-theme="high-contrast-light"] &': {
          border: '2px solid var(--color-border)',
        },
      }}
    >
      {showHeader && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0.5,
            paddingLeft: 1.5,
            paddingRight: 1,
            background: 'transparent',
          }}
        >
          {enableCodeLabel === 'on' ? (
            <Typography
              variant="caption"
              component="span"
              sx={{
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                fontSize: 'var(--code-font-size-label)',
                alignItems: 'center',
                opacity: 0.7,
                letterSpacing: '0.05em',

                '[data-theme="high-contrast-dark"] &, [data-theme="high-contrast-light"] &': {
                  opacity: 1,
                },
              }}
            >
              {LABELS[language as keyof typeof LABELS] || language}
            </Typography>
          ) : (
            <span />
          )}

          {enableCodeCopyButton === 'on' && <CopyButton code={code} />}
        </Box>
      )}

      <Box
        className={enableLineNumbers === 'on' ? 'code-block--numbered' : undefined}
        sx={{
          background: 'transparent',

          '& pre, & code': {
            fontFamily: 'var(--font-mono)',
          },

          '& pre': {
            margin: 0,
            padding: 1,
            paddingTop: showHeader ? 0 : 1,
            overflowX: 'auto',
            background: 'transparent !important',
            color: 'inherit',
          },

          '[data-enable-code-line-wrap="on"] &': {
            '& pre': {
              whiteSpace: 'pre-wrap',
              overflowWrap: 'break-word',
              overflowX: 'hidden',
            },
          },

          '& code': {
            fontSize: 'var(--code-font-size)',
            lineHeight: 'var(--code-line-height)',
          },

          '&.code-block--numbered .line': {
            counterIncrement: 'line',
            display: 'inline-block',
            width: '100%',
          },

          '&.code-block--numbered pre code': {
            counterReset: 'line',
          },

          '&.code-block--numbered .line::before': {
            content: 'counter(line)',
            display: 'inline-block',
            width: '1em',
            marginRight: 2,
            textAlign: 'right',
            opacity: 0.4,
            userSelect: 'none',

            '[data-theme="high-contrast-dark"] &, [data-theme="high-contrast-light"] &': {
              opacity: 0.9,
            },
          },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  );
};
