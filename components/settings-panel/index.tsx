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
 * @description Master settings panel component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography, IconButton, Skeleton } from '@mui/material';

import useIsMounted from '@hooks/use-is-mounted';

import CodeSettingsPanel from './code';
import GeneralSettingsPanel from './general';

interface SettingsPanelProps {
  onClose?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'general', label: 'General', icon: <SettingsIcon fontSize="small" /> },
  { id: 'code', label: 'Code', icon: <CodeIcon fontSize="small" /> },
];

export default function SettingsPanel({ onClose }: SettingsPanelProps) {
  const isMounted = useIsMounted();
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0]!.id);

  if (!isMounted) {
    return (
      <Box sx={{ width: '100%', p: 3 }}>
        <Skeleton variant="text" width="30%" height={28} sx={{ mb: 2 }} />
        <Skeleton variant="rounded" width="100%" height={56} sx={{ mb: 1.5 }} />
        <Skeleton variant="rounded" width="60%" height={40} />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
          borderBottom: 1,
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Settings
        </Typography>
        {onClose && (
          <IconButton onClick={onClose} aria-label="close settings" size="small">
            <CloseIcon fontSize="small" color="secondary" />
          </IconButton>
        )}
      </Box>

      {/* Body: sidebar on desktop, horizontal pill tabs on mobile */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          overflow: 'hidden',
        }}
      >
        <Box
          component="nav"
          role="tablist"
          aria-label="Settings sections"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'column' },
            overflowX: { xs: 'auto', sm: 'visible' },
            flexShrink: 0,
            width: { xs: '100%', sm: 220 },
            gap: { xs: 1, sm: 0.5 },
            p: { xs: 1.5, sm: 2 },
            borderBottom: { xs: 1, sm: 0 },
            borderRight: { xs: 0, sm: 1 },
            borderColor: 'var(--color-divider) !important',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const selected = activeSection === item.id;
            return (
              <Box
                key={item.id}
                component="button"
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveSection(item.id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  flexShrink: 0,
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 14,
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                  color: selected ? 'text.primary' : 'text.secondary',
                  fontWeight: selected ? 500 : 400,
                  backgroundColor: selected ? 'action.selected' : 'transparent',
                  borderRadius: { xs: 999, sm: 1.5 },
                  px: { xs: 2, sm: 1.5 },
                  py: { xs: 0.75, sm: 1 },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                  {item.icon}
                </Box>
                {item.label}
              </Box>
            );
          })}
        </Box>

        <Box role="tabpanel" sx={{ flex: 1, overflowY: 'auto', p: { xs: 2, sm: 3 } }}>
          {activeSection === 'general' && <GeneralSettingsPanel />}
          {activeSection === 'code' && <CodeSettingsPanel />}
        </Box>
      </Box>
    </Box>
  );
}
