import { data } from '../../../data/mock-homepage-data'
import { retrieveSensorsData } from './sensorsApi'

describe('Sensors API Unit Test Suites', () => {
    it('should return the mocked data', () => {
        expect(retrieveSensorsData()).toEqual(data.facades)
    })
})