# hugoでsassを使いたくてgulpを導入したので、gulpfile.jsとディレクトリ構成を公開

初めてのマークダウン記法なので、緊張してますはい。
pullとかpushとかよろしくです。（←よくわかってない　笑）

## 導入

### DLかgit cloneしてね
$ git clone https://github.com/egushinnosuke/hugo-gulp-setting.git
もしくは
download

このフォルダ自体がすでにプロジェクトディレクトなので、hugo-gulp-setting-masterを適当な名前にご自由に変えてください。

### DLして変更する点は３箇所
themesディレクトリの中にmy_themeがありますが、そこがgulp sassやjsのビルド先のテーマになっています。
テーマの名前をmy_themeから変えてもよいです。

例えばorenothemeとしたら、変更するのは３箇所、

1.themesのディレクトリしたのmy_themeの名前をorenothemeに変更
2.gulpfile.jsの20行目のmy_themeをorenothemeに変更
3.config.tomlの4行目をorenothemeに変更

そうです。たったこれだけ。

## srcの中にjsとscssディレクトリがあるよ
srcフォルダの中のファイルをゴニョゴニョします。

## 動かし方
1. コマンドラインで　$ hugo server
2. コマンドラインの別タブで　$ gulp
that's it.　これだけ

おっと、その前に $ npm install　しておいてください。

### srcのsassとjsを変更するだけ
htmlなどは直接テーマ内のテンプレートを変更してください。
hugoがwatchしてくれています。

image minとか使うのであれば、gulpfile.jsをゴニョってください。coffeeとかも同様です。
gulpはワードプレスくらい。hugoは初めてなので、よくわかってないことありますが、何かあれば、連絡ください！押忍！

###　注意点
cssファイルに同じ名前を使っているとchromeだとキャッシュしているファイルが呼び出されてしまいましたので、開発者ツールのnetworkからdisable cacheをチェックしておくとよいです。

## gulpfile.jsの中のタスク、hugorebuildについて

これは、テンプレートディレクトリのhtmlファイルの１つだけを上書き保存してるだけのタスクです。
なんでこんなタスクがあるのかというと、hugo serverでwatchしてる時に、staticsのcssファイルだけの更新では、ブラウザがリロードされず、表示が変更されなかったからです。

一方、テーマ内のindex.htmlを変更するとbuildされてreloadされるので、gulpのタスクに追加しています。