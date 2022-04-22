import { Button, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import { Category } from '../../types/category'
import ManageAdminsTable from './CateogriesTable'
import useStyles from './styles/index.style'

const Cateogries = () => {
  const [tabelData, settabelData] = useState<Category[]>([])
  const getData = async () => {
    const data = await request('/v1/admins/tables/categories')
    if (data.status === 200) {
      settabelData(data.responseJSON.rows)
    } else {
      toast.error(data.responseJSON.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const history = useHistory()

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Categories</Typography>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => history.push('/categories/add')}
          variant="contained"
          color="secondary"
          className={classes.addButton}>
          <AddIcon />
          <Typography>Add New Category</Typography>
        </Button>
      </div>
      <ManageAdminsTable data={tabelData} setData={settabelData} />
    </div>
  )
}
export default Cateogries
