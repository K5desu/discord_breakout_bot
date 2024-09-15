# 使い方
## 実行環境
`Node.js`, `npm`, `nvm`がインストールされていること。

## 環境設定と実行の準備
1. このリポジトリをクローンし、プロジェクトディレクトリのルートにて`npm i`
2. プロジェクトディレクトリのルートに`.env`を新規作成し、下記を書き込み、`""`のダブルクオーテーションの中にそれぞれのIDを記入する。

```
#DiscordのBotのToken
DISCORD_BOT_TOKEN=""
#該当のDiscordServerのID
GUILD_ID=""
#以下対応するチャンネルのIDを記入
PODCAST=""
VC1=""
VC2=""
VC3=""
VC4=""
VC5=""
#これらのGUILD_ID, 書くチャンネルのIDはDiscordを取得するにはユーザー設定にてDeveloperModeに変更する必要がある。
```

3. index.js4行目の`const VC_amount = 2;`の数字を分けるVCの数に適宜書き換える
4. index.js5行目の`const NowVc = process.env.VC1;`の末尾のVCxの部分今いるVCに適宜書き換える。
5. 最後に、`npm run start`でBotを起動、ユーザーの振り分けが実行されれる。
6. プログラムを終了させる際には、`Ctrl+C`で強制終了させる。
