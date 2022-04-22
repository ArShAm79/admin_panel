import { Paper, Table, TableContainer } from '@material-ui/core'

import ManageAdminsTableBody from './ManageAdminsTableBody'
import ManageAdminsTableHead from './ManageAdminsTableHead'
import useStyles from './styles/ManageAdminsTable.style'

export interface ManageAdminsTableProps {
  data: {
    id: number
    name: string
    role: {
      role_name: string
    }
    email: string
  }[]
}

const ManageAdminsTable: React.FC<ManageAdminsTableProps> = ({ data }) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <ManageAdminsTableHead />
        <ManageAdminsTableBody data={data} />
      </Table>
    </TableContainer>
  )
}
export default ManageAdminsTable
