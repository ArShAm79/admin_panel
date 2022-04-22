import { Paper, Table, TableContainer } from '@material-ui/core'

import { Category } from '../../types/category'
import ManageAdminsTableBody from './ManageAdminsTableBody'
import ManageAdminsTableHead from './ManageAdminsTableHead'
import useStyles from './styles/ManageAdminsTable.style'

export interface CateogriesTableProps {
  data: Category[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

const CateogriesTable: React.FC<CateogriesTableProps> = ({ data, setData }) => {
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
export default CateogriesTable
