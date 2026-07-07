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
 * @file copy-button.tsx
 * @description Copy button element.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface CopyButtonProps {
  code: string;
}

export const CopyButton = ({ code }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip
      title={copied ? 'Copied' : 'Copy'}
      slotProps={{
        tooltip: {
          sx: {
            marginTop: '-2px !important',
            backgroundColor: 'transparent',
            padding: 0.25,
          },
        },
      }}
    >
      <IconButton
        size="small"
        onClick={handleCopy}
        disableRipple
        aria-label="Copy code"
        sx={{
          position: 'static',
          fontSize: 'var(--code-font-size-copy-button)',
          opacity: 0.5,
          color: 'text.secondary',

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            opacity: 1,
          },
        }}
      >
        {copied ? <CheckIcon fontSize="inherit" /> : <ContentCopyIcon fontSize="inherit" />}
      </IconButton>
    </Tooltip>
  );
};
