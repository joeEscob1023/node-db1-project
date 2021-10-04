const router = require("express").Router();

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get accounts");
    res.json([{}, {}]);
  } catch (err) {
    next({ status: 422, message: "something bad happened" });
  }
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("get account by id");
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("post accounts");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("update accounts");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("delete accounts");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
