import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'

import request from '../../heplers/request'
import Table from '../../types/table'
import DashboardHeadTable from './DashboardHeadTable'
import useStyles from './styles/index.style'

const Dashboard = () => {
  const classes = useStyles()
  const [tables, settables] = useState<Table[]>([])
  const getTables = async () => {
    request('/v1/admins/tables/upcoming').then((resposne) => {
      if (resposne.status === 200) {
        settables(resposne.responseJSON.rows)
      }
    })
  }
  useEffect(() => {
    getTables()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Dashboard</Typography>
      </div>
      <DashboardHeadTable data={tables} settables={settables} />
    </div>
  )
}
export default Dashboard
