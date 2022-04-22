import { Paper, Table, TableContainer } from '@material-ui/core'

import { WhiteList } from '../../types/whiteList'
import WhilteListTableHead from './WhilteListTableHead'
import WhiteListTableBody from './WhiteListTableBody'
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
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <WhilteListTableHead />
        <WhiteListTableBody data={data} setData={setData} getData={getData} />
      </Table>
    </TableContainer>
  )
}
export default WhilteListTable
