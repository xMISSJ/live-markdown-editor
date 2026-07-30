---
name: componentize-when-possible
description: Refactors repeated Vue/Nuxt template blocks into focused reusable components. Use when a file has repeated UI loops, mixed responsibilities, or large templates that can be split for clarity and reuse.
---

# Componentize When Possible

## Goal
Prefer extracting reusable components when it improves readability, maintainability, or reuse.

## When to Extract
- Repeated markup patterns appear in one or multiple files.
- A parent component handles both orchestration and detailed rendering.
- A `v-for` block contains substantial UI (headers, actions, nested sections, previews).
- A section has its own props/events boundary (clear input/output).

## When Not to Extract
- Tiny one-off markup (1-3 simple elements) with no reuse benefit.
- Extraction would create prop-drilling noise without improving clarity.
- The extracted piece would be less understandable than inlined code.

## Extraction Workflow
1. Identify repeated or heavy blocks and define a clear component responsibility.
2. Create a new component with typed props and emits.
3. Move rendering logic closest to where it is used, unless shared logic belongs in composables.
4. Keep parent component focused on state orchestration, routing, and high-level layout.
5. Preserve existing styling/tokens and behavior.
6. Run lint checks on edited files.

## Vue/Nuxt Defaults
- Use `<script setup lang="ts">`.
- Type props and emits explicitly.
- Prefer one component per semantic UI unit (list item, card, section, panel body).
- Keep component names descriptive (e.g. `MarkdownCheatsheetSection`).
