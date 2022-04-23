import * as yup from 'yup'

const AddTableValidation = yup.object({
  contract_address: yup.string(),
  collection_name: yup.string(),
  quantity: yup.string(),
  presale_price: yup.string(),
  publicsale_price: yup.string(),
  max_mint: yup.string(),
  publicsale_mint_timestamp: yup.string(),
  presale_mint_timestamp: yup.string(),
  discord_link: yup.string().url(),
  discord_member: yup.string(),
  twitter_link: yup.string().url(),
  twitter_member: yup.string(),
  opensea_link: yup.string().url(),
  os_royalty: yup.string(),
  listing_fee: yup.string(),
  nft_royalty: yup.string(),
  hidden: yup.boolean(),
  access_key: yup.string(),
  enable_access_key: yup.boolean()
})
export default AddTableValidation
