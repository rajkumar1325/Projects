# 🦅 Rewriting Project Claw Code

<div align="center">

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning%20In%20Progress-F59E0B?style=for-the-badge&logo=statuspage&logoColor=white)
![License](https://img.shields.io/badge/License-Educational-10B981?style=for-the-badge&logo=bookstack&logoColor=white)
![Author](https://img.shields.io/badge/Author-Raj%20Kumar-6366F1?style=for-the-badge&logo=github&logoColor=white)

<br/>

> **"The best way to understand a system is to build it yourself."**

*A personal deep-dive into the architecture of Claude Code — rebuilt from scratch in Python for learning and exploration.*

</div>

---

## 🧭 What Is This?

When the Claude Code source briefly surfaced online, I saw it as a rare window into how a **production-grade AI agent harness** is actually built — not from blog posts or docs, but from the real thing.

Rather than archiving what was exposed, I did something more interesting: I sat down and **ported the core architectural patterns to Python from scratch**, as a learning exercise.

This is **not a replacement** for Claude Code. It's my workbench for understanding it.

---

## 🎯 Goals

| # | Goal |
|---|------|
| 🔬 | Understand how AI agent harnesses structure tool calls and runtime context |
| 🔧 | Study how commands are wired and dispatched in a real AI coding assistant |
| 🧩 | Explore how multi-turn agent interactions manage state and memory |
| 🐍 | Translate TypeScript patterns into idiomatic Python |

---

## 🗂️ Repository Layout

```
claw-code/
│
├── 📁 src/                      # Python porting workspace
│   ├── __init__.py
│   ├── commands.py              # Command port metadata
│   ├── main.py                  # CLI entrypoint
│   ├── models.py                # Core dataclasses
│   ├── port_manifest.py         # Workspace structure summary
│   ├── query_engine.py          # Porting summary renderer
│   ├── task.py                  # Task primitives
│   └── tools.py                 # Tool port metadata
│
├── 📁 tests/                    # Verification suite
├── 📁 assets/                   # Images & media
└── 📄 README.md
```

---

## 🧱 Module Breakdown

<table>
<tr>
<td width="50%">

### 🗃️ `models.py`
Dataclasses representing subsystems, modules, and backlog state. The backbone of the port's data model.

</td>
<td width="50%">

### ⚙️ `commands.py`
Mirrors the original command inventory. Tracks which commands have been ported and their current state.

</td>
</tr>
<tr>
<td width="50%">

### 🛠️ `tools.py`
Python-side tool metadata — reflecting how Claude Code registers and exposes tools to the agent.

</td>
<td width="50%">

### 🔍 `query_engine.py`
Renders a live summary of the porting workspace — great for understanding overall progress at a glance.

</td>
</tr>
<tr>
<td width="50%">

### 📋 `port_manifest.py`
A structured map of the current Python workspace, mirroring the original file surface.

</td>
<td width="50%">

### 🚀 `main.py`
CLI entrypoint. Run commands to inspect the workspace, list modules, and audit parity.

</td>
</tr>
</table>

---

## ⚡ Quickstart

```bash
# Clone the repo
git clone https://github.com/rajkumar/claw-code.git
cd claw-code
```

```bash
# Render the Python porting summary
python3 -m src.main summary

# Print the current workspace manifest
python3 -m src.main manifest

# List current Python modules
python3 -m src.main subsystems --limit 16

# Run the test suite
python3 -m unittest discover -s tests -v

# Inspect command & tool inventories
python3 -m src.main commands --limit 10
python3 -m src.main tools --limit 10

# Parity audit (when archive is present locally)
python3 -m src.main parity-audit
```

---

## 📊 Parity Status

| Component | Status |
|-----------|--------|
| Root entry file surface | ✅ Mirrored |
| Top-level subsystem names | ✅ Mirrored |
| Command inventory | ✅ Mirrored |
| Tool inventory | ✅ Mirrored |
| Full runtime execution | 🔄 In Progress |
| TypeScript → Python parity | 🔄 In Progress |

> **Note:** This is a learning workspace, not a production system. Parity with the original TypeScript runtime is a stretch goal, not a requirement.

---

## 🧠 What I'm Learning

This project is my hands-on exploration of **harness engineering** — the craft of wiring AI agents to tools, managing execution loops, and building reliable multi-step workflows.

```
Agent Task Loop
      │
      ▼
  Tool Call ──► Tool Registry ──► Execute
      │                               │
      ▼                               ▼
  Context Manager          Result / Error Handler
      │
      ▼
  Next Iteration or Exit
```

Key concepts I'm studying through this project:
- 🔁 **Agent execution loops** — how tasks are persisted and resumed
- 📦 **Tool registration patterns** — how capabilities are exposed to the model
- 🧵 **Context threading** — how state flows across multi-turn interactions
- 🏗️ **Harness architecture** — how the scaffolding around an LLM is designed

---

## 🙋 About Me

**Raj Kumar** — Developer and lifelong learner, fascinated by AI systems, agent design, and what happens under the hood of tools like Claude Code.

This project is purely educational — built to understand, not to replicate.

---

## ⚠️ Disclaimer

> - This repository does **not** claim ownership of the original Claude Code source material.
> - This repository is **not affiliated with, endorsed by, or maintained by Anthropic**.
> - This is a personal learning project focused on understanding agent harness architecture.
> - No proprietary source code is stored or distributed here.
