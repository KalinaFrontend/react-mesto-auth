const headers = {
    'Content-Type': 'application/json',
  };

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

export const authorization = ({ email, password }) => {
    return fetch(`https://auth.nomoreparties.co/signin`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
}


export const getContent = (token) => {
    return fetch(`https://auth.nomoreparties.co/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    },
    }).then((res) => res.json());
}

