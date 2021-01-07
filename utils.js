// utility functions on building the front.

import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageExampleLink = () => (
  <Image
    src='/webapp.png'
    as='a'
    size='medium'
    href='http://3.132.215.85/'
    target='_blank'
  />
)

export default ImageExampleLink