# 環境構築

## Next.jsのインストール

```bash
# install next.js
npx create-next-app@latest .
# interactive experience (options)
> TypeScript ... Yes
> ESLint ... Yes
> Tailwind CSS ... No
> `src/` directory ... Yes
> App Router ... Yes
> import alias ... No
```

## ESLintの設定

`.eslintrc.json`のルールを確認します。Next.jsであれば、すでに設定されているはずです。

ルールは`strict`にします。

```json
{
  "extends": "next/core-web-vitals"
}
```

## Prettierのインストール・設定

```bash
# install
npm install -D prettier eslint-config-prettier
# create a config file
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

オプションは公式を参考に設定します。

<https://prettier.io/docs/en/options.html>

ESLintとPrettierが干渉し合わないように、`.eslintrc.json`に設定項目を追記します。

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

## VSCode拡張項目のインストール、settings.jsonの設定

ESLintとPrettierの拡張項目をインストールします。

ファイルを保存したタイミングで自動的にPrettierが実行されるように、`.vscode/settings.json`に設定項目を追記します。

ファイルは自動で保存されるようにします。

ESLintは静的解析を、Prettierはコードフォーマットを担当してもらうようにしました。

jsonファイルもフォーマットできるよう設定しています。

```json
{
  "files.autoSave": "onFocusChange",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true
  }
}
```

## Material UIのインストール、設定

```bash
npm install @mui/material-nextjs @emotion/cache
```

`src/app/layout.tsx`で`AppRouterCacheProvider`をインポートし、`<body>`タグ配下をすべて`<AppRouterCacheProvider>`で囲います。

```tsx
// 略
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
// 略
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
```
