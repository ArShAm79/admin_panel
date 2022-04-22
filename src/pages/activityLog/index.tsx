import { IconButton, Typography } from '@material-ui/core'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import ActivityLogTable from './ActivityLogTable'
import useStyles from './styles/index.style'

const ActivityLog = () => {
  const classes = useStyles()
  const [tabelData, settabelData] = useState([])
  const getData = async () => {
    const data = await request('/v1/admins/activitylogs')
    if (data.status === 200) {
      settabelData(data.responseJSON.rows)
    } else {
      toast.error(data.responseJSON.message)
    }
  }
  const handleClearAll = async () => {
    const response = await request('/v1/admins/activitylogs', 'DELETE')
    if (response.status === 200) {
      settabelData([])
      toast.success('All logs cleared')
    } else {
      toast.error(response.responseJSON.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Activity Log</Typography>
      </div>
      <div className={classes.clearAllContainer}>
        <IconButton onClick={handleClearAll}>
          <ClearAllIcon />
        </IconButton>
      </div>
      <ActivityLogTable data={tabelData} />
    </div>
  )
}
export default ActivityLog
