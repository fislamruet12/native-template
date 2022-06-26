import moment from 'moment';
import {AlertDialog, Box, Button, Center, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
const ModernDatePicker = (props: any) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setSelectedDate(props.date);
  }, []);
  const getDate = (date: string) => {
    if (show === true) setSelectedDate(date);
  };
  const setShowCancel = () => {
    setShow(!show);
    setSelectedDate(props.date);
  };
  const sendFinalDatefromChild = () => {
    props.getDatefromDatePicker(selectedDate);
    setShow(!show);
  };
  const cancelRef = React.useRef(null);
  return (
    <Box>
      <TouchableOpacity activeOpacity={1} onPress={() => setShow(!show)}>
        <View borderColor={'gray.400'} borderWidth={1} padding={3} rounded={'sm'}> 
          <Text >{selectedDate}</Text>
        </View>
      </TouchableOpacity>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={show}
        onClose={() => setShowCancel()}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>
            <View>
              <Text>
                {moment(new Date(selectedDate)).format('dddd , Do MMMM , YYYY')}
              </Text>
            </View>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <DatePicker
              options={{
                // backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                textDefaultColor: '#111',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#111',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              current={selectedDate}
              minimumDate={props.minimum ? props.minimum : '1900-01-01'}
              maximumDate={props.maximum ? props.maximum : '3022-07-25'}
              selected={selectedDate}
              mode="calendar"
              minuteInterval={30}
              // style={{ borderRadius: 10 }}
              onSelectedChange={date =>
                getDate(getFormatedDate(date, 'YYYY-MM-DD'))
              }
            />
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={() => setShowCancel()}
                ref={cancelRef}>
                Cancel
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => sendFinalDatefromChild()}>
                Confirm
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
};
export default ModernDatePicker;
