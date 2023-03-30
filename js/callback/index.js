// callback

function fetchData(cb) {
  setTimeout(() => {
    const data = {
      name: 'Hai',
      age: 20,
    };
    cb(data);
  }, 2000);
  //   const data = {
  //     name: 'Hai',
  //     age: 20,
  //   };
  //   cb(data);
}

function processData(data) {
  if (data.age == 20) {
    console.log('Young!');
  } else {
    console.log('Unknown');
  }
}

function processData2(data) {
  if (data.age == 20) {
    console.log('Very Young!');
  } else {
    console.log('Unknown');
  }
}

// fetchData(processData);
// fetchData(processData2);
console.log('Continue....');

const cbGetComment = () => {
  const comment = { message: 'Comment' };
  console.log(comment);
};

const cbGetPost = () => {
  const post = { title: 'Title' };
  console.log(post);
  setTimeout(cbGetComment, 1000);
};

const cbGetUser = () => {
  const user = { name: 'Nhung' };
  console.log(user);
  setTimeout(cbGetPost, 1000);
};

function fetchUser() {
  setTimeout(cbGetUser, 2000);
}

// fetchUser();

// promising

// const buyingIphonePromise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     let success = new Date().getTime() % 2 == 0;
//     if (success) {
//       const data = { name: 'Cuc' };
//       resolve(data);
//     } else {
//       rejected({ message: 'Something went wrong!' });
//     }
//   }, 2000);
// });

// buyingIphonePromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(buyingIphonePromise);

const api = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = new Date().getTime() % 10 > 2;
        if (success) {
          resolve({ username: 'Tung' });
        } else {
          reject({ message: 'Error on get User!' });
        }
      }, 1000);
    });
  },
  getPost: (username) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = new Date().getTime() % 10 > 2;
        if (success && username) {
          resolve({ postID: 1 });
        } else {
          reject({ message: 'Error on get Post! ' + username });
        }
      }, 1000);
    });
  },
  getComment: (postID) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = new Date().getTime() % 10 > 2;
        if (success && postID) {
          resolve({ comment: 'This is a comment' });
        } else {
          reject({ message: 'Error on get Comment! ' + postID });
        }
      }, 1000);
    });
  },
};

// promise hell => promise chain to fix
function fetchContent() {
  api
    .getUser()
    .then((user) => {
      console.log(user);
      return api.getPost(user.username);
    })
    .then((post) => {
      console.log(post);
      return api.getComment(post.postID);
    })
    .then((comment) => {
      console.log(comment);
    })
    .catch((err) => {
      console.log(err);
    });
}

// fetchContent();

async function fetchContentAsyncAwait() {
  //   try {
  const user = await api.getUser();
  const post = await api.getPost(user.username);
  const comment = await api.getComment(post.postID);
  console.log(user, post, comment);
  //   } catch (err) {
  //     console.log(err);
  //   }
  return { message: 'abc' };
}

const fp = fetchContentAsyncAwait();
fp.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

function test() {
  let res = Promise.all([api.getUser(), api.getPost(1), api.getComment(1)]);
  console.log(res);
  res.then((data) => {
    console.log(data);
  });
}

// test();
