// Проверка ключа Tavily. Запуск: node test_tavily.mjs "запрос"
import { readFileSync } from "node:fs";

function loadEnv(path = ".env") {
  const out = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}

const env = loadEnv();
const key = env.TAVILY_API_KEY;
if (!key || key === "PASTE_YOUR_TAVILY_KEY_HERE") {
  console.error("TAVILY_API_KEY не задан в .env");
  process.exit(1);
}

const query = process.argv[2] ?? "Что такое Tavily API";

const res = await fetch("https://api.tavily.com/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
  body: JSON.stringify({ query, max_results: 3, include_answer: true }),
});

if (!res.ok) {
  console.error("HTTP", res.status, res.statusText);
  console.error((await res.text()).slice(0, 500));
  process.exit(1);
}

const data = await res.json();
console.log("OK. Ключ рабочий.\n");
console.log("Запрос:", query);
if (data.answer) console.log("\nОтвет:", data.answer);
console.log("\nИсточники:");
for (const r of data.results ?? []) console.log(" -", r.title, "|", r.url);
