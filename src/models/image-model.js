import config from '../../config'
import helper from '../helper'

const ImageModel = {
  normal: (row, bgOrCard) => {
    const base = bgOrCard === 'bg' ? 'fullAbsolutePath' : 'gameAbsolutePath'
    return config.endpoint.image + 'normal-small/' + helper.basename(row.assets[0][base])
  },
}

export default ImageModel
