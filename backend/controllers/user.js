const Item = require("../model/item");
exports.getItem = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch data from database",
      details: err.message,
    });
  }
};
exports.PostItem = async (req, res, next) => {
  const { task, date } = req.body;
  try {
    const item = new Item({ task, date });
    const ite = await item.save();
    res.status(201).json(ite);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to store data in database",
      details: err.message,
    });
  }
};
exports.complete = async (req, res, next) => {
  const id = req.params.itemId;
  try {
    const item = await Item.findByIdAndUpdate(
      id,
      {
        complete: true,
      },
      {
        returnDocument: "after",
      },
    );
    res.json(item);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to update date in datebase",
      details: err.message,
    });
  }
};
exports.delete = async (req, res, next) => {
  const id = req.params.itemId;
  try {
    await Item.findByIdAndDelete(id);
    res.status(200).json({ _id: id });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete datam in datebase ",
      details: err.message,
    });
  }
};
