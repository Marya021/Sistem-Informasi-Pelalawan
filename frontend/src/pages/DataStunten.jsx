import React, { useEffect } from 'react'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/AuthSlice'
import StuntenList from '../components/StuntenList'

const DataStunten = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { isError } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate('/');
  //   }
  // }, [isError, navigate]);
  return(
    <Layout>
      <StuntenList />   
    </Layout>
  )
}


export default DataStunten