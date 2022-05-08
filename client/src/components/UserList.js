import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../redux/action';
import UserCard from './UserCard';

const UserList = () => {
  const {users,loading} = useSelector(state=>state);
  console.log(users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <div className="UserList">
      {
      loading?<h1> loading...</h1>:users&&React.Children.toArray(users.map(el=><UserCard user={el} />))
      }       
    </div>
  )
}

export default UserList