# CLAUDE.md

This file provides guidance to Claude Code when working in this project.

## Project Overview

<!-- Describe your project here -->

## Development Setup

<!-- Add setup instructions here -->

## Key Conventions

<!-- Add project conventions here -->

## Язык общения

- Всегда отвечать пользователю **только на русском языке**, независимо от языка запроса.

## Среда работы

- Пользователь **всегда работает в десктопном приложении Claude** (Code tab). Не предлагать открывать терминал и запускать `claude` — он уже внутри. Интерактивные slash-команды (`/skill-creator`, `/permissions` и т.п.) нужно запускать в **новом чате** того же проекта, а не через терминал.

## Разработка сайта

- При создании сайта всегда использовать скилл **frontend-design**.
- Если в проекте есть папка **Бренд-дизайн** и в ней есть данные — использовать их как основу для стиля, палитры и типографики.

## Поиск и исследование

- **Анализ сайтов конкурентов и рынка** — всегда использовать Tavily (ключ в `.env` → `TAVILY_API_KEY`).
- **Всё остальное** — встроенный поиск Claude.
