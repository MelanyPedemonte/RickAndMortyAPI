import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/slices/users";

const UserList = () => {
  const { list } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="container">
      <div className="row">
        {list.map((user, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={user.image} alt="avatar"></img>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
