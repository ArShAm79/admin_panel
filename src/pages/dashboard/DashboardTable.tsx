import { IconButton, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import Table from '../../types/table'
import useStyles from './styles/DashboardTable.style'

const DashboardTable: React.FC<Table> = ({
  contract_address,
  collection_name,
  quantity,
  presale_price,
  publicsale_price,
  max_mint,
  publicsale_mint_timestamp,
  presale_mint_timestamp,
  discord_link,
  discord_member,
  twitter_link,
  twitter_member,
  opensea_link,
  os_royalty,
  listing_fee,
  nft_royalty,
  hidden,
  access_key,
  enable_access_key,
  index,
  id,
  settables
}) => {
  const classes = useStyles()
  const DeleteFunction = () => {
    request(`/v1/admins/tables/listings/id/${id}`, 'DELETE').then(
      (response) => {
        if (response.status === 200) {
          toast.success('Deleted successfully')
          settables((value: Table[]) => value.filter((item) => item.id !== id))
        } else {
          toast.error('Somthing went wrong')
        }
      }
    )
  }
  return (
    <>
      <Typography>{`${index}#`}</Typography>
      <Typography className={classes.value}>
        {contract_address || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {collection_name || 'empty'}
      </Typography>
      <Typography className={classes.value}>{quantity || 'empty'}</Typography>
      <Typography className={classes.value}>
        {presale_price || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {publicsale_price || 'empty'}
      </Typography>
      <Typography className={classes.value}>{max_mint || 'empty'}</Typography>
      <Typography className={classes.value}>
        {publicsale_mint_timestamp || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {presale_mint_timestamp || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {discord_link || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {discord_member || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {twitter_link || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {twitter_member || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {opensea_link || 'empty'}
      </Typography>
      <Typography className={classes.value}>{os_royalty || 'empty'}</Typography>
      <Typography className={classes.value}>
        {listing_fee || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {nft_royalty || 'empty'}
      </Typography>
      <Typography className={classes.value}>
        {hidden ? 'True' : 'False'}
      </Typography>
      <Typography className={classes.value}>
        {access_key ? 'True' : 'False'}
      </Typography>
      <Typography className={classes.value}>
        {enable_access_key ? 'True' : 'False'}
      </Typography>
      <div>
        <IconButton>
          <EditIcon color="secondary" />
        </IconButton>
        <IconButton onClick={DeleteFunction}>
          <DeleteIcon color="error" />
        </IconButton>
      </div>
    </>
  )
}
export default DashboardTable
