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
 * @file theme.ts
 * @description Configuration file for MUI theme settings.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import type { Shadows } from '@mui/material/styles';

// Add custom color schemes to MUI's theme typings
declare module '@mui/material/styles' {
  interface ColorSchemeOverrides {
    'high-contrast-light'?: true;
    'high-contrast-dark'?: true;
    sepia?: true;
  }
}

const baseTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: '[data-theme="%s"]',
    nativeColor: true,
  },

  spacing: 'var(--spacing-unit)',

  // MUI Typography
  typography: {
    fontFamily: 'var(--font)',

    // Headings
    h1: {
      fontFamily: 'var(--font)',
      fontSize: '2.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font)',
      fontSize: '2rem',
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font)',
      fontSize: '1.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font)',
      fontSize: '1.5rem',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'var(--font)',
      fontSize: '1.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'var(--font)',
      fontSize: '1.0625rem',
      lineHeight: 1.35,
      letterSpacing: '0em',
      fontWeight: 500,
    },

    // Subtitles
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontWeight: 500,
      color: 'var(--color-text-primary)',
    },
    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.4,
      fontWeight: 500,
      letterSpacing: '0.01em',
      color: 'var(--color-text-secondary)',
    },

    // Body text
    body1: {
      fontSize: '1rem',
      lineHeight: 'var(--line-height-body)',
      fontWeight: 400,
      color: 'var(--color-text-primary)',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 'calc(var(--line-height-body) * 0.95)',
      fontWeight: 400,
      color: 'var(--color-text-secondary)',
    },

    // Captions
    caption: {
      fontSize: '0.75rem',
      lineHeight: 'calc(var(--line-height-body) * 0.90)',
      fontWeight: 400,
      color: 'var(--color-text-secondary)',
    },

    // Overline
    overline: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
    },
  },

  // Color Schemes for light and dark palettes.
  colorSchemes: {
    light: {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          active: 'var(--color-action-active)',
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
    dark: {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          active: 'var(--color-action-active)',
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
    'high-contrast-light': {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          active: 'var(--color-action-active)',
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
    'high-contrast-dark': {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          active: 'var(--color-action-active)',
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
    sepia: {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          active: 'var(--color-action-active)',
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
  },
  shadows: [
    'none',
    'var(--shadow-sm)',
    'var(--shadow-md)',
    'var(--shadow-lg)',
    'var(--shadow-xl)',
    ...Array(20).fill('var(--shadow-xl)'),
  ] as Shadows,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 'var(--font-size)',

          fontVariantCaps: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantPosition: 'normal',
          fontKerning: 'normal',

          overflowWrap: 'break-word',
          hyphens: 'auto',

          overscrollBehaviorY: 'none',
          touchAction: 'auto',
          scrollBehavior: 'smooth',
          WebkitTapHighlightColor: 'transparent',

          minHeight: '100dvh',

          scrollbarWidth: 'thin',
          scrollbarColor: 'color-mix(in srgb, var(--color-accent) 50%, transparent) transparent',
        },

        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'color-mix(in srgb, var(--color-accent) 50%, transparent) transparent',
          boxSizing: 'border-box',
        },
        '*::before, *::after': {
          boxSizing: 'border-box',
        },

        // Webkit Scrollbar Styles
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 50%, transparent)',
          borderRadius: '8px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 75%, transparent)',
        },

        '*::selection': {
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 40%, transparent)',
          color: 'inherit',
        },

        // Body
        body: {
          fontFamily: 'var(--font)',
          fontSize: '1rem',
          margin: 0,
          padding: 0,
          lineHeight: 'var(--line-height-body)',
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          backgroundColor: 'var(--color-bg-surface)',
        },

        // Headings
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'var(--font)',
          fontStyle: 'normal',
          color: 'var(--color-text-head)',
        },

        // Links
        a: {
          color: 'var(--color-accent)',
          textDecoration: 'underline',
          textUnderlineOffset: '0.125em',
          textDecorationColor: 'var(--color-accent)',
          textDecorationStyle: 'solid',
          textDecorationThickness: '1px',
          transition: 'text-decoration-thickness 150ms ease-in-out',
          '&:hover': {
            textDecorationThickness: '2px',
          },
        },
        'a[target="_blank"]::after, a[target="_external"]::after': {
          display: 'inline-block',
          content: '"\\2197"',
          fontSize: '0.75em',
          textDecoration: 'none',
          transform: 'translateY(-0.125em)',
          marginLeft: '0.25em',
        },

        // Horizontal Rules
        hr: {
          border: 'none',
          borderTop: '1px solid var(--color-divider)',
          margin: 'calc(var(--spacing-unit) * 3) 0', // default to 8 * 3 = 24px (1.5rem)
        },

        // Blockquotes
        blockquote: {
          margin: 'calc(var(--spacing-unit) * 3) 0', // default to 8 * 3 = 24px (1.5rem)
          paddingLeft: '1.25rem',
          borderLeft: '4px solid var(--color-accent)',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          lineHeight: 'var(--line-height-body)',
          fontSize: '1rem',

          '& p': {
            margin: 0,
          },

          '& cite': {
            display: 'block',
            marginTop: '0.5rem',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            '&::before': {
              content: '"\\2014\\00A0"',
            },
          },
        },

        // Focus and Focus Visible Styles
        '*:focus, *:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px var(--color-bg-surface), 0 0 0 4px var(--color-focus-outline)',
        },
        '@supports selector(:focus-visible)': {
          '*:focus': { boxShadow: 'none' },
        },

        // Accessibility
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto !important' },
          '*, *::before, *::after': {
            transition: 'none !important',
            animation: 'none !important',
          },
        },
        '[data-motion="reduced"]': {
          html: { scrollBehavior: 'auto !important' },
          '*, *::before, *::after': {
            transition: 'none !important',
            animation: 'none !important',
          },
        },
        '@media (forced-colors: active)': {
          '*:focus, *:focus-visible': {
            forcedColorAdjust: 'none',
            outline: '2px solid Highlight !important',
            backgroundColor: 'transparent !important',
            borderColor: 'transparent !important',
          },
          a: { color: 'LinkText' },
        },
        '@media (max-width: 48rem)': {
          html: { touchAction: 'manipulation' },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none !important',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        slotProps: {
          paper: {
            elevation: 0,
          },
        },
      },
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(12px)',
            webkitBackdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          '[data-theme="high-contrast-light"] & .MuiBackdrop-root, [data-theme="high-contrast-dark"] & .MuiBackdrop-root':
            {
              backdropFilter: 'none',
              webkitBackdropFilter: 'none',
            },
        },
        paper: {
          backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 50%, transparent)',
          border: '1px solid var(--color-border)',

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-bg-feature)',
            border: '2px solid var(--color-border)',
          },
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        slotProps: {
          paper: {
            elevation: 0,
          },
        },
      },
      styleOverrides: {
        paper: {
          marginTop: 8,
          borderRadius: 8,
          backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 50%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--color-border)',

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-bg-feature)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            border: '2px solid var(--color-border)',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          margin: '2px 4px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        input: {
          padding: '8px 12px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          minHeight: 'unset',
          padding: '8px 12px',
        },
        icon: {
          transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        iconOpen: {
          transform: 'rotate(180deg)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 40,
          height: 20,
          padding: 0,
          display: 'flex',
          overflow: 'visible',
          alignItems: 'center',
          justifyContent: 'center',
        },
        switchBase: {
          padding: 2,
          color: 'var(--color-switch-thumb-unchecked)',
          '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: 'var(--color-switch-thumb-checked)',
            '& + .MuiSwitch-track': {
              backgroundColor: 'var(--color-accent)',
              opacity: '0.9',
            },
          },
          '&.Mui-disabled': {
            color: 'var(--color-switch-thumb-disabled)',
            '& + .MuiSwitch-track': {
              backgroundColor: 'var(--color-switch-track-disabled)',
              opacity: '0.5',
            },
          },
        },
        thumb: {
          width: 16,
          height: 16,
          boxShadow: 'none',
          color: 'var(--color-switch-thumb-unchecked)',
          opacity: '0.8',
          '.Mui-checked &': {
            opacity: '0.9',
            backgroundColor: 'var(--color-switch-thumb-checked)',
          },
          '.Mui-disabled &': {
            opacity: '0.5',
          },
          transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        track: {
          borderRadius: 10,
          backgroundColor: 'var(--color-switch-track-unchecked)',
          border: '1px solid var(--color-border)',
          opacity: '0.8',
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          padding: 2,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: 'var(--color-text-secondary) !important',
          borderColor: 'var(--color-border) !important',
          backgroundColor: 'transparent',
          borderRadius: 8,
          width: 30,
          height: 30,
          padding: 0,
          transition:
            'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            backgroundColor: 'var(--color-action-hover) !important',
          },

          '&.Mui-selected': {
            color: 'var(--color-text-primary) !important',
            backgroundColor: 'var(--color-action-selected) !important',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'var(--color-action-active) !important',
            },
          },

          '&.Mui-disabled': {
            color: 'var(--color-text-disabled) !important',
            borderColor: 'var(--color-divider) !important',
            opacity: 0.5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '6px 12px',
          transition:
            'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        // Primary
        contained: {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg-surface)',
          border: '1px solid transparent',

          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--color-accent) 85%, black)',
          },
          '&:active': {
            backgroundColor: 'color-mix(in srgb, var(--color-accent) 75%, black)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'var(--color-action-disabled-bg)',
            color: 'var(--color-text-disabled)',
          },

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            border: '2px solid var(--color-accent)',
          },
        },
        // Secondary
        outlined: {
          backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 50%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border)',

          '&:hover': {
            backgroundColor: 'var(--color-action-hover)',
            border: '1px solid var(--color-accent)',
          },
          '&:active': {
            backgroundColor: 'var(--color-action-selected)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: 'var(--color-text-disabled)',
            border: '1px solid var(--color-divider)',
          },

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-bg-feature)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            border: '2px solid var(--color-border)',
          },
        },
        // Ghost
        text: {
          backgroundColor: 'transparent',
          color: 'var(--color-text-secondary)',
          border: '1px solid transparent',

          '&:hover': {
            backgroundColor: 'var(--color-action-hover)',
            color: 'var(--color-text-primary)',
          },
          '&:active': {
            backgroundColor: 'var(--color-action-selected)',
          },
          '&.Mui-disabled': {
            color: 'var(--color-text-disabled)',
          },
        },
      },
    },
    MuiSlider: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          height: 4,
          padding: '8px 0',
        },
        rail: {
          height: 4,
          borderRadius: 4,
          opacity: 1,
          backgroundColor:
            'color-mix(in srgb, var(--color-switch-track-unchecked) 50%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--color-border)',

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-switch-track-unchecked)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
          },
        },
        track: {
          height: 4,
          border: 'none',
          borderRadius: 4,
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 60%, transparent)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-accent)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
          },
        },
        thumb: {
          width: 14,
          height: 14,
          backgroundColor: 'var(--color-bg-surface)',
          border: '2px solid var(--color-accent)',
          boxShadow: 'none',
          transition:
            'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 6px color-mix(in srgb, var(--color-accent) 16%, transparent)',
          },
          '&.Mui-active': {
            boxShadow: '0 0 0 8px color-mix(in srgb, var(--color-accent) 16%, transparent)',
          },
        },
        mark: {
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: 'var(--color-border)',
          opacity: 1,

          '&.MuiSlider-markActive': {
            backgroundColor: 'color-mix(in srgb, var(--color-accent) 60%, transparent)',
          },
        },
        markLabel: {
          fontSize: '0.75rem',
          lineHeight: 'calc(var(--line-height-body) * 0.90)',
          fontWeight: 400,
          color: 'var(--color-text-secondary)',
          top: 18,
        },
        valueLabel: {
          backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 75%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          color: 'var(--color-text-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          padding: '2px 8px',
          fontSize: '0.75rem',
          fontWeight: 500,

          '&:before': {
            display: 'none',
          },

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-bg-feature)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            border: '2px solid var(--color-border)',
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: false,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: 'color-mix(in srgb, var(--color-bg-feature) 75%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          color: 'var(--color-text-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          padding: '4px 8px',
          fontSize: '0.75rem',

          '[data-theme="high-contrast-light"] &, [data-theme="high-contrast-dark"] &': {
            backgroundColor: 'var(--color-bg-feature)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            border: '2px solid var(--color-border)',
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
