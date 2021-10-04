const remoteURL = "http://localhost:5002"

export const getEmployeeById = (employeeId) => {
//                            used expand=animal in place of expand=customer ??? ALERT
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location&_expand=animal`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}