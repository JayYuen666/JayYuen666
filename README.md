<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4D6BFE,100:658EFF&height=180&section=header&text=JayYuen&fontSize=42&fontColor=ffffff&desc=dsh%20plugin%20developer&descAlignY=65" alt="JayYuen banner" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=4D6BFE&center=true&vCenter=true&width=600&lines=TypeScript+%2F+Node.js+%2F+React;Building+DeepSeek+Harness+(dsh)+plugins" alt="Typing SVG" />

**TypeScript developer building DeepSeek Harness (dsh) plugins · 成都**

[GitHub](https://github.com/JayYuen666) · [Blog](https://blog.cqwkkj.cn) · [Email](mailto:cqwkkj@gmail.com) · [X](https://twitter.com/JayYuen666)

</div>

## 关于我 / About

毕业于重庆三峡科技大学（CSUST），计算机科学与技术专业。现在专注 DeepSeek Harness（dsh）插件开发，用 TypeScript / Node.js / React 把开发者工具做成可安装的插件，必要时配 Python sidecar。目前已发布 10 个插件，覆盖安全拦截、质量门禁、上下文观测、会话恢复、语义检索与网页抓取。

Graduated from Chongqing Sanxia University of Science and Technology (CSUST), majoring in Computer Science and Technology. I build installable plugins for DeepSeek Harness (dsh) in TypeScript / Node.js / React, with Python sidecars when a workload calls for it. Ten plugins published so far, covering guardrails, quality gates, context observation, session recovery, semantic search and web scraping.

## 技术栈 / Tech Stack

<img src="https://skillicons.dev/icons?i=typescript,nodejs,react,python,vitest,githubactions" alt="TypeScript, Node.js, React, Python, Vitest, GitHub Actions" />

## 精选插件 / Featured plugins

| 插件 | 说明 / What it does |
| --- | --- |
| [`dsh-ocr-review`](https://github.com/JayYuen666/dsh-ocr-review) | 把外部 `ocr`（open-code-review）CLI 接成 7 个模型工具和 1 个设置卡，插件只负责发现、校验与驱动。<br>The external `ocr` CLI as seven dsh model tools and one settings card. |
| [`dsh-scrapling`](https://github.com/JayYuen666/dsh-scrapling) | Scrapling 网页抓取：JS 渲染、结构化提取和后台爬虫，统一由一个常驻 Python sidecar 承载。<br>Scrapling web scraping with JavaScript rendering, structured extraction and a background crawler behind one resident Python sidecar. |
| [`dsh-zvec-grep`](https://github.com/JayYuen666/dsh-zvec-grep) | 面向 dsh agent 的语义工作区搜索：本地 zg 索引上的 BM25 + 向量 + RRF，并给 grep / rg 加了一道搜索优先门禁。<br>Semantic workspace search for dsh agents: hybrid BM25 + vector + RRF over a local zg index, with a search-first gate on grep and rg. |
| [`dsh-session-rescue`](https://github.com/JayYuen666/dsh-session-rescue) | 回合失败后会话自己续上：瞬态失败自动续跑、截断后自动接着写、开放 todo 自动追赶，输入框下方还有手动救援入口。<br>Auto-resume after transient failures, auto-continue after truncation, catch-up for open todo lists, plus manual rescue actions below the input box. |
| [`dsh-danger-guard`](https://github.com/JayYuen666/dsh-danger-guard) | 危险 shell 命令与凭证编辑在派发前被物理拒绝。<br>Dangerous shell commands and credential edits, physically refused before dispatch. |

<details>
<summary>其余插件与资源 / More plugins</summary>

| 插件 | 说明 / What it does |
| --- | --- |
| [`dsh-quality-gate`](https://github.com/JayYuen666/dsh-quality-gate) | 回合结束时运行项目自己声明的检查；没跑过的检查不会被记为通过。<br>At turn end it runs the checks the project itself declares; a check that never ran is never recorded as passed. |
| [`dsh-ctx-observe`](https://github.com/JayYuen666/dsh-ctx-observe) | 观测每回合上下文用量，注入非强制的压缩建议，并把 token 流水落成 JSONL。<br>Observes per-turn context usage, injects a non-forcing compression hint and records token usage as JSONL. |
| [`dsh-dir-prep-organize`](https://github.com/JayYuen666/dsh-dir-prep-organize) | 输入框旁的两个按钮：结合当前目录改写草稿，以及在光标处插入角色模板。<br>Two buttons beside the chat input: rewrite the draft with the current directory in view, and insert a role template at the caret. |
| [`dsh-lesson-loop`](https://github.com/JayYuen666/dsh-lesson-loop) | 把守卫拒绝、门禁失败和人工点踩沉淀为项目教训；只有人工确认过的规则才会在会话开始时注入。<br>Guard denials, gate failures and human thumb-downs become project lessons; only a human-confirmed rule is injected at session start. |
| [`dsh-plugin-shared`](https://github.com/JayYuen666/dsh-plugin-shared) | dsh 插件家族共享库：工具事件记录表、卡片状态助手、统一设置卡 UI kit 与 locale 助手，供插件引用，不由用户启用。<br>The shared library behind the dsh plugin family: event tables, card state helpers, a settings-card UI kit and locale helpers. |
| [`awesome-dsh-plugin`](https://github.com/JayYuen666/awesome-dsh-plugin) | DSH 插件精选列表（fork / curated list），同时作为插件市场索引。 |

</details>

## 统计 / Stats

![GitHub metrics](./metrics.svg)

![Contribution heatmap](https://ghchart.rshah.org/4D6BFE/JayYuen666)

## 教育 / Education

Graduated from [Chongqing Sanxia University of Science and Technology (CSUST)](https://www.sanxiau.edu.cn/), Computer Science and Technology.
