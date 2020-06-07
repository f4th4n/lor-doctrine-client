import config from '../../config'
import helper from '../helper'

const ImageModel = {
  normal: (question, bgOrCard) => {
    var folder = 'normal-small'
    var base = bgOrCard === 'bg' ? 'fullAbsolutePath' : 'gameAbsolutePath'

    if (bgOrCard === 'card') {
      if (question.question.questionType === 'region') {
        folder = 'mask-region'
      } else if (question.question.questionType === 'name') {
        base = 'fullAbsolutePath'
      } else if (question.question.questionType === 'description') {
        base = 'fullAbsolutePath'
      } else if (question.question.questionType === 'cost') {
        folder = 'mask-cost'
      } else if (question.question.questionType === 'attack-health') {
        folder = 'mask-region'
      } else if (question.question.questionType === 'spell-speed') {
        base = 'fullAbsolutePath'
      }
    }
    return config.endpoint.image + folder + '/' + helper.basename(question.card.assets[0][base])
  },
  tutorial: (question) => {
    var base = 'gameAbsolutePath'
    return config.endpoint.image + 'normal-small/' + helper.basename(question.card.assets[0][base])
  },
}

export default ImageModel
