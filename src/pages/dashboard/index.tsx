import { Typography } from '@material-ui/core'

import tableMockData from '../../mockData/table'
import DashboardHeadTable from './DashboardHeadTable'
import useStyles from './styles/index.style'

const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Dashboard</Typography>
      </div>
      <DashboardHeadTable data={tableMockData} />
    </div>
  )
}
export default Dashboard
