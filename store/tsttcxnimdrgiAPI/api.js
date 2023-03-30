import axios from "axios"
const tsttcxnimdrgiAPI = axios.create({
  baseURL: "https://tst-tc3787-xnimdrgi-72916-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return tsttcxnimdrgiAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tsttcxnimdrgiAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return tsttcxnimdrgiAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tsttcxnimdrgiAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tsttcxnimdrgiAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return tsttcxnimdrgiAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tsttcxnimdrgiAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tsttcxnimdrgiAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tsttcxnimdrgiAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return tsttcxnimdrgiAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tsttcxnimdrgiAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return tsttcxnimdrgiAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_camera_photos_user_list(payload) {
  return tsttcxnimdrgiAPI.get(`/modules/camera/photos/user/`)
}
function modules_camera_upload_image_create(payload) {
  return tsttcxnimdrgiAPI.post(`/modules/camera/upload_image/`)
}
function modules_camera_photos_user_retrieve(payload) {
  return tsttcxnimdrgiAPI.get(`/modules/camera/photos/user/${payload.id}/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tsttcxnimdrgiAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return tsttcxnimdrgiAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_camera_photos_user_list,
  modules_camera_upload_image_create,
  modules_camera_photos_user_retrieve,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
