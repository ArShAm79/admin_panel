import { Button, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useEffect, useState } from 'react'

import request from '../../heplers/request'
import { WhiteList } from '../../types/whiteList'
import WhilteListTable from './WhilteListTable'
import WhilteListAddModal from './components/WhilteListAddModal'
import useStyles from './styles/index.style'

const WhilteList = () => {
  const [tabelData, settabelData] = useState<WhiteList[]>([])
  const [whilteListAddModal, setWhilteListAddModal] = useState(false)
  const getData = async () => {
    const data = await request('/v1/admins/whitelist-addresses')
    if (data.status === 200) {
      settabelData(data.responseJSON.rows)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Manage Addresses</Typography>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => setWhilteListAddModal(true)}
          variant="contained"
          color="secondary"
          className={classes.addButton}>
          <AddIcon />
          <Typography>Add New Address</Typography>
        </Button>
      </div>
      <WhilteListTable
        data={tabelData}
        setData={settabelData}
        getData={getData}
      />
      <WhilteListAddModal
        isOpen={whilteListAddModal}
        onClose={() => setWhilteListAddModal(false)}
        getData={getData}
      />
    </div>
  )
}
export default WhilteList
