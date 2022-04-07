type Table = {
  id: number
  contract_address: string
  collection_name: string
  quantity: string
  presale_price: string
  publicsale_price: string
  max_mint: string
  publicsale_mint_timestamp: string
  presale_mint_timestamp: string
  discord_link: string
  discord_member: string
  twitter_link: string
  twitter_member: string
  opensea_link: string
  os_royalty: string
  listing_fee: string
  nft_royalty: string
  hidden: boolean
  access_key: string
  enable_access_key: boolean
  index?: number
  settables: (value: any) => void
}
export default Table
