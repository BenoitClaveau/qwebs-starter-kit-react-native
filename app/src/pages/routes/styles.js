import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  toolbar: {
    backgroundColor: '#edf1f4', /*beige*/
    height: 56,
  },
  viewPager: {
    backgroundColor: '#fff',
    height: height - 56
  },
};
