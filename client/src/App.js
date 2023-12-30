import React, { useEffect, useState } from 'react';
import './App.css'
import Head from './todoComponent/Head';
import DataAdder from './todoComponent/DataAdder';
import ShowData from './todoComponent/ShowData';
import axios from 'axios';

const App = () => {
  const host = process.env.REACT_APP_BACKEND_URL;
  const [item, setItem] = useState({ data: '' });
  const [addData, setAddData] = useState([]);
  const [holderText, setHolderText] = useState("Add Item");
  const [deleted, setDeleted] = useState(false);
  const [updateFlag,setUpdateFlag] = useState(false);
  const [updateId,setUpdateId] = useState();

  const getAllPosts = async () =>{
    await axios
      .get(`${host}/api/data`)
      .then((res) => {
        setAddData(res.data);
        setDeleted(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllPosts();
  }, [item, deleted]);


  const addItem = async () => {
    if (item.data !== "") {
      await axios
        .post(`${host}/api/data`, item)
        .then((res) => {
          setItem({ data: '' });
          setHolderText("Add Item");
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log("Error couldn't add Item");
          console.error(err.message);
        });
    } else {
      setHolderText("Can't Empty");
    }
  }

  const deleteItem = async (id) => {
    await axios.delete(`${host}/api/data/${id}`);
    setDeleted(true);
  }

  const handleUpdate = async (id) => {
    const res = await axios.get(`${host}/api/data/get/${id}`);
    setItem({data:res?.data?.post?.data});
    setUpdateFlag(true);
    setUpdateId(id);
  }

  const updateItem = async () => {
    if (item.data !== "") {
      await axios
        .put(`${host}/api/data/${updateId}`, {updatedData:item.data})
        .then((res) => {
          setItem({ data: '' });
          setHolderText("Add Item");
          window.location.reload();
        })
        .catch((err) => {
          console.log("Error couldn't add Item");
          console.error(err.message);
        });
    } else {
      setHolderText("Can't Empty");
    }
  }

  return (
    <>
      <div className="container">
        <div className="center_container">
          <Head />
          <div className="body">
            <DataAdder updateFlag={updateFlag} item={item} setItem={setItem} click={updateFlag ? updateItem : addItem} placeholderText={holderText} />
            <ol className="lists">
              {addData && (
                addData.map((item) => {
                  return <ShowData key={item._id} item={item} handleUpdate={handleUpdate} onSelect={deleteItem} />
                }))
              }
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;