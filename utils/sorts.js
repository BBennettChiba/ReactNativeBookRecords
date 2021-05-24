const sorts = {
    author:byAuthor,
    title:byTitle,
    recent:byRecent,
  }

  function byAuthor(a, b) {
    let aLastName = a.authors[0].split(" ");
    aLastName = aLastName[aLastName.length - 1];
    let bLastName = b.authors[0].split(" ");
    bLastName = bLastName[bLastName.length - 1];
    return aLastName > bLastName;
  }

  function byTitle(a, b) {
    return a.title.replace(/the /i, "") > b.title.replace(/the /i, "");
  }

  function byRecent(a, b) {
    return a.createdAt > b.createdAt;
  }

  export default sorts