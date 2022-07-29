import moment from "moment"
import { RequestType } from "../../typings/form-data"
import { DATE_FORMAT } from "../config"

export const feedlist = () => {
  let list: RequestType[] = []
  for (let i = 1; i <= 5; i++) {
    let i = {
      name: 'J.s Nahian',
      contact_number: '01555121212',
      required_blood_group: 'A+',
      amount_blood: 1,
      blood_need_date: moment().format(DATE_FORMAT),
      reason_of_blood: 'Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body tissues',
      hospital_name: 'LabAid Hospital',
      hospital_address: 'Sector-6,Uttara,Dhaka',
    }
    list.push(i)
  }
  return list
}


