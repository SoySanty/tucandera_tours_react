const refreshMeta = (props) => {
  const { name, description, imgUrl, link } = props;

  //Title
  document.title = name;

  //Meta description
  document
    .querySelector("#metaDescription")
    .setAttribute("content", description);

  //Meta social media
  document.querySelector("#socialTitle").setAttribute("content", name);
  document
    .querySelector("#socialDescription")
    .setAttribute("content", description);
  document.querySelector("#socialImg").setAttribute("content", imgUrl);
  document.querySelector("#socialUrl").setAttribute("content", link);
};

export { refreshMeta };
