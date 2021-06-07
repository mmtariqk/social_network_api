const { User, Thought } = require("../models");

const userController = {
  // Here to get all users
  getAllUsers: async (req, res) => {
    try {
      const dbUserData = await User.find({});
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  // getAllUsers(req, res) {
  //     User.find({})
  //         .then(dbUserData => res.json(dbUserData))
  //         .catch(err => {
  //             console.log(err);
  //             res.status(400).json(err);
  //         });
  // },

  // Here to get one user by id
  getUserById: async (req, res) => {
    try {
      const dbUserData = await User.findOne({ _id: req.params.id })
        .populate("thoughts")
        .populate("friends")
        .select("-__v");

      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  // Here to createUser
  createUser: async (req, res) => {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Here to update user by id
  updateUser: async(req, res) => {
    try{
    
    const dbUserData = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      }
      catch(err) 
      {res.status(400).json(err);
      }
  },

  // Here to delete user
  deleteUser: async (req, res) => {

    try {
    
    const dbUserData = await User.findOneAndDelete({ _id: req.params.id })
      
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No user found with this id!" });
        }
            
        res.json({ message: "user has been deleted." });
      }
        catch(err) {res.status(400).json(err);
        }
      },


  // Here to add friend
  addFriend: async (req, res) => {

    try{
    
    const dbUserData = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true }
    )
      
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json({ message: "friend added", data: dbUserData });
      }
      catch(err) {res.status(400).json(err);
      }
  },

  // Here to remove friend
  removeFriend: async (req, res) => {
    try {
    const dbUserData = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true }
    )
      
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json({ message: "friend removed", data: dbUserData });
      }
      catch(err) {res.status(400).json(err);
  }
},
}
module.exports = userController;
