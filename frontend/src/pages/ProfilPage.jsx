import React, { useEffect } from 'react'
import FormAddProduct from '../components/FormAddProduct'
import LayoutProfil from './LayoutProfil'
import ProfilWarga from '../components/ProfilWarga'


const ProfilPage = () => {
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
    <LayoutProfil>
        <ProfilWarga />
    </LayoutProfil>
  )
}

export default ProfilPage