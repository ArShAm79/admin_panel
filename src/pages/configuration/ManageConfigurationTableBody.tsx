import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  withStyles
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import { Configuration } from '../../types/configuration'
import useStyles from './styles/ManageConfigurationTableBody.style'

const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)
interface ManageConfigurationTableBodyProps {
  data: Configuration[]
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  setManageConfigurationEditModalIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >
}

const ManageConfigurationTableBody: React.FC<
  ManageConfigurationTableBodyProps
> = ({ data, setSelectedIndex, setManageConfigurationEditModalIsOpen }) => {
  const classes = useStyles()

  return (
    <TableBody>
      {data.map((item, index) => (
        <>
          <CustomTableRow key={index.toString() + item.id}>
            <TableCell>
              <Typography>{index + 1}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.title}</Typography>
            </TableCell>
            <TableCell>
              <Tooltip title={item.value.length > 10 ? item.value : ''}>
                <Typography
                  onClick={() => navigator.clipboard.writeText(item.value)}
                  className={classes.value}>
                  {item.value.length > 10
                    ? `${item.value.substring(0, 10)}...`
                    : item.value}
                </Typography>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Typography>{item.key}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.description}</Typography>
            </TableCell>
            <TableCell align="center">
              <IconButton
                size="small"
                onClick={() => {
                  setManageConfigurationEditModalIsOpen(true)
                  setSelectedIndex(index)
                }}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </CustomTableRow>
        </>
      ))}
    </TableBody>
  )
}
export default ManageConfigurationTableBody
