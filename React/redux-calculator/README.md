# Reduxを使った電卓アプリ

[![https://gyazo.com/e014a0faae7bf4499e34634977cd9208](https://i.gyazo.com/e014a0faae7bf4499e34634977cd9208.gif)](https://gyazo.com/e014a0faae7bf4499e34634977cd9208)

# 参考

https://qiita.com/nishina555/items/9ff744a897af8ed1679b


# Redux　処理の流れ

component -> container -> action -> reducers　-> store -> container

# ディレクトリーの役割

- component
presentation 層なので基本的にはデータを受け取って表示させる


- container
component と actionを結びつける
storeで変更されたstateをpropsに変換してcomponentに渡す

- action
actionオブジェクトを定義する
必要なのはtype

- reducer
現在のstateとactionを受け取り、ロジックを処理する。そこから新しいstateを生成する
あくまでもstateは破壊的変更はせず、コピーする

- store
reducerによって変更された値を受けとり、containerに渡す

- utils
actiontypeの型を指定している

