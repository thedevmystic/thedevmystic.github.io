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
 * @file index.ts
 * @description Code block element to render code.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodeBlockView } from './code-block-view';
import { getHighlighter } from './highlighter';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = async ({ code, language }: CodeBlockProps) => {
  const highlighter = await getHighlighter();
  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: 'css-variables',
  });

  return <CodeBlockView html={html} code={code} language={language} />;
};

export default CodeBlock;
