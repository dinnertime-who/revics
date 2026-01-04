# Wrangler(cloudflare cli) 명령어 정리

## 1. KV

```bash
wrangler kv namespace create <NAME>
```

## 2. D1

```bash
wrangler d1 create <DATABASE_NAME>
```

## 3. R2

```bash
wrangler r2 bucket create <BUCKET_NAME>
```

## 4. Vectorize

```bash
wrangler vectorize create <INDEX_NAME> --dimensions=1536 --metric=cosine
# 주요 옵션: --dimensions (벡터 크기), --metric (cosine, euclidean, dot-product 중 선택).
```
