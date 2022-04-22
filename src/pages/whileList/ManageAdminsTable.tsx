import { Paper, Table, TableContainer } from '@material-ui/core'

import { User } from '../../types/user'
import ManageAdminsTableBody from './ManageAdminsTableBody'
import ManageAdminsTableHead from './ManageAdminsTableHead'
import useStyles from './styles/ManageAdminsTable.style'

export interface ManageAdminsTableProps {
  data: User[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

const ManageAdminsTable: React.FC<ManageAdminsTableProps> = ({
  data,
  setData
}) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <ManageAdminsTableHead />
        <ManageAdminsTableBody data={data} setData={setData} />
      </Table>
    </TableContainer>
  )
}
export default ManageAdminsTable
