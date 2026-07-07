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
 * @description Entry point for the providers module, exporting all provider components for use in
 *              the application as a single provider.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseProviders } from './base-providers';
import { BatchScript } from './batch-script';
import { CodeProviders } from './code-providers';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseProviders>
      <CodeProviders>{children}</CodeProviders>
    </BaseProviders>
  );
};

export { BatchScript };
