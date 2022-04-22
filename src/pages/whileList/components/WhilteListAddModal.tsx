import { Button, Modal, Paper, Slide, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useState } from 'react'
import { toast } from 'react-toastify'

import request from '../../../heplers/request'
import useStyles from '../styles/WhilteListAddModal.style'

interface WhilteListAddModalProps {
  isOpen: boolean
  onClose: () => void
  getData: () => void
}

const WhilteListAddModal: React.FC<WhilteListAddModalProps> = ({
  isOpen,
  onClose,
  getData
}) => {
  const [address, setaddress] = useState('')
  const classes = useStyles()
  const handleAddAddress = async () => {
    const response = await request('/v1/admins/whitelist-addresses', 'POST', {
      address
    })
    if (response.status === 201) {
      toast.success('New Address added')
      getData()
      onClose()
      setaddress('')
    }
  }
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.root}>
          <div className={classes.icon}>
            <AddIcon />
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
              disabled={!address}
              onClick={handleAddAddress}>
              Add
            </Button>
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default WhilteListAddModal
