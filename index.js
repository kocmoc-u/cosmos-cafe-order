'use strict';
// httpモジュールを読み込み
const http = require('http');
// fsモジュールを読み込み
const fs = require('fs');
// /urlモジュールを読み込み
const url = require('url')


// ルーティングのためにそれぞれのページを読み込み
const coffeePage = fs.readFileSync('./html/top.html', 'utf-8');
const thanksPage = fs.readFileSync('./html/end.html', 'utf-8');

// ※URL直書きで行けるか確認 ← ※※

// ※クリエイトサーバ→ルート// えってぃんぐで出来るか？

// createServer()関数で鯖を作成
const server = http.createServer((req, res) => {
    // 変数 now に new Date() を定義。他のログでも使用したいため
    const now = new Date();
    console.info('[' + now + '] Requested by ' + req.socket.remoteAddress);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    // url.parse()関数とswitch文で他のページを読み込み＝成功！！！
    const url_parts = url.parse(req.url);
    switch (url_parts.pathname) {
      case '/':
      case '/top.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(coffeePage);
        res.end()
        break;
    }

    switch (req.method) {
      case 'GET':
        // createReadStream()関数 を利用してレスポンスを取得
        const fs = require('fs');
        const rs = fs.createReadStream('./html/form.html')
        rs.pipe(res);
        break;

      case 'POST':
        let rawData = '';
        req
          .on('data', chunk => {
            rawData = rawData + chunk;
          })
          // ブラウザに表示を返す。投稿したものの確認
          .on('end', () => {
            const decoded = decodeURIComponent(rawData);
            console.info('[' + now + '] 投稿: ' + decoded);
            res.write(thanksPage); //end 後 thanksPage に遷移
            res.end();
          });
        break;
      default:
        break;
    }
  })
  // エラーログを出力
  .on('error', e => {
    console.error('[' + new Date() + '] Server Error', e);
  })
  .on('clientError', e => {
    console.error('[' + new Date() + '] Client Error', e);
  });

// ポートを設定
const port = 8000;
// 鯖を起動。実行する関数は無名からのデータ取得
server.listen(port, () => {
  console.info('[' + new Date() + '] Listening on ' + port);
});