## TypeScript 環境構築

1. npm の初期化  
   `npm init`
2. 関連パッケージのインストール(※)  
   `npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server`
3. webpack.config.js の作成と設定
4. tsconfig.json の作成と設定  
   `tsc --init`

## ESLint と Prettier の CI 環境を構築

1. パッケージのインストール
   `npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged`
