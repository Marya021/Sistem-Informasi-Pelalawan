import React, { useEffect } from 'react'
import Layout from './Layout'
import FormAddWarga from '../components/FormAddWarga'

const PageWarga = () => {
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
  return (
    <Layout>
        <FormAddWarga />
    </Layout>
  )
}

export default PageWarga