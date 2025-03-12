import React from 'react'
import { useSelector } from 'react-redux'
import DashboardAdmin from '../containers/DashboardAdmin'

const Dashboard = () => {
  const admin = useSelector((store) => store.admin)

  return (
    <>
    {admin.rol != null? <DashboardAdmin /> : <>adios</>}
    </>
  )
}

export default Dashboard