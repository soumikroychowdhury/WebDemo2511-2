let vDOM = [];
function createDOMElements(existingDOM, currentDOM) {
  var parentElement = document.getElementById("mainArea");
  let added = 0, deleted = 0, updated = 0;
  currentDOM.forEach(function(item) {
    var existingItem = existingDOM.find(function(oldItem) {
      return oldItem.id === item.id;
    });
    if (existingItem) {
      updated++;
      var existingChild = document.querySelector(`[data-id='${item.id}']`);
      existingChild.children[0].innerHTML = item.title;
      existingChild.children[1].innerHTML = item.description;
    } else {
      added++;
      var childElement = document.createElement("div");
      childElement.dataset.id = item.id;
      var grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = item.title;
      var grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = item.description;
      var grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")");
      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
      parentElement.appendChild(childElement);
    }
  });
  existingDOM.forEach(function(oldItem) {
    if (!currentDOM.some(item => item.id === oldItem.id)) {
      deleted++;
      var childToRemove = document.querySelector(`[data-id='${oldItem.id}']`);
      parentElement.removeChild(childToRemove);
    }
  });
}
function updateVirtualDOM(data) {
  let existingDOM = [...vDOM];
  vDOM = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      description: item.description
    };
  });
  createDOMElements(existingDOM, vDOM);
}
window.setInterval(() => {
  let todos = [];
  for (let i = 0; i<Math.floor(Math.random()*100); i++) {
    todos.push({
      title: "Title",
      description: "Description",
      id: i+1
    })
  }
  updateVirtualDOM(todos);
}, 1000);