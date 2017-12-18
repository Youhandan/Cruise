import { expect } from 'chai'
import { validateAddResource } from 'validations/addResourceValidator'

describe('AddNewResourceOfTaskValidators', () => {
    it('add resource should not be empty', () => {
      const resource = []
      const { hasError } = validateAddResource(resource)
      expect(hasError).to.eql(true)
    })

    it('add resource should not be empty', () => {
      const resource = ['']
      const { hasError } = validateAddResource(resource)
      expect(hasError).to.eql(true)
    })
    it('add resources should not contain empty', () => {
      const resource = [1 ,,'   ',  '', 'aaa ']
      const { hasError } = validateAddResource(resource)
      expect(hasError).to.eql(true)
    })
    it('add resources should not contain the same value', () => {
      const resource = ['aaa' ,'  aaa', 'bb']
      const { hasError } = validateAddResource(resource)
      expect(hasError).to.eql(true)
    })
    it('add validate resources', () => {
      const resource = ['aaa' ,'aa', 'bb']
      const { hasError } = validateAddResource(resource)
      expect(hasError).to.eql(false)
    })
})
