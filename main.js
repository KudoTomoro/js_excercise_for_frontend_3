/**
 * 課題1: id属性値が `main` のdiv要素ににul要素を追加する
 */
const addUl = document.createElement('ul');
const getMain = document.getElementById('main');

getMain.appendChild(addUl);

/**
 * 課題2: 課題1で作成したul要素に5つのli要素(DOM)を追加する
 *   - forループを使って5つのli要素(DOM)を追加すること
 *   - li要素(DOM)には先頭から次のテキストをセットする(textContentを使うこと)
 *     1. アイテム1
 *     2. アイテム2
 *     3. アイテム3
 *     4. アイテム4
 *     5. アイテム5
 */

(() => {
  for(let i =0; i < 5; i++){
    const newLi = document.createElement('li');
    newLi.textContent= `アイテム ${i+1}`;
    addUl.appendChild(newLi);
  }
})();

/**
 * 課題3: 課題2で作成した5つのli要素の内、先頭から4番目(アイテム4)の要素を削除する
 *   - ヒント: DOMのchildrenプロパティが使える
 *     - https://developer.mozilla.org/ja/docs/Web/API/ParentNode/children
 */
 (() => {
   addUl.removeChild(addUl.children[3]);
 })();

/**
 * 課題4: id属性値が `remove-all-items` のul要素内の全てのli要素を削除する
 *   - ul要素は削除しないこと
 */
 const rem = document.getElementById('remove-all-items');
 while(rem.firstChild){
   rem.removeChild(rem.firstChild);
 }
