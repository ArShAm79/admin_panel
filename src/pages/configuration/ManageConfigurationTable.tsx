import { Paper, Table, TableContainer } from '@material-ui/core'

import { Configuration } from '../../types/configuration'
import ManageConfigurationTableBody from './ManageConfigurationTableBody'
import ManageConfigurationTableHead from './ManageConfigurationTableHead'
import useStyles from './styles/ManageConfigurationTable.style'

export interface ManageConfigurationTableProps {
  data: Configuration[]
  getData: () => void
}

const ManageConfigurationTable: React.FC<ManageConfigurationTableProps> = ({
  data,
  getData
}) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <ManageConfigurationTableHead />
        <ManageConfigurationTableBody data={data} getData={getData} />
      </Table>
    </TableContainer>
  )
}
export default ManageConfigurationTable
