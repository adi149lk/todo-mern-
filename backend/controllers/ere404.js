exports.get404 = (req, res, next) => {
  // console.log(req.url,req.method);
  res.status(404).json({ message: "page not found" });
};
