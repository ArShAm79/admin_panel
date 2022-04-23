import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'

import request from '../../heplers/request'
import { Configuration } from '../../types/configuration'
import ManageConfigurationTable from './ManageConfigurationTable'
import useStyles from './styles/index.style'

const ManageConfiguration = () => {
  const [tabelData, settabelData] = useState<Configuration[]>([])
  const getData = async () => {
    const data = await request('/v1/admins/configurations')
    if (data.status === 200) {
      settabelData(data.responseJSON.rows)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Configuration</Typography>
      </div>

      <ManageConfigurationTable data={tabelData} getData={getData} />
    </div>
  )
}
export default ManageConfiguration
