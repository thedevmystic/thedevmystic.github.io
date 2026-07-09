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
 * @file cookies-provider.tsx
 * @description Cookies providers for the application.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import Cookies from 'js-cookie';

export type CookiesState = 'enabled' | 'disabled';
export type OptOutState = 'opted-in' | 'opted-out';

interface CookiesContextProps {
  analyticsCookies: CookiesState;
  setAnalyticsCookies: (state: CookiesState) => void;
  marketingCookies: CookiesState;
  setMarketingCookies: (state: CookiesState) => void;
  thirdPartyCookies: CookiesState;
  setThirdPartyCookies: (state: CookiesState) => void;
  analyticsOptOut: OptOutState;
  setAnalyticsOptOut: (state: OptOutState) => void;
}

const CookiesContext = createContext<CookiesContextProps | undefined>(undefined);

const COOKIES_CONFIG = { expires: 365, path: '/' };

export const CookiesProviders = ({ children }: { children: ReactNode }) => {
  const [analyticsCookies, _setAnalyticsCookies] = useState<CookiesState>('disabled');
  const [marketingCookies, _setMarketingCookies] = useState<CookiesState>('disabled');
  const [thirdPartyCookies, _setThirdPartyCookies] = useState<CookiesState>('disabled');
  const [analyticsOptOut, _setAnalyticsOptOut] = useState<OptOutState>('opted-in');

  useEffect(() => {
    _setAnalyticsCookies((Cookies.get('analytics-cookies') as CookiesState) || 'disabled');
    _setMarketingCookies((Cookies.get('marketing-cookies') as CookiesState) || 'disabled');
    _setThirdPartyCookies((Cookies.get('third-party-cookies') as CookiesState) || 'disabled');
    _setAnalyticsOptOut((Cookies.get('analytics-opt-out') as OptOutState) || 'opted-in');
  }, []);

  const setAnalyticsCookies = (state: CookiesState) => {
    _setAnalyticsCookies(state);
    Cookies.set('analytics-cookies', state, COOKIES_CONFIG);
  };

  const setMarketingCookies = (state: CookiesState) => {
    _setMarketingCookies(state);
    Cookies.set('marketing-cookies', state, COOKIES_CONFIG);
  };

  const setThirdPartyCookies = (state: CookiesState) => {
    _setThirdPartyCookies(state);
    Cookies.set('third-party-cookies', state, COOKIES_CONFIG);
  };

  const setAnalyticsOptOut = (state: OptOutState) => {
    _setAnalyticsOptOut(state);
    Cookies.set('analytics-opt-out', state, COOKIES_CONFIG);
  };

  return (
    <CookiesContext.Provider
      value={{
        analyticsCookies,
        setAnalyticsCookies,
        marketingCookies,
        setMarketingCookies,
        thirdPartyCookies,
        setThirdPartyCookies,
        analyticsOptOut,
        setAnalyticsOptOut,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
};

export function useAnalyticsCookies(): [CookiesState, (state: CookiesState) => void] {
  const context = useContext(CookiesContext);
  if (!context) throw new Error('useAnalyticsCookies must be used within CookiesProviders.');
  return [context.analyticsCookies, context.setAnalyticsCookies];
}

export function useMarketingCookies(): [CookiesState, (state: CookiesState) => void] {
  const context = useContext(CookiesContext);
  if (!context) throw new Error('useMarketingCookies must be used within CookiesProviders.');
  return [context.marketingCookies, context.setMarketingCookies];
}

export function useThirdPartyCookies(): [CookiesState, (state: CookiesState) => void] {
  const context = useContext(CookiesContext);
  if (!context) throw new Error('useThirdPartyCookies must be used within CookiesProviders.');
  return [context.thirdPartyCookies, context.setThirdPartyCookies];
}

export function useAnalyticsOptOut(): [OptOutState, (state: OptOutState) => void] {
  const context = useContext(CookiesContext);
  if (!context) throw new Error('useAnalyticsOptOut must be used within OptOutProviders.');
  return [context.analyticsOptOut, context.setAnalyticsOptOut];
}
