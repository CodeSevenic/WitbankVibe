import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    // dispatch: update profile
  };

  return (
    <div>
      <form className="form" onSubmit={sumbitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                defaultValue={user.name}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                defaultValue={user.email}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="confirmPassword"
                id="confirmPassword"
                placeholder="Enter confirmPassword"
              />
            </div>

            <div>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
