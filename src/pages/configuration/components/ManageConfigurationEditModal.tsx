import { Button, Modal, Paper, Slide, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import request from '../../../heplers/request'
import { Configuration } from '../../../types/configuration'
import useStyles from '../styles/ManageConfigurationEditModal.style'

interface ManageConfigurationModalProps {
  isOpen: boolean
  onClose: () => void
  getData: () => void
  data: Configuration
}

const ManageConfigurationEditModal: React.FC<ManageConfigurationModalProps> = ({
  isOpen,
  onClose,
  getData,
  data
}) => {
  const [value, setvalue] = useState<string>(data?.value)
  const classes = useStyles()
  useEffect(() => {
    setvalue(data?.value)
  }, [data])

  const handleAddAddress = async (values: { id: number }) => {
    const response = await request(
      '/v1/admins/configurations/id/' + values.id,
      'PUT',
      {
        value
      }
    )
    if (response.status === 200) {
      toast.success('Configuration value saved')
      getData()
      onClose()
    }
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.root}>
          <div className={classes.icon}>
            <EditIcon />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              label="Value"
              name="value"
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              onChange={(event) => setvalue(event.target.value)}
              value={value}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" color="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!value || value === data.value}
              onClick={() => handleAddAddress(data)}>
              Save
            </Button>
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default ManageConfigurationEditModal
