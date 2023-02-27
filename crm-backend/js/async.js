

async function loadTodoItems() {
  const response = await fetch('http://localhost:3000/api/clients');
  let data = await response.json();
  return data;
}

async function searchItems(param) {
  const response = await fetch('http://localhost:3000/api/clients');
  let data = await response.json();
  return data;
}


async function loadOneClient(id) {
  const response = await fetch('http://localhost:3000/api/clients/'+id);
  let data = await response.json();
  return data;
}

async function searchData(str) {
  const url=`http://localhost:3000/api/clients?search=${str}`
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

function dele(data) {
  for (let i = 0; i < data.length; i++) {
    let param = data[i].id;
    deleteClient(param)
  }
}

async function createClient(client) {
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: client.name,
      surname: client.surname,
      lastName: client.lastName,
      contacts: client.contacts
    })
  });

  const data = await response.json();
  return data;
}

async function updateClient(id, client) {
  const response = await fetch('http://localhost:3000/api/clients/' + id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      name: client.name,
      surname: client.surname,
      lastName: client.lastName,
      contacts: client.contacts
    })
  });
  //  посмотри на изменение времени !!!

  const data = await response.json();
  return data;
}


async function getTodoItem(param) {
  const response = await fetch('http://localhost:3000/api/clients/' + param);
  const data = await response.json();
  return data;
}

async function markTodoAsDone() {
  const response = await fetch('http://localhost:3000/api/clients/1608029025426', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: true })
  });
  const data = await response.json();
}

async function deleteClient(param) {
  const response = await fetch('http://localhost:3000/api/clients/' + param, {
    method: 'DELETE',
  });
  if (response.status === 404)
    console.log('Не удалось удалить дело, так как его не существует');
  const data = await response.json();
}
