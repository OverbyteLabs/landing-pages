# Microsoft Repo Watch Report — 2026-04-28

> Coverage window: **2026-04-21 → 2026-04-28** (last 7 days)
> Repos monitored: [microsoft/vscode](https://github.com/microsoft/vscode) · [microsoft/TypeScript](https://github.com/microsoft/TypeScript) · [microsoft/playwright](https://github.com/microsoft/playwright)

---

## microsoft/vscode

### New Releases (last 7 days)

| Tag | Name | Published |
|-----|------|-----------|
| [1.117.0](https://github.com/microsoft/vscode/releases/tag/1.117.0) | 1.117.0 | 2026-04-22 |
| [v0.45.1](https://github.com/microsoft/vscode/releases/tag/v0.45.1) | copilot/0.45.1 | 2026-04-23 |

**Highlights:**
- **1.117.0** — Monthly stable release. Full changelog at <https://code.visualstudio.com/updates/v1_117>
- **copilot/0.45.1** — Bumps Copilot extension version; removes upgrade/plan branching; adds option to switch to Auto in weekly-limit messaging; updates labels.

### Notable Commits (last 7 days, up to 10)

| SHA | Message | Author | Date |
|-----|---------|--------|------|
| [4f2f275](https://github.com/microsoft/vscode/commit/4f2f275a95721cab3c5830f460d2a86615dd2626) | Agents: Enhance account menu UI and chat status tooltip | mrleemurray | 2026-04-28 |
| [8d97209](https://github.com/microsoft/vscode/commit/8d97209dc20dfbd60430243dbeac80149f87087a) | Add strongForeground color for enhanced text legibility | mrleemurray | 2026-04-28 |
| [d3b2cc9](https://github.com/microsoft/vscode/commit/d3b2cc9844f78af2b4405cd3355d73cb10474ad3) | Refactor titlebar action handling and improve CSS legibility for "Open in Agents" widget | mrleemurray | 2026-04-28 |
| [389fcc7](https://github.com/microsoft/vscode/commit/389fcc75413448ac329dd47d6672c664a7a29106) | inlineChat: make status placeholder registration a singleton (fixes #312792) | jrieken | 2026-04-28 |
| [ceb044c](https://github.com/microsoft/vscode/commit/ceb044c5c5ad24c552d9ea4456c7c2c773636afb) | Engineering - improve scheduled release check | lszomoru | 2026-04-28 |
| [0360932](https://github.com/microsoft/vscode/commit/036093272167f8cfee34932b668b6756ef743a4d) | Agents - more GitHub REST API cleanup | lszomoru | 2026-04-28 |
| [3b7bb5c](https://github.com/microsoft/vscode/commit/3b7bb5c284d7e29c63fc7730f0a765fc62d17ba3) | Refactor OpenInAgentsAction to support macOS and Windows for sibling app launch | mrleemurray | 2026-04-28 |
| [559812e](https://github.com/microsoft/vscode/commit/559812e7a95e30a53d4879d9c82b39031e7696fc) | Refactor titlebar action handling and improve CSS for "Open in Agents" widget | mrleemurray | 2026-04-28 |
| [ba3d653](https://github.com/microsoft/vscode/commit/ba3d653b010793892c30b8d4cbfde23349931594) | fix placeholder not showing up + inline chat progress border | justschen | 2026-04-28 |
| [5d68d6a](https://github.com/microsoft/vscode/commit/5d68d6ad88c1344ac0730ea0f77395a8fd67e893) | Remove opacity from "Open in Agents" icon filter for improved legibility | mrleemurray | 2026-04-28 |

### Merged PRs (last 7 days, up to 10)

| PR | Title | Merged |
|----|-------|--------|
| [#313001](https://github.com/microsoft/vscode/pull/313001) | Agents: Enhance account menu UI and chat status tooltip | 2026-04-28 |
| [#312993](https://github.com/microsoft/vscode/pull/312993) | Add strongForeground color for enhanced text legibility | 2026-04-28 |
| [#312984](https://github.com/microsoft/vscode/pull/312984) | Refactor titlebar action handling and improve CSS for "Open in Agents" widget | 2026-04-28 |
| [#312983](https://github.com/microsoft/vscode/pull/312983) | Engineering - improve scheduled release check | 2026-04-28 |
| [#312981](https://github.com/microsoft/vscode/pull/312981) | [cherry-pick] fix placeholder not showing up + inline chat progress border | 2026-04-28 |
| [#312979](https://github.com/microsoft/vscode/pull/312979) | fix placeholder not showing up + inline chat progress border | 2026-04-28 |
| [#312978](https://github.com/microsoft/vscode/pull/312978) | Agents - more GitHub REST API cleanup | 2026-04-28 |
| [#312975](https://github.com/microsoft/vscode/pull/312975) | inlineChat: make status placeholder registration a singleton | 2026-04-28 |
| [#312974](https://github.com/microsoft/vscode/pull/312974) | profiling: replace v8-inspect-profiler with chrome-remote-interface | 2026-04-28 |
| [#312946](https://github.com/microsoft/vscode/pull/312946) | Clean up some parameters and stuff in Claude | 2026-04-28 |

**Summary:** VS Code had two releases this week — the **1.117.0** stable monthly release and a Copilot extension patch (0.45.1). Development activity was very high, with all 10 sampled commits landing on 2026-04-28 alone. The main themes were Agent/Copilot UI polish ("Open in Agents" button, account menu, chat status tooltip), inline-chat bug fixes (singleton placeholder registration), GitHub REST API cleanup in the Agents layer, and a profiling module modernisation that swaps `v8-inspect-profiler` for `chrome-remote-interface`.

---

## microsoft/TypeScript

### New Releases (last 7 days)

No new releases in the last 7 days.

> The most recent release was **TypeScript 6.0.3** on 2026-04-16 (just outside the window). See the [release blog post](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) for details.

### Notable Commits (last 7 days, up to 10)

| SHA | Message | Author | Date |
|-----|---------|--------|------|
| [f350b52](https://github.com/microsoft/TypeScript/commit/f350b52331494b68c90ab02e2b6d0828d2a22a74) | Redirect Claude Code to read AGENTS.md | RyanCavanaugh | 2026-04-27 |
| [af087e5](https://github.com/microsoft/TypeScript/commit/af087e57513096fcaf93efca1e535cf45cc245e2) | docs: improve Math.sign JSDoc grammar and clarity | SkyCoderAakash | 2026-04-27 |

### Merged PRs (last 7 days, up to 10)

| PR | Title | Merged |
|----|-------|--------|
| [#63446](https://github.com/microsoft/TypeScript/pull/63446) | Redirect Claude Code to read AGENTS.md | 2026-04-27 |
| [#63433](https://github.com/microsoft/TypeScript/pull/63433) | docs: improve Math.sign JSDoc grammar and clarity | 2026-04-27 |

**Summary:** A quiet week for TypeScript. Only two commits and two merged PRs landed in the window. Both were housekeeping changes — adding an `AGENTS.md` pointer for Claude Code, and improving a JSDoc comment on `Math.sign`. Active open PRs worth watching include [#63439](https://github.com/microsoft/TypeScript/pull/63439) (sort JSDoc `@param` suggestions by declaration order) and [#63434](https://github.com/microsoft/TypeScript/pull/63434) (allow bracket-notation enum access as computed property name in type positions).

---

## microsoft/playwright

### New Releases (last 7 days)

No new releases in the last 7 days.

> The most recent releases were **v1.59.1** and **v1.59.0** on 2026-04-01. v1.59.0 introduced the new `page.screencast` API, `browser.bind()` for multi-client browser sharing, a CLI debugger for agents, and `await using` async-disposable support.

### Notable Commits (last 7 days, up to 10)

| SHA | Message | Author | Date |
|-----|---------|--------|------|
| [39109eb](https://github.com/microsoft/playwright/commit/39109eb29ea8b40533459e21641e4681637500fa) | feat(test runner): use happy eyeballs in webServer port check | Skn0tt | 2026-04-28 |
| [7ab999](https://github.com/microsoft/playwright/commit/7ab999186f84912a557fddd121fca6918a8ddf49) | chore: migrate to TypeScript 6.0 | pavelfeldman | 2026-04-28 |
| [6c31c20](https://github.com/microsoft/playwright/commit/6c31c20d8e5801f945767922429cff79d6fbde03) | fix(mcp): surface unhandled rejections instead of crashing the server | pavelfeldman | 2026-04-28 |
| [78a77a7](https://github.com/microsoft/playwright/commit/78a77a70d99c1696bb044c44561b8fcab1782555) | feat(mcp): refactor network into requests + request commands | yury-s | 2026-04-27 |
| [47b75ea](https://github.com/microsoft/playwright/commit/47b75eab94d680a5b5b181aea3096b4de72cb21a) | chore(extension): mark 0.2.0 | yury-s | 2026-04-27 |
| [ef64d92](https://github.com/microsoft/playwright/commit/ef64d929cfeef195787796f19aabc3f6a18b24dc) | fix(test-runner): reject workers=0 or negative value | devareddy05 | 2026-04-27 |
| [05deb5d](https://github.com/microsoft/playwright/commit/05deb5d44937d92cef7a99b4cbecb40f1c275dcf) | chore: skip open() under coding agents | Skn0tt | 2026-04-27 |
| [b5fc6ce](https://github.com/microsoft/playwright/commit/b5fc6ced7f195fa201f8326197636811b7d3cc2c) | fix(ct): use receiver-free mount typings | rotu | 2026-04-27 |
| [aae58ae](https://github.com/microsoft/playwright/commit/aae58ae65a3e982fae05fefe88655fdaa37f017b) | feat(firefox-beta): roll to r1509 | automation bot | 2026-04-27 |
| [3cc8e9a](https://github.com/microsoft/playwright/commit/3cc8e9a6d3118b415d74d8b180252b7f9107edc7) | test: roll stable-test-runner to 1.60.0-alpha-2026-04-27 | automation bot | 2026-04-27 |

### Merged PRs (last 7 days, up to 10)

| PR | Title | Merged |
|----|-------|--------|
| [#40458](https://github.com/microsoft/playwright/pull/40458) | feat(test runner): use happy eyeballs in webServer port check | 2026-04-28 |
| [#40452](https://github.com/microsoft/playwright/pull/40452) | fix(mcp): surface unhandled rejections instead of crashing the server | 2026-04-28 |
| [#40429](https://github.com/microsoft/playwright/pull/40429) | chore: migrate to TypeScript 6.0 | 2026-04-28 |
| [#40447](https://github.com/microsoft/playwright/pull/40447) | feat(mcp): refactor network into requests + request commands | 2026-04-27 |
| [#40445](https://github.com/microsoft/playwright/pull/40445) | chore(extension): mark 0.2.0 | 2026-04-27 |

**Summary:** Playwright had active MCP (Model Context Protocol) improvements this week. Key merges include a new network-inspection command set in `playwright-cli` ([#40447](https://github.com/microsoft/playwright/pull/40447)), an MCP stability fix that prevents unhandled rejections from crashing the server ([#40452](https://github.com/microsoft/playwright/pull/40452)), and the project's migration to TypeScript 6.0 ([#40429](https://github.com/microsoft/playwright/pull/40429)). The test runner also got a Happy Eyeballs–based port-probe to eliminate 2-minute TCP hangs on WSL ([#40458](https://github.com/microsoft/playwright/pull/40458)).

---

*Report generated by GitHub Copilot agent on 2026-04-28. Data sourced from the GitHub REST API.*
