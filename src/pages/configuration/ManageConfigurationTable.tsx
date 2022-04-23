import { Paper, Table, TableContainer } from '@material-ui/core'

import { Configuration } from '../../types/configuration'
import ManageConfigurationTableBody from './ManageConfigurationTableBody'
import ManageConfigurationTableHead from './ManageConfigurationTableHead'
import useStyles from './styles/ManageConfigurationTable.style'

export interface ManageConfigurationTableProps {
  data: Configuration[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

const ManageConfigurationTable: React.FC<ManageConfigurationTableProps> = ({
  data,
  setData
}) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <ManageConfigurationTableHead />
        <ManageConfigurationTableBody data={data} setData={setData} />
      </Table>
    </TableContainer>
  )
}
export default ManageConfigurationTable
