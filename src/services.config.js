// uncomment only if it's in use, to pass linting
// const STUB_API_ADDRESS = 'http://10.150.88.70:8099/MockServices/DSCPortal';
const LIVE_API_ADDRESS = 'https://api.dev.dev-cglcloud.com/api/dxo/dsc/v1/auth';

const config = {
  getContracts: {
    url: `${LIVE_API_ADDRESS}/contractList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  contract: {
    url: `${LIVE_API_ADDRESS}/contract`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getContractDetails: {
    url: `${LIVE_API_ADDRESS}/contractByCakNO`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getPayments: {
    url: `${LIVE_API_ADDRESS}/paymentList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchContractStatus: {
    url: `${LIVE_API_ADDRESS}/updateContract`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getArrivalSchedules: {
    url: `${LIVE_API_ADDRESS}/arrivalScheduleList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  getPickupSchedules: {
    url: `${LIVE_API_ADDRESS}/pickUpScheduleList`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postPickupSchedule: {
    url: `${LIVE_API_ADDRESS}/pickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postPayment: {
    url: `${LIVE_API_ADDRESS}/payment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  postPaymentReminder: {
    url: `${LIVE_API_ADDRESS}/paymentReminding`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchPaymentSighted: {
    url: `${LIVE_API_ADDRESS}/updatePayment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  addArrivalSchedule: {
    url: `${LIVE_API_ADDRESS}/arrivalSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchArrivalSchedule: {
    url: `${LIVE_API_ADDRESS}/updateArrivalSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  addQtyToTotalApproved: {
    url: `${LIVE_API_ADDRESS}/updateApprovedQuantity`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },  
  patchPaymentDueDate: {
    url: `${LIVE_API_ADDRESS}/updatePayment`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchAddEditPickup: {
    url: `${LIVE_API_ADDRESS}/updatePickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 200
  },
  deletePickupSchedule: {
    url: `${LIVE_API_ADDRESS}/pickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
  patchEditArrivalSchedule: {
    url: `${LIVE_API_ADDRESS}/updatePickUpSchedule`,
    retry: 0,
    interval: 0,
    timeout: 2000
  },
};

export default config;
