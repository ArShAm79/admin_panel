import { Paper, Table, TableContainer } from '@material-ui/core'
import { useState } from 'react'

import { WhiteList } from '../../types/whiteList'
import WhilteListTableHead from './WhilteListTableHead'
import WhiteListTableBody from './WhiteListTableBody'
import WhilteListEditModal from './components/WhilteListEditModal'
import useStyles from './styles/WhiteListTable.style'

export interface WhilteListTableProps {
  data: WhiteList[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
  getData: () => void
}

const WhilteListTable: React.FC<WhilteListTableProps> = ({
  data,
  setData,
  getData
}) => {
  const classes = useStyles()
  const [whilteListEditModalIsOpen, setWhilteListEditModalIsOpen] =
    useState(false)
  const [selectedIndex, setselectedIndex] = useState<number>(0)

  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table>
          <WhilteListTableHead />
          <WhiteListTableBody
            data={data}
            setData={setData}
            setselectedIndex={setselectedIndex}
            setWhilteListEditModalIsOpen={setWhilteListEditModalIsOpen}
          />
        </Table>
      </TableContainer>
      <WhilteListEditModal
        isOpen={whilteListEditModalIsOpen}
        onClose={() => setWhilteListEditModalIsOpen(false)}
        data={data[selectedIndex]}
        getData={getData}
      />
    </>
  )
}
export default WhilteListTable
