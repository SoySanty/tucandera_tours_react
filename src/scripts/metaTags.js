const refreshMeta = (props) => {
  const { name, description, imgUrl, link } = props;

  const doc = document;

  //Title
  doc.title = name;

  //Meta description
  doc.querySelector("#metaDescription").setAttribute("content", description);

  //Meta social media
  doc.querySelector("#socialTitle").setAttribute("content", name);
  doc.querySelector("#socialDescription").setAttribute("content", description);
  doc.querySelector("#socialImg").setAttribute("content", imgUrl);
  doc.querySelector("#socialUrl").setAttribute("content", link);
};

export { refreshMeta };
