import { Paper, Table, TableContainer } from '@material-ui/core'
import { useState } from 'react'

import { Configuration } from '../../types/configuration'
import ManageConfigurationTableBody from './ManageConfigurationTableBody'
import ManageConfigurationTableHead from './ManageConfigurationTableHead'
import ManageConfigurationEditModal from './components/ManageConfigurationEditModal'
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
  const [
    manageConfigurationEditModalIsOpen,
    setManageConfigurationEditModalIsOpen
  ] = useState<boolean>(false)
  const [selectedIndex, setselectedIndex] = useState<number>(0)
  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table>
          <ManageConfigurationTableHead />
          <ManageConfigurationTableBody
            data={data}
            setSelectedIndex={setselectedIndex}
            setManageConfigurationEditModalIsOpen={
              setManageConfigurationEditModalIsOpen
            }
          />
        </Table>
      </TableContainer>
      <ManageConfigurationEditModal
        isOpen={manageConfigurationEditModalIsOpen}
        onClose={() => setManageConfigurationEditModalIsOpen(false)}
        data={data[selectedIndex]}
        getData={getData}
      />
    </>
  )
}
export default ManageConfigurationTable
