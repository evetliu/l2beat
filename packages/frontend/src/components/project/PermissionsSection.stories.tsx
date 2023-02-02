import { ProjectPermission } from '@l2beat/config'
import React from 'react'

import { toTechnologyContract } from '../../utils/project/getPermissionsSection'
import { PermissionsSection as PermissionsSectionComponent } from './PermissionsSection'

export default {
  title: 'Components/Project/PermissionsSection',
}

const permissions: ProjectPermission[] = [
  {
    name: 'Optimism MultiSig',
    accounts: [
      {
        address: '0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A',
        type: 'MultiSig',
      },
    ],
    description:
      'This address is the owner of the following contracts: OVM_L1CrossDomainMessenger, L1StandardBridge, LibAddressManager. This allows it to censor messages or pause message bridge altogether, upgrade bridge implementation potentially gaining access to all funds stored in a bridge and change the sequencer, state root proposer or any other system component (unlimited upgrade power).',
  },
  {
    name: 'MultiSig participants',
    accounts: [
      {
        address: '0x3041BA32f451F5850c147805F5521AC206421623',
        type: 'EOA',
      },
      {
        address: '0x3bC453E5b3c941D1baD8F25E512772a50eE20AC1',
        type: 'EOA',
      },
      {
        address: '0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15',
        type: 'EOA',
      },
    ],
    description:
      'These addresses are the participants of the 2/3 Optimism MultiSig.',
  },
]

export function PermissionsSection() {
  return (
    <div className="p-4 leading-normal">
      <PermissionsSectionComponent
        permissions={permissions.map(toTechnologyContract)}
        verificationStatus={{
          projects: {},
          contracts: {
            '0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A': true,
            '0x3041BA32f451F5850c147805F5521AC206421623': true,
            '0x3bC453E5b3c941D1baD8F25E512772a50eE20AC1': false,
            '0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15': true,
          },
        }}
      />
    </div>
  )
}
