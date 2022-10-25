const list = document.getElementById('list')
// 创建一个文档碎片
const fragment = document.createDocumentFragment();

// 向文档碎片中插入100个li元素
for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.innerHTML = `list item ${i}`
    fragment.appendChild(li);
}
// 统一插入到DOM结构中
list.appendChild(fragment);


document.body.addEventListener('click', (e) => {
    // 阻止事件冒泡
    e.stopPropagation();

    // 阻止默认事件
    e.preventDefault();
})



// DOM 查找, 查找 <div id="app" class="app">
const app = document.getElementById('app')
document.querySelector('#app')
document.getElementsByClassName('app');

// DOM 添加, 向body中添加一个 <div id="modal">
const modal = document.createElement('div')
modal.setAttribute('id', 'modal');
document.body.appendChild(modal);

// DOM 删除，在body中删除Modal 元素, f返回被删除的节点
let modalNodes = document.body.removeChild(modal);

// DOM 移动, 把modal节点插入到 app 节点之前
document.body.insertBefore(modalNodes, app);

