import { IDLE, PHYSICAL, BUILDING } from 'constants/AgentsConstants'


export const mockData = [
  {
    id: 0,
    name: 'bjstdmngbgr02.thoughtworks.com',
    status: IDLE,
    ip: '192.168.1.2',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu', 'firefox3', 'core-duo']
  },
  {
    id: 1,
    name: 'bjstdmngbgr03.thoughtworks.com',
    status: BUILDING,
    ip: '192.168.1.3',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
  },
  {
    id: 2,
    name: 'bjstdmngbgr04.thoughtworks.com',
    status: BUILDING,
    ip: '192.168.1.4',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
  },
  {
    id: 3,
    name: 'bjstdmngbgr05.thoughtworks.com',
    status: IDLE,
    ip: '192.168.1.5',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu']
  },
]

export const histories = new Array(10).fill('bjstdmngbgr02/Acceptance_test')

