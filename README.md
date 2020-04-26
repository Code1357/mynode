--- Node.js 練習 ---

* 概要
- 大量のリクエストを高速にさばく
- スレッドモデル（Apache) シングルスレッド形式
- スープ処理をブロックしないような記述が必要（ノンブロッキング）

* 公式サイト 
- nodejs.org
- https://nodejs.org/ja/

* 知識
- HTML/JavaScript 先に学習しておく必要あり
- MongoDB 先にinstallしておく必要あり
- Unixコマンド 参考：http://x68000.q-e-d.net/~68user/unix/genre.html

* 環境
- ローカル開発環境
- 192.168.33.72 これがローカル開発環境の目印

* Node.jsの記述
- 基本的にはJavaScriptと同様
- GUIでの操作でなく、window.やDOM(document).の操作はできないので注意が必要
- nodeの起動、 node と記述
- .exitで抜ける
- .helpでいくつかコマンドを確認する事ができる
- Unixコマンドを使用 > pwdでディレクトリの場所を確認しファイルを作成
- .jsファイルを作成し、エディタでコード記述
- 例えば、ファイル名.jsファイルにconsole.log("hello world");と記述
- 実行では、nodo ファイル名.js でEnterで実行 > hello world とコマンドラインの次に出力される

* ノンブロッキングな処理(記述),時間のかかりそうな処理はコールバック関数を使う

/*
setTimeout(function() {
    console.log("hello");
}, 1000);
console.log("world");
*/

上記を node ファイル名.js で実行すると、

world  // 1秒待たずに先に出力
hello  // 1秒に出力

という結果になる。

/*
const a = function() {
    console.log("hello");
} 
setTimeout(a, 1000);
console.log("world");
*/

でも同じ結果
------------------------------------
記述：
  setTimeout(処理内容,実行タイミング);

内容
  一定時間後に実行するように命令する
 （通常JavaScriptは上から順番に実行されるが、指定した時間に実行するので、処理を後回しにする事が可能）


* 簡単なWebサーバーを作る
ファイル名.js を準備
const http = require('http');
const server = http.createServer();
server .on('require', function(req, res)) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
});
server.listen(1337, '192.168.33.72');
console.log("server listening ...");

と記述し、

コマンドラインに
node server.js を記述で読み込み

ブラウザに、192.168.33.72:1337と記述で表示される

------------------------------------
記述：
　const 変数 = require( 'モジュール名' );

内容
　モジュール化されたJavaScriptを読み込む

------------------------------------
memo-4/26-sunday

*** Nodejs 学習 ***
-Node.js はnvm でバージョンの管理する必要がある
-理由：Node.jsのバージョン事に記述されたものが違うと、実行できない可能性がある。その際、nvmで管理しNode.jsのバージョンを切り替える事で対応が可能となる。

*まず、サーバーサイド(ubuntu)にnvm のインストール
-コマンド実行
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
-起動時に読み込まれる.bashrc を今すぐ読み込むためのコマンド実行
$ source ~/.bashrc
-続いてコマンド実行
$ nvm
-nvmのインストール完了
-nvm をversion up するには、以下コマンド実行
$ cd ~/.nvm
$ git pull origin master
$ source ~/.nvm/nvm.sh
$ nvm --version

*サーバーサイド(ubuntu)にnvmを使ってNode.jsをインストール
$ nvm install v14.0.0
$ nvm use V14.0.0 //利用するversion の固定

*Node 実行方法
-node とコマンド実行するだけ
-REPL の状態になる。REPL:ChromeのconsoleでJavaScriptを試した環境と同じようなもの。その場で実行して結果を表示するツール。これがconsoleで可能となる。
-REPL の終了方法
Ctrl + C を2度押す

*プロフラムをファイルに記述していく
-1.ディレクトリの作成
-2.ディレクトリの移動
-3.空ファイルの作成 
$ touch ファイル名.js


*** アルゴリズム ***
