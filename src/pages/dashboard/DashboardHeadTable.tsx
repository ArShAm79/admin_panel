import { Typography } from '@material-ui/core'

import Table from '../../types/table'
import DashboardTable from './DashboardTable'
import useStyles from './styles/dashboardHeadTable.style'

interface DashboardHeadTableProps {
  data: Table[]
  settables: (value: Table[]) => void
}

const DashboardHeadTable: React.FC<DashboardHeadTableProps> = ({
  data,
  settables
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.table}>
        <Typography
          className={[classes.tablePart, classes.tablePartStart].join(' ')}>
          &nbsp;
        </Typography>
        <Typography className={classes.tablePart}>Contract Address</Typography>
        <Typography className={classes.tablePart}>Collection Name</Typography>
        <Typography className={classes.tablePart}>Quantity</Typography>
        <Typography className={classes.tablePart}>Presale Price</Typography>
        <Typography className={classes.tablePart}>Publicsale Price</Typography>
        <Typography className={classes.tablePart}>Max Mint</Typography>
        <Typography className={classes.tablePart}>
          Publicsale Mint Timestamp
        </Typography>
        <Typography className={classes.tablePart}>
          Presale Mint Timestamp
        </Typography>
        <Typography className={classes.tablePart}>Discord Link</Typography>
        <Typography className={classes.tablePart}>Discord Member</Typography>
        <Typography className={classes.tablePart}>Twitter Link</Typography>
        <Typography className={classes.tablePart}>Twitter Member</Typography>
        <Typography className={classes.tablePart}>Opensea Link</Typography>
        <Typography className={classes.tablePart}>OS Royalty</Typography>
        <Typography className={classes.tablePart}>Listing Fee</Typography>
        <Typography className={classes.tablePart}>Nft Royalty</Typography>
        <Typography className={classes.tablePart}>Hidden</Typography>
        <Typography className={classes.tablePart}>Access Key</Typography>
        <Typography className={classes.tablePart}>Enable Access Key</Typography>
        <Typography
          className={[classes.tablePart, classes.tablePartEnd].join(' ')}>
          Options
        </Typography>
        {data.map((item, index) => (
          <DashboardTable
            {...item}
            key={item.id}
            index={index + 1}
            settables={settables}
          />
        ))}
      </div>
    </div>
  )
}
export default DashboardHeadTable
