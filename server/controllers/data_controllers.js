import data from "../models/data_models.js";

export const getAllData = (req, res) => {
  data
    .find()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(404).json({ message: "Data not found", error: err.message })
    );
};

export const postCreateData = (req, res) => {
  data
    .create(req.body)
    .then((data) => res.json({ message: "Data added successfully", data }))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Failed to add data", error: err.message })
    );
};

export const deleteData = (req, res) => {
  data
    .findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({ message: "Data deleted successfully", data }))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Failed to delete data", error: err.message })
    );
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const { updatedData } = req.body;

  const existingPost = await data.findById(id);

  if (!existingPost) {
    return res.status(404).json({ message: "Post not found" });
  }

  // Update the fields of the existing post
  existingPost.data = updatedData;

  const updatedPost = await existingPost.save();

  return res.json({ message: "Post updated successfully", post: updatedPost });
};

export const getPostById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the post with the given id
      const post = await data.findById(id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      return res.json({ post });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };