# 環境構築

## Next.jsのインストール

```bash
npx create-next-app@latest .

> TypeScript ... Yes
> ESLint ... Yes
> Tailwind CSS ... No
> `src/` directory ... Yes
> App Router ... Yes
> import alias ... No
```

## ESLintの設定

ルールは`strict`にします。

```json
// .eslintrc.json
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
// .eslintrc.json
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
