import React, {Component} from 'react';
import roundImage from './round_image'; // Import a component from another file
class DangerButton extends Component {
  const styles = EStyleSheet.create({
    photo: {
      width: '50%',
      height: '50%',
      marginLeft: '10%'

    }
  });
  return <roundImage/>;
}
}