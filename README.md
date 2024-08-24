# 使い方
## 前提
nodeのインストールが済んでいることが前提です
## 環境構築
1. このリポジトリをクローンし、npm i
2. .envファイルをルート階層に作成し、必要情報を記入
```CHANNNEL_ID=""
DISCORD_BOT_TOKEN=""
GUILD_ID=""
PODCAST=""
VC1=""
VC2=""
VC3=""
VC4=""
VC5=""
```

3. 分けるvcの数をindex.js4行目の```const VC_amount = 2;```書き換え
3. 今いるvcをindex.js5行目の```const NowVc = process.env.VC1;```書き換え
4. npm run startで分けられる！！
