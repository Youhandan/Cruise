export const PHYSICAL = 'Physical'
export const VIRTUAL = 'Virtual'
export const ALL = 'All'

export const IDLE = 'idle'
export const BUILDING = 'building'

export const statusColor = {
  [IDLE]: 'green',
  [BUILDING]: 'yellow'
}

export const mockData = [
  {
    name: 'bjstdmngbgr02.thoughtworks.com',
    status: IDLE,
    ip: '192.168.1.2',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu', 'firefox3', 'core-duo']
  },
  {
    name: 'bjstdmngbgr03.thoughtworks.com',
    status: BUILDING,
    ip: '192.168.1.3',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
  },
  {
    name: 'bjstdmngbgr04.thoughtworks.com',
    status: BUILDING,
    ip: '192.168.1.4',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
  },
  {
    name: 'bjstdmngbgr05.thoughtworks.com',
    status: IDLE,
    ip: '192.168.1.5',
    sandbox: 'var/lib/cruise-agent',
    machine: PHYSICAL,
    resources: ['ubuntu']
  },
]

