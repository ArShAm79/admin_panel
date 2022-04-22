import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import ManageAdminsTable from './ManageAdminsTable'
import useStyles from './styles/index.style'

const ManageAdmins = () => {
  const classes = useStyles()
  const [tabelData, settabelData] = useState([])
  const getData = async () => {
    const data = await request('/v1/admins')
    if (data.status === 200) {
      settabelData(data.responseJSON.rows)
    } else {
      toast.error(data.responseJSON.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Manage Admins</Typography>
      </div>
      <ManageAdminsTable data={tabelData} />
    </div>
  )
}
export default ManageAdmins
