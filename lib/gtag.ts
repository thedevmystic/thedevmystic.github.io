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
 * @file gtag.ts
 * @description GTag Analytics setup.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { isWindowUndefined } from '@utils/helpers';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

interface GTagPreferences {
  analytics?: boolean;
  marketing?: boolean;
  /* third-party can not be handled via gtag */
  optedOut?: boolean;
  nonce?: string;
}

const DEFAULT_PREFERENCES: Required<GTagPreferences> = {
  analytics: false,
  marketing: false,
  optedOut: false,
  nonce: '',
};

export function gtag_init(preferences: GTagPreferences) {
  if (!GA_MEASUREMENT_ID || isWindowUndefined()) return;

  const userPreferences = { ...DEFAULT_PREFERENCES, ...preferences };

  if (userPreferences.optedOut) {
    (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  }

  (window as any).dataLayer = (window as any).dataLayer || [];

  const pushArgs = (..._: any[]) => {
    (window as any).dataLayer.push(arguments);
  };

  // opt out overrides any preferences
  const analyticsEnabled = userPreferences.optedOut ? false : userPreferences.analytics;
  const marketingEnabled = userPreferences.optedOut ? false : userPreferences.marketing;

  pushArgs('consent', 'default', {
    analytics_storage: analyticsEnabled ? 'granted' : 'denied',
    ad_storage: marketingEnabled ? 'granted' : 'denied',
    ad_user_data: marketingEnabled ? 'granted' : 'denied',
    ad_personalization: marketingEnabled ? 'granted' : 'denied',
    wait_for_update: 500,
  });

  if (!userPreferences.optedOut) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    if (userPreferences.nonce) {
      script.nonce = userPreferences.nonce;
    }
    document.head.appendChild(script);

    pushArgs('js', new Date());
    pushArgs('config', GA_MEASUREMENT_ID);
  }
}

export function gtag_update_consent(preferences: GTagPreferences) {
  if (!GA_MEASUREMENT_ID || isWindowUndefined()) return;

  const userPreferences = { ...DEFAULT_PREFERENCES, ...preferences };

  // Update the opt-out status
  (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = userPreferences.optedOut;

  const pushArgs = (..._: any[]) => {
    (window as any).dataLayer.push(arguments);
  };

  // opt out overrides any preferences
  const analyticsEnabled = userPreferences.optedOut ? false : userPreferences.analytics;
  const marketingEnabled = userPreferences.optedOut ? false : userPreferences.marketing;

  // Update the consent userPreferences for analytics and marketing
  pushArgs('consent', 'update', {
    analytics_storage: analyticsEnabled ? 'granted' : 'denied',
    ad_storage: marketingEnabled ? 'granted' : 'denied',
    ad_user_data: marketingEnabled ? 'granted' : 'denied',
    ad_personalization: marketingEnabled ? 'granted' : 'denied',
  });

  if (analyticsEnabled || marketingEnabled) {
    pushArgs('config', GA_MEASUREMENT_ID);
  }
}
