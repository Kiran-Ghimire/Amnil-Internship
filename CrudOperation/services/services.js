const host = "https://reqres.in/";

const list = async (page) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users?page=${page}`, {
      method: "GET",
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const create = async (model, page) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users?page=${page}`, {
      method: "POST",
      body: model,
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const update = async (id, model) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users/${id}`, {
      method: "PUT",
      body: model,
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const remove = async (id, model) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users/${id}`, {
      method: "DELETE",
      body: model,
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  list: list,
  create: create,
  update: update,
  remove: remove,
};
