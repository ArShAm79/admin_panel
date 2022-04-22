import { Paper, Table, TableContainer } from '@material-ui/core'

import ActivityLogTableBody from './ActivityLogTableBody'
import ActivityLogTableHead from './ActivityLogTableHead'
import useStyles from './styles/ActivityLogTable.style'

export interface ActivityLogTableProps {
  data: {
    id: number
    admin: {
      name: string
    }
    description: string
  }[]
}
const ActivityLogTable: React.FC<ActivityLogTableProps> = ({ data }) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <ActivityLogTableHead />
        <ActivityLogTableBody data={data} />
      </Table>
    </TableContainer>
  )
}
export default ActivityLogTable
