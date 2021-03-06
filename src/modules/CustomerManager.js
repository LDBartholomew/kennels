const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) => {
//                            used expand=animal in place of expand=customer ???
  return fetch(`${remoteURL}/customers/${customerId}?_expand=location&_expand=animal`)
  .then(res => res.json())
}

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then(res => res.json())
}