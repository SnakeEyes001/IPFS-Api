const getUsers = (req, res) => {
  res.status(200).json({ message: "List of users" });
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: `User ${name} created successfully!` });
};

module.exports = { getUsers, createUser };
