import { Dimensions } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import config from '../config'

var helper = {}

helper.width = Dimensions.get('window').width
helper.height = Dimensions.get('window').height

helper.getPixelByPercent = (percent, marginSide) => {
  const margin = marginSide * 2 // left and right
  const widthMinMargin = helper.width - margin
  return (widthMinMargin * percent) / 100
}

helper.getWidthPixelByPercent = (percent) => (helper.width * percent) / 100
helper.getHeightPixelByPercent = (percent) => (helper.height * percent) / 100
helper.widthPercentageToDP = widthPercentageToDP
helper.heightPercentageToDP = heightPercentageToDP

/*
  imageType = thumb|normal|share
*/
helper.getImageUrl = (quizId, imageType) => {
  // e.g http://storage.bunga.top/tebaktokoh/1.share.jpg
  const url = config.image.endpoint + '/' + quizId + '.' + imageType + '.jpg'
  return url
}

helper.basename = (path) => {
  return path.substr(path.lastIndexOf('/') + 1)
}

helper.getTextFromHTML = (html) => {
  return html.replace(/<[^>]+>/g, '')
}

export default helper
