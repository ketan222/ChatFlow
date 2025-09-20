export const signup = async function (req, res) {
  try {
    // const { email, password } = req.body;

    res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Internal server Error" });
  }
};
