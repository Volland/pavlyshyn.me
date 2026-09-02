#!/bin/bash
CDN="https://d2sofvawe08yqg.cloudfront.net"
slugs="fact-basedagents clarityforge graphengineering 97- yerbamatehaking-ua qi-book qi-au clarityengineer agenticworldmodels ladybugdb graphduck typedbforedgeaiagents metagraphforaiagents cypher103withladybugdb beyondcontextgraphs dependenttypesdttlogicholforaiagentreadyknowledgegraphs edgeai-pocket-knowledgegraphs-on-user-device time-aware-ai-memory sst-4-agenticai philosophical-wednesdays-with-ai-powered-architect ai-agents-memory sovereign-ai-agents rustygraphs-airedy max-tsugi-and-radio rusty-graph"
for s in $slugs; do
  out="public/covers/$s.jpg"
  code=$(curl -sL -A "Mozilla/5.0" -o "$out" -w "%{http_code}" "$CDN/$s/s_featured2x")
  size=$(wc -c < "$out" | tr -d ' ')
  if [ "$code" != "200" ] || [ "$size" -lt 2000 ]; then rm -f "$out"; echo "MISS $s ($code, ${size}b)"; else echo "ok   $s ${size}b"; fi
done
