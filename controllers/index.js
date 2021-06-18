const { User, Task } = require('../models');

//pathway for creating a new user
const createUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;
    try {
        const user = await User.create({ firstName, lastName, email, password, role });
        return res.status(201).json({
            user
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

//pathway for getting all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Task
                }
            ]
        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

//pathway for getting user by id
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id },
            include: [
                {
                    model: Task
                }
            ]
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//pathway for updating user by id
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        
        const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
/*
app.put('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const { name, email, role } = req.body
  try {
    const user = await User.findOne({ where: { uuid } })

    user.name = name
    user.email = email
    user.role = role

    await user.save()

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})
*/

//pathway for deleting user by id
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
            const user = await User.findOne({ where: { id } });
            if (user) {
                await user.destroy();
                return res.status(204).json({ message: 'User deleted!' })
            }
            throw new Error("User not found");
        } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}