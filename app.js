/**
 * process.argv[2] が 0 や null や undefined などの Falsy(false)な値の場合、numberには0が代入される
 * process.argv：Node.jsで初めから提供されているコマンドラインの引数
 * コマンドラインの引数：コマンドで指定した引数を配列として格納される
 * 下記、配列の添字を[2]に設定している理由は下記の通り
 * - 添字[0]には、nodeコマンドのファイルパスが既に入る決まりがある(起動したnode.exeのパス)
 * - 添字[1]には、実行しているプログラムのファイルパスが入る決まりがある(指定したJavaScriptファイルのパス)
 * - つまり、使用できる添字は[2]から
 * ファイルを保存し、ubuntu のコマンドラインでファイル名と引数を指定し実行すると、下記コードの結果がconsoleに出る
 * 以下、例) // app.js がファイル名, 100が引数
 * $ node app.js 100
 * $ 5050
 * 
 * 知識：JavaScriptの場合、比較演算子を使用せず、if(変数 === a){}は使用しない, if (変数){}でtrueを判定する事ができる
 * 
 */

'use strict'; //厳格モード
const number = process.argv[2] || 0; // process.argv[2]にコマンドライン引数があればtrue, なければfalseとなり 0を変数に代入することとなる
let sum =0;
for (let i = 1; i <= number; i++) {
  sum = sum +i;
}
console.log(sum);