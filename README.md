# My Portfolio made while GeekSalon WebExpert Cource

My Portfolio Demo 👉 *[Github PagesのURLを記載]*

(ここから上の行は、自分で編集してポートフォリオサイトの紹介にしてください。)

# ポートフォリオ製作課題テンプレート

GeekSalon WebExpert コースのポートフォリオ製作課題ためのテンプレートです。

# このテンプレートを使う方法

1. 右上の`Use this template`をクリックしてください。

<img src="https://docs.github.com/assets/images/help/repository/use-this-template-button.png" width="640">

2. `repository name`を`my-portfolio`で作成してください。

<img src="https://docs.github.com/assets/images/help/repository/create-repository-owner.png" width="640">

3. 作成したレポジトリの右上の`Clone`から URL をコピーしてください。

<img src="https://docs.github.com/assets/images/help/repository/https-url-clone.png" width="640">

4. ターミナルを使って、`webex`ディレクトリで clone します。

```zsh
$ cd ~/webex
$ git clone コピーしたURL
```

5. VS Code で開いて作業しましょう。🚀

```zsh
$ cd my-portfolio
$ code .
```

# 作業方法

このレポジトリをクローンして、VS Code で開き、`index.html`と`style.css`と`main.js`それぞれにコーディングしてください。

```zsh
$ cd webex/my-portfolio
```

Git を活用するとコーディングに役立ちます。

## Git で Github に保存する方法

```zsh
$ git add .
$ git commit -m "コミットメッセージ"
$ git push origin master
```

## 最後にコミットした状態まで戻す方法

以下のコマンドを実行すると最後にコミットした時点まで戻ります。

```zsh
$ git checkout .
```

**⚠️ コミットしていない変更が消える危険な作業なので、軽い変更で試してみてから、重要なところで使うことをオススメします**

## Github Pages で公開する方法

サイトが完成したら、Github Pages を使ってデプロイします。

1. このレポジトリの`settings`を開く

<img src="https://pages.github.com/images/repo-settings@2x.png" width="640">

2. `settings`にある`Github Pages`の設定で Source を`None`から`origin/master`に変更して`Save`する。

<img src="https://pages.github.com/images/launch-theme-chooser@2x.png" width="640">

3. 表示された URL にアクセスしてデプロイされているか、確認したら完了。🎉🎉
