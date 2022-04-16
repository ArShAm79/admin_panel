import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import Table from '../../types/table'
import useStyles from './styles/index.style'
import AddTableValidation from './validation'

const EditTable = () => {
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()
  const table = location.state
  const onSumbit = (
    values: any,
    {
      setSubmitting
    }: { setSubmitting: (value: boolean) => void; resetForm: () => void }
  ) => {
    request(`/v1/admins/tables/upcoming/id/${values.id}`, 'PUT', values).then(
      (response) => {
        if (response.status === 200) {
          toast.success('Table successfully updated')
        }
        setSubmitting(false)
      }
    )
  }
  useEffect(() => {
    if (!location.state) {
      history.replace('/dashboard')
    }
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Add Table</Typography>
      </div>
      <Formik
        onSubmit={onSumbit}
        validationSchema={AddTableValidation}
        enableReinitialize
        initialValues={table as Table}>
        {({
          errors,
          touched,
          handleBlur,
          values,
          isSubmitting,
          handleChange
        }) => (
          <Form className={classes.formContainer}>
            <div className={classes.inputContainer}>
              <TextField
                label="Contract Address"
                name="contract_address"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.contract_address}
                error={touched.contract_address && !!errors.contract_address}
                helperText={
                  touched.contract_address ? errors.contract_address : undefined
                }
              />
              <TextField
                label="Collection Name"
                name="collection_name"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.collection_name}
                error={touched.collection_name && !!errors.collection_name}
                helperText={
                  touched.collection_name ? errors.collection_name : undefined
                }
              />
              <TextField
                label="Quantity"
                name="quantity"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.quantity}
                error={touched.quantity && !!errors.quantity}
                helperText={touched.quantity ? errors.quantity : undefined}
              />
              <TextField
                label="Presale Price"
                name="presale_price"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.presale_price}
                error={touched.presale_price && !!errors.presale_price}
                helperText={
                  touched.presale_price ? errors.presale_price : undefined
                }
              />
              <TextField
                label="Publicsale Price"
                name="publicsale_price"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.publicsale_price}
                error={touched.publicsale_price && !!errors.publicsale_price}
                helperText={
                  touched.publicsale_price ? errors.publicsale_price : undefined
                }
              />
              <TextField
                label="Max Mint"
                name="max_mint"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.max_mint}
                error={touched.max_mint && !!errors.max_mint}
                helperText={touched.max_mint ? errors.max_mint : undefined}
              />
              <TextField
                label="Publicsale Mint Timestamp"
                name="publicsale_mint_timestamp"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.publicsale_mint_timestamp}
                error={
                  touched.publicsale_mint_timestamp &&
                  !!errors.publicsale_mint_timestamp
                }
                helperText={
                  touched.publicsale_mint_timestamp
                    ? errors.publicsale_mint_timestamp
                    : undefined
                }
              />
              <TextField
                label="Presale Mint Timestamp"
                name="presale_mint_timestamp"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.presale_mint_timestamp}
                error={
                  touched.presale_mint_timestamp &&
                  !!errors.presale_mint_timestamp
                }
                helperText={
                  touched.presale_mint_timestamp
                    ? errors.presale_mint_timestamp
                    : undefined
                }
              />
              <TextField
                label="Discord Link"
                name="discord_link"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.discord_link}
                error={touched.discord_link && !!errors.discord_link}
                helperText={
                  touched.discord_link ? errors.discord_link : undefined
                }
              />
              <TextField
                label="Discord Member"
                name="discord_member"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.discord_member}
                error={touched.discord_member && !!errors.discord_member}
                helperText={
                  touched.discord_member ? errors.discord_member : undefined
                }
              />
              <TextField
                label="Twitter Link"
                name="twitter_link"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.twitter_link}
                error={touched.twitter_link && !!errors.twitter_link}
                helperText={
                  touched.twitter_link ? errors.twitter_link : undefined
                }
              />
              <TextField
                label="Twitter Member"
                name="twitter_member"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.twitter_member}
                error={touched.twitter_member && !!errors.twitter_member}
                helperText={
                  touched.twitter_member ? errors.twitter_member : undefined
                }
              />
              <TextField
                label="Opensea Link"
                name="opensea_link"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.opensea_link}
                error={touched.opensea_link && !!errors.opensea_link}
                helperText={
                  touched.opensea_link ? errors.opensea_link : undefined
                }
              />
              <TextField
                label="OS Royalty"
                name="os_royalty"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.os_royalty}
                error={touched.os_royalty && !!errors.os_royalty}
                helperText={touched.os_royalty ? errors.os_royalty : undefined}
              />
              <TextField
                label="Listing Fee"
                name="listing_fee"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.listing_fee}
                error={touched.listing_fee && !!errors.listing_fee}
                helperText={
                  touched.listing_fee ? errors.listing_fee : undefined
                }
              />
              <TextField
                label="Nft Royalty"
                name="nft_royalty"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.nft_royalty}
                error={touched.nft_royalty && !!errors.nft_royalty}
                helperText={
                  touched.nft_royalty ? errors.nft_royalty : undefined
                }
              />
              <TextField
                label="Access Key"
                name="access_key"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.access_key}
                error={touched.access_key && !!errors.access_key}
                helperText={touched.access_key ? errors.access_key : undefined}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.hidden}
                    onChange={handleChange}
                    name="hidden"
                    disabled={isSubmitting}
                  />
                }
                label="Hidden"
              />

              {/* <TextField
                  label="Enable Access Key"
                  name="enable_access_key"
                  variant="outlined"
                  fullWidth
                  size="small"
                  color="secondary"
                  required
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={values.enable_access_key}
                  error={touched.enable_access_key && !!errors.enable_access_key}
                  helperText={
                    touched.enable_access_key
                      ? errors.enable_access_key
                      : undefined
                  }
                /> */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.enable_access_key}
                    onChange={handleChange}
                    name="enable_access_key"
                    disabled={isSubmitting}
                  />
                }
                label="Enable Access Key"
              />
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="primary">
                  Cancel
                </Button>
              </div>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="secondary">
                  Add
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default EditTable
