import { Button, Modal, Paper, Slide, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import request from '../../../heplers/request'
import { WhiteList } from '../../../types/whiteList'
import useStyles from '../styles/WhilteListEditModal.style'

interface WhilteListEditModalProps {
  isOpen: boolean
  onClose: () => void
  getData: () => void
  data: WhiteList
}

const WhilteListEditModal: React.FC<WhilteListEditModalProps> = ({
  isOpen,
  onClose,
  getData,
  data
}) => {
  const [address, setaddress] = useState(data?.address)
  const classes = useStyles()
  const handleAddAddress = async (values: { id: number }) => {
    const response = await request(
      '/v1/admins/whitelist-addresses/id/' + values.id,
      'PUT',
      {
        address
      }
    )
    if (response.status === 200) {
      toast.success('Address saved')
      getData()
      onClose()
    }
  }
  useEffect(() => {
    setaddress(data?.address)
  }, [data])

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.root}>
          <div className={classes.icon}>
            <EditIcon />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              label="Address"
              name="Address"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              onChange={(event) => setaddress(event.target.value)}
              value={address}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" color="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!address || address === data.address}
              onClick={() => handleAddAddress(data)}>
              Save
            </Button>
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default WhilteListEditModal
