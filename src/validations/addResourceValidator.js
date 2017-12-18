import { filter, isEmpty, trim, size, uniq, map } from 'lodash'

export const validateAddResource = (resources) => {
  if (
    isEmpty(resources) ||
    (size(resources) === 1 && isEmpty(trim(resources[0])))
  )
    return {hasError: true, message: 'resources can not be empty'}

  const trimedResources = map(resources, resource => trim(resource))
  const filteredEmptyResources = filter(trimedResources, (resource) => {
    return !isEmpty(resource)
  })
  if (size(filteredEmptyResources) !== size(resources)) return {hasError: true, message: 'resources contain empty value'}

  if (size(uniq(trimedResources)) !== size(trimedResources)) return {hasError: true, message: 'resources contain the same value'}

  return {hasError: false, message: ''}
}
