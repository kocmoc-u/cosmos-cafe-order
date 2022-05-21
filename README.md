 cosmos-cafe-order
# order-test から複製 (6 までは order-test の作業履歴)
1. order-test にリネーム
2. カフェページのオーダーフォームを連動させる
3. index.jsにcoffeeページを上書きする ← branch-1228
4. コードに注釈をつける（理解のために ← branch-0112
5. top → form → thanks を設置
6. ページの遷移をつくる ← branch-0112b

# cosmos-cafe-order 作業履歴
7. 複製ページが node で動作する事を確認 ← branch-0115
8. コスモスカフェのオーダーページを組み込み
9. トップページを組み込み
10. サンクスページを組み込み
11. JS を用いてルーティングを確認 ← branch-0116

ここで一旦保存&pushしておきます。← branch-0521('22/05/21)
# 一度開発を停止 branch-0521
# 要件を再確認してToDoを整理。できる/できない を確認しつつ進める。
// 一旦すべてのオーダーページを完成
// herokuに公開してcssが当たるか（localhostだと当たらないのか）
// herokuに公開してjpg、mp4が表示されるか(localhostだと以下ry)
// cssをあててすべてのスタイル・画像を表示 これが結構ムズイぽい
// Fontを正しく表示 = 通常のcssでは不可？？
// ログを自然な文字列に変更 3章15の練習問題
// 余計なresを排除したいが可能なのか
// herokuで公開がNGの場合の代替案
// InstagramとTwitterはアイコンで表示
// Fontが揃ってないとキモイのでRodchenkoに統一