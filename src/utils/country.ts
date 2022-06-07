
export const Division=()=>{
    let arr=[]
  for(let i in divdisup){
      let index=arr.findIndex(item=>item?.division===divdisup[i].division)
      if(index===-1){
          arr.push(divdisup[i])
      }
  }
 // console.log(arr)
  return arr
}
export const District=(division:string)=>{
    let arr=[]
    for(let i in divdisup){
        if(divdisup[i].division===division){
        let index=arr.findIndex(item=>item?.district===divdisup[i].district )
        if(index===-1){
            arr.push(divdisup[i])
        }
    }
    }
  //  console.log(arr)
    return arr
}
export const Upazila=(district:string)=>{
    let arr=[]
    for(let i in divdisup){
        if(divdisup[i].district===district){
      
            arr.push(divdisup[i])
        }
    }
    
    return arr
}


export const divdisup=[
    {
      "upazila": "Amtali Upazila",
      "district": "Barguna",
      "division": "Barisal"
    },
    {
      "upazila": "Bamna Upazila",
      "district": "Barguna",
      "division": "Barisal"
    },
    {
      "upazila": "Barguna Sadar Upazila",
      "district": "Barguna",
      "division": "Barisal"
    },
    {
      "upazila": "Betagi Upazila",
      "district": "Barguna",
      "division": "Barisal"
    },
    {
      "upazila": "Patharghata Upazila",
      "district": "Barguna",
      "division": "Barisal"
    },
    {
      "upazila": "Taltali Upazila",
      "district": "Barguna",
      "division": "Barisal"
    },
    {
      "upazila": "Muladi Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Babuganj Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Agailjhara Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Barisal Sadar Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Bakerganj Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Banaripara Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Gaurnadi Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Hizla Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Mehendiganj Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Wazirpur Upazila",
      "district": "Barisal",
      "division": "Barisal"
    },
    {
      "upazila": "Bhola Sadar Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Burhanuddin Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Char Fasson Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Daulatkhan Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Lalmohan Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Manpura Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Tazumuddin Upazila",
      "district": "Bhola",
      "division": "Barisal"
    },
    {
      "upazila": "Jhalokati Sadar Upazila",
      "district": "Jhalokati",
      "division": "Barisal"
    },
    {
      "upazila": "Kathalia Upazila",
      "district": "Jhalokati",
      "division": "Barisal"
    },
    {
      "upazila": "Nalchity Upazila",
      "district": "Jhalokati",
      "division": "Barisal"
    },
    {
      "upazila": "Rajapur Upazila",
      "district": "Jhalokati",
      "division": "Barisal"
    },
    {
      "upazila": "Bauphal Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Dashmina Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Galachipa Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Kalapara Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Mirzaganj Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Patuakhali Sadar Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Dumki Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Rangabali Upazila",
      "district": "Patuakhali",
      "division": "Barisal"
    },
    {
      "upazila": "Bhandaria",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Kaukhali",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Mathbaria",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Nazirpur",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Nesarabad",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Pirojpur Sadar",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Zianagar",
      "district": "Pirojpur",
      "division": "Barisal"
    },
    {
      "upazila": "Bandarban Sadar",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Thanchi",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Lama",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Naikhongchhari",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Ali kadam",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Rowangchhari",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Ruma",
      "district": "Bandarban",
      "division": "Chittagong"
    },
    {
      "upazila": "Brahmanbaria Sadar Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Ashuganj Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Nasirnagar Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Nabinagar Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Sarail Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Shahbazpur Town",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Kasba Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Akhaura Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Bancharampur Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Bijoynagar Upazila",
      "district": "Brahmanbaria",
      "division": "Chittagong"
    },
    {
      "upazila": "Chandpur Sadar",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Faridganj",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Haimchar",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Haziganj",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Kachua",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Matlab Uttar",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Matlab Dakkhin",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Shahrasti",
      "district": "Chandpur",
      "division": "Chittagong"
    },
    {
      "upazila": "Anwara Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Banshkhali Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Boalkhali Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Chandanaish Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Fatikchhari Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Hathazari Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Lohagara Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Mirsharai Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Patiya Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Rangunia Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Raozan Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Sandwip Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Satkania Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Sitakunda Upazila",
      "district": "Chittagong",
      "division": "Chittagong"
    },
    {
      "upazila": "Barura Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Brahmanpara Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Burichong Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Chandina Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Chauddagram Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Daudkandi Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Debidwar Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Homna Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Comilla Sadar Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Laksam Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Monohorgonj Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Meghna Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Muradnagar Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Nangalkot Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Comilla Sadar South Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Titas Upazila",
      "district": "Comilla",
      "division": "Chittagong"
    },
    {
      "upazila": "Chakaria Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Chakaria Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Cox's Bazar Sadar Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Kutubdia Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Maheshkhali Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Ramu Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Teknaf Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Ukhia Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Pekua Upazila",
      "district": "Cox's Bazar",
      "division": "Chittagong"
    },
    {
      "upazila": "Feni Sadar",
      "district": "Feni",
      "division": "Chittagong"
    },
    {
      "upazila": "Chagalnaiya",
      "district": "Feni",
      "division": "Chittagong"
    },
    {
      "upazila": "Daganbhyan",
      "district": "Feni",
      "division": "Chittagong"
    },
    {
      "upazila": "Parshuram",
      "district": "Feni",
      "division": "Chittagong"
    },
    {
      "upazila": "Fhulgazi",
      "district": "Feni",
      "division": "Chittagong"
    },
    {
      "upazila": "Sonagazi",
      "district": "Feni",
      "division": "Chittagong"
    },
    {
      "upazila": "Dighinala Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Khagrachhari Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Lakshmichhari Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Mahalchhari Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Manikchhari Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Matiranga Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Panchhari Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Ramgarh Upazila",
      "district": "Khagrachari",
      "division": "Chittagong"
    },
    {
      "upazila": "Lakshmipur Sadar Upazila",
      "district": "Lakshmipur",
      "division": "Chittagong"
    },
    {
      "upazila": "Raipur Upazila",
      "district": "Lakshmipur",
      "division": "Chittagong"
    },
    {
      "upazila": "Ramganj Upazila",
      "district": "Lakshmipur",
      "division": "Chittagong"
    },
    {
      "upazila": "Ramgati Upazila",
      "district": "Lakshmipur",
      "division": "Chittagong"
    },
    {
      "upazila": "Komol Nagar Upazila",
      "district": "Lakshmipur",
      "division": "Chittagong"
    },
    {
      "upazila": "Noakhali Sadar Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Begumganj Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Chatkhil Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Companyganj Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Shenbag Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Hatia Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Kobirhat Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Sonaimuri Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Suborno Char Upazila",
      "district": "Noakhali",
      "division": "Chittagong"
    },
    {
      "upazila": "Rangamati Sadar Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Belaichhari Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Bagaichhari Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Barkal Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Juraichhari Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Rajasthali Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Kaptai Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Langadu Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Nannerchar Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Kaukhali Upazila",
      "district": "Rangamati",
      "division": "Chittagong"
    },
    {
      "upazila": "Dhamrai Upazila",
      "district": "Dhaka",
      "division": "Dhaka"
    },
    {
      "upazila": "Dohar Upazila",
      "district": "Dhaka",
      "division": "Dhaka"
    },
    {
      "upazila": "Keraniganj Upazila",
      "district": "Dhaka",
      "division": "Dhaka"
    },
    {
      "upazila": "Nawabganj Upazila",
      "district": "Dhaka",
      "division": "Dhaka"
    },
    {
      "upazila": "Savar Upazila",
      "district": "Dhaka",
      "division": "Dhaka"
    },
    {
      "upazila": "Faridpur Sadar Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Boalmari Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Alfadanga Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Madhukhali Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Bhanga Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Nagarkanda Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Charbhadrasan Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Sadarpur Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Shaltha Upazila",
      "district": "Faridpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Gazipur Sadar-Joydebpur",
      "district": "Gazipur",
      "division": "Dhaka"
    },
    {
      "upazila": "Kaliakior",
      "district": "Gazipur",
      "division": "Dhaka"
    },
    {
      "upazila": "Kapasia",
      "district": "Gazipur",
      "division": "Dhaka"
    },
    {
      "upazila": "Sripur",
      "district": "Gazipur",
      "division": "Dhaka"
    },
    {
      "upazila": "Kaliganj",
      "district": "Gazipur",
      "division": "Dhaka"
    },
    {
      "upazila": "Tongi",
      "district": "Gazipur",
      "division": "Dhaka"
    },
    {
      "upazila": "Gopalganj Sadar Upazila",
      "district": "Gopalganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Kashiani Upazila",
      "district": "Gopalganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Kotalipara Upazila",
      "district": "Gopalganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Muksudpur Upazila",
      "district": "Gopalganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Tungipara Upazila",
      "district": "Gopalganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Dewanganj Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Baksiganj Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Islampur Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Jamalpur Sadar Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Madarganj Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Melandaha Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Sarishabari Upazila",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Narundi Police I.C",
      "district": "Jamalpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Astagram Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Bajitpur Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Bhairab Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Hossainpur Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Itna Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Karimganj Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Katiadi Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Kishoreganj Sadar Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Kuliarchar Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Mithamain Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Nikli Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Pakundia Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Tarail Upazila",
      "district": "Kishoreganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Madaripur Sadar",
      "district": "Madaripur",
      "division": "Dhaka"
    },
    {
      "upazila": "Kalkini",
      "district": "Madaripur",
      "division": "Dhaka"
    },
    {
      "upazila": "Rajoir",
      "district": "Madaripur",
      "division": "Dhaka"
    },
    {
      "upazila": "Shibchar",
      "district": "Madaripur",
      "division": "Dhaka"
    },
    {
      "upazila": "Manikganj Sadar Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Singair Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Shibalaya Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Saturia Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Harirampur Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Ghior Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Daulatpur Upazila",
      "district": "Manikganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Lohajang Upazila",
      "district": "Munshiganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Sreenagar Upazila",
      "district": "Munshiganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Munshiganj Sadar Upazila",
      "district": "Munshiganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Sirajdikhan Upazila",
      "district": "Munshiganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Tongibari Upazila",
      "district": "Munshiganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Gazaria Upazila",
      "district": "Munshiganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Bhaluka",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Trishal",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Haluaghat",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Muktagachha",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Dhobaura",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Fulbaria",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Gaffargaon",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Gauripur",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Ishwarganj",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Mymensingh Sadar",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Nandail",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Phulpur",
      "district": "Mymensingh",
      "division": "Dhaka"
    },
    {
      "upazila": "Araihazar Upazila",
      "district": "Narayanganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Sonargaon Upazila",
      "district": "Narayanganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Bandar",
      "district": "Narayanganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Naryanganj Sadar Upazila",
      "district": "Narayanganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Rupganj Upazila",
      "district": "Narayanganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Siddirgonj Upazila",
      "district": "Narayanganj",
      "division": "Dhaka"
    },
    {
      "upazila": "Belabo Upazila",
      "district": "Narsingdi",
      "division": "Dhaka"
    },
    {
      "upazila": "Monohardi Upazila",
      "district": "Narsingdi",
      "division": "Dhaka"
    },
    {
      "upazila": "Narsingdi Sadar Upazila",
      "district": "Narsingdi",
      "division": "Dhaka"
    },
    {
      "upazila": "Palash Upazila",
      "district": "Narsingdi",
      "division": "Dhaka"
    },
    {
      "upazila": "Raipura Upazila, Narsingdi",
      "district": "Narsingdi",
      "division": "Dhaka"
    },
    {
      "upazila": "Shibpur Upazila",
      "district": "Narsingdi",
      "division": "Dhaka"
    },
    {
      "upazila": "Kendua Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Atpara Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Barhatta Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Durgapur Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Kalmakanda Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Madan Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Mohanganj Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Netrakona-S Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Purbadhala Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Khaliajuri Upazilla",
      "district": "Netrokona",
      "division": "Dhaka"
    },
    {
      "upazila": "Baliakandi Upazila",
      "district": "Rajbari",
      "division": "Dhaka"
    },
    {
      "upazila": "Goalandaghat Upazila",
      "district": "Rajbari",
      "division": "Dhaka"
    },
    {
      "upazila": "Pangsha Upazila",
      "district": "Rajbari",
      "division": "Dhaka"
    },
    {
      "upazila": "Kalukhali Upazila",
      "district": "Rajbari",
      "division": "Dhaka"
    },
    {
      "upazila": "Rajbari Sadar Upazila",
      "district": "Rajbari",
      "division": "Dhaka"
    },
    {
      "upazila": "Shariatpur Sadar -Palong",
      "district": "Shariatpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Damudya Upazila",
      "district": "Shariatpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Naria Upazila",
      "district": "Shariatpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Jajira Upazila",
      "district": "Shariatpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Bhedarganj Upazila",
      "district": "Shariatpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Gosairhat Upazila",
      "district": "Shariatpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Jhenaigati Upazila",
      "district": "Sherpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Nakla Upazila",
      "district": "Sherpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Nalitabari Upazila",
      "district": "Sherpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Sherpur Sadar Upazila",
      "district": "Sherpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Sreebardi Upazila",
      "district": "Sherpur",
      "division": "Dhaka"
    },
    {
      "upazila": "Tangail Sadar Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Sakhipur Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Basail Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Madhupur Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Ghatail Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Kalihati Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Nagarpur Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Mirzapur Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Gopalpur Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Delduar Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Bhuapur Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Dhanbari Upazila",
      "district": "Tangail",
      "division": "Dhaka"
    },
    {
      "upazila": "Bagerhat Sadar Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Chitalmari Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Fakirhat Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Kachua Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Mollahat Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Mongla Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Morrelganj Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Rampal Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Sarankhola Upazila",
      "district": "Bagerhat",
      "division": "Khulna"
    },
    {
      "upazila": "Damurhuda Upazila",
      "district": "Chuadanga",
      "division": "Khulna"
    },
    {
      "upazila": "Chuadanga-S Upazila",
      "district": "Chuadanga",
      "division": "Khulna"
    },
    {
      "upazila": "Jibannagar Upazila",
      "district": "Chuadanga",
      "division": "Khulna"
    },
    {
      "upazila": "Alamdanga Upazila",
      "district": "Chuadanga",
      "division": "Khulna"
    },
    {
      "upazila": "Abhaynagar Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Keshabpur Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Bagherpara Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Jessore Sadar Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Chaugachha Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Manirampur Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Jhikargachha Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Sharsha Upazila",
      "district": "Jessore",
      "division": "Khulna"
    },
    {
      "upazila": "Jhenaidah Sadar Upazila",
      "district": "Jhenaidah",
      "division": "Khulna"
    },
    {
      "upazila": "Maheshpur Upazila",
      "district": "Jhenaidah",
      "division": "Khulna"
    },
    {
      "upazila": "Kaliganj Upazila",
      "district": "Jhenaidah",
      "division": "Khulna"
    },
    {
      "upazila": "Kotchandpur Upazila",
      "district": "Jhenaidah",
      "division": "Khulna"
    },
    {
      "upazila": "Shailkupa Upazila",
      "district": "Jhenaidah",
      "division": "Khulna"
    },
    {
      "upazila": "Harinakunda Upazila",
      "district": "Jhenaidah",
      "division": "Khulna"
    },
    {
      "upazila": "Terokhada Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Batiaghata Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Dacope Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Dumuria Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Dighalia Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Koyra Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Paikgachha Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Phultala Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Rupsa Upazila",
      "district": "Khulna",
      "division": "Khulna"
    },
    {
      "upazila": "Kushtia Sadar",
      "district": "Kushtia",
      "division": "Khulna"
    },
    {
      "upazila": "Kumarkhali",
      "district": "Kushtia",
      "division": "Khulna"
    },
    {
      "upazila": "Daulatpur",
      "district": "Kushtia",
      "division": "Khulna"
    },
    {
      "upazila": "Mirpur",
      "district": "Kushtia",
      "division": "Khulna"
    },
    {
      "upazila": "Bheramara",
      "district": "Kushtia",
      "division": "Khulna"
    },
    {
      "upazila": "Khoksa",
      "district": "Kushtia",
      "division": "Khulna"
    },
    {
      "upazila": "Magura Sadar Upazila",
      "district": "Magura",
      "division": "Khulna"
    },
    {
      "upazila": "Mohammadpur Upazila",
      "district": "Magura",
      "division": "Khulna"
    },
    {
      "upazila": "Shalikha Upazila",
      "district": "Magura",
      "division": "Khulna"
    },
    {
      "upazila": "Sreepur Upazila",
      "district": "Magura",
      "division": "Khulna"
    },
    {
      "upazila": "angni Upazila",
      "district": "Meherpur",
      "division": "Khulna"
    },
    {
      "upazila": "Mujib Nagar Upazila",
      "district": "Meherpur",
      "division": "Khulna"
    },
    {
      "upazila": "Meherpur-S Upazila",
      "district": "Meherpur",
      "division": "Khulna"
    },
    {
      "upazila": "Narail-S Upazilla",
      "district": "Narail",
      "division": "Khulna"
    },
    {
      "upazila": "Lohagara Upazilla",
      "district": "Narail",
      "division": "Khulna"
    },
    {
      "upazila": "Kalia Upazilla",
      "district": "Narail",
      "division": "Khulna"
    },
    {
      "upazila": "Satkhira Sadar Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Assasuni Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Debhata Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Tala Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Kalaroa Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Kaliganj Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Shyamnagar Upazila",
      "district": "Satkhira",
      "division": "Khulna"
    },
    {
      "upazila": "Adamdighi",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bogra Sadar",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sherpur",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Dhunat",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Dhupchanchia",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Gabtali",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Kahaloo",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Nandigram",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sahajanpur",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sariakandi",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Shibganj",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sonatala",
      "district": "Bogra",
      "division": "Rajshahi"
    },
    {
      "upazila": "Joypurhat S",
      "district": "Joypurhat",
      "division": "Rajshahi"
    },
    {
      "upazila": "Akkelpur",
      "district": "Joypurhat",
      "division": "Rajshahi"
    },
    {
      "upazila": "Kalai",
      "district": "Joypurhat",
      "division": "Rajshahi"
    },
    {
      "upazila": "Khetlal",
      "district": "Joypurhat",
      "division": "Rajshahi"
    },
    {
      "upazila": "Panchbibi",
      "district": "Joypurhat",
      "division": "Rajshahi"
    },
    {
      "upazila": "Naogaon Sadar Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Mohadevpur Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Manda Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Niamatpur Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Atrai Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Raninagar Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Patnitala Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Dhamoirhat Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sapahar Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Porsha Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Badalgachhi Upazila",
      "district": "Naogaon",
      "division": "Rajshahi"
    },
    {
      "upazila": "Natore Sadar Upazila",
      "district": "Natore",
      "division": "Rajshahi"
    },
    {
      "upazila": "Baraigram Upazila",
      "district": "Natore",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bagatipara Upazila",
      "district": "Natore",
      "division": "Rajshahi"
    },
    {
      "upazila": "Lalpur Upazila",
      "district": "Natore",
      "division": "Rajshahi"
    },
    {
      "upazila": "Natore Sadar Upazila",
      "district": "Natore",
      "division": "Rajshahi"
    },
    {
      "upazila": "Baraigram Upazila",
      "district": "Natore",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bholahat Upazila",
      "district": "Nawabganj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Gomastapur Upazila",
      "district": "Nawabganj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Nachole Upazila",
      "district": "Nawabganj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Nawabganj Sadar Upazila",
      "district": "Nawabganj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Shibganj Upazila",
      "district": "Nawabganj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Atgharia Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bera Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bhangura Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Chatmohar Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Faridpur Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Ishwardi Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Pabna Sadar Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Santhia Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sujanagar Upazila",
      "district": "Pabna",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bagha",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Bagmara",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Charghat",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Durgapur",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Godagari",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Mohanpur",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Paba",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Puthia",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Tanore",
      "district": "Rajshahi",
      "division": "Rajshahi"
    },
    {
      "upazila": "Sirajganj Sadar Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Belkuchi Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Chauhali Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Kamarkhanda Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Kazipur Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Raiganj Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Shahjadpur Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Tarash Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Ullahpara Upazila",
      "district": "Sirajgonj",
      "division": "Rajshahi"
    },
    {
      "upazila": "Birampur Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Birganj",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Biral Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Bochaganj Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Chirirbandar Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Phulbari Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Ghoraghat Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Hakimpur Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Kaharole Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Khansama Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Dinajpur Sadar Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Nawabganj",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Parbatipur Upazila",
      "district": "Dinajpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Fulchhari",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Gaibandha sadar",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Gobindaganj",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Palashbari",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Sadullapur",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Saghata",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Sundarganj",
      "district": "Gaibandha",
      "division": "Rangpur"
    },
    {
      "upazila": "Kurigram Sadar",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Nageshwari",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Bhurungamari",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Phulbari",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Rajarhat",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Ulipur",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Chilmari",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Rowmari",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Char Rajibpur",
      "district": "Kurigram",
      "division": "Rangpur"
    },
    {
      "upazila": "Lalmanirhat Sadar",
      "district": "Lalmonirhat",
      "division": "Rangpur"
    },
    {
      "upazila": "Aditmari",
      "district": "Lalmonirhat",
      "division": "Rangpur"
    },
    {
      "upazila": "Kaliganj",
      "district": "Lalmonirhat",
      "division": "Rangpur"
    },
    {
      "upazila": "Hatibandha",
      "district": "Lalmonirhat",
      "division": "Rangpur"
    },
    {
      "upazila": "Patgram",
      "district": "Lalmonirhat",
      "division": "Rangpur"
    },
    {
      "upazila": "Nilphamari Sadar",
      "district": "Nilphamari",
      "division": "Rangpur"
    },
    {
      "upazila": "Saidpur",
      "district": "Nilphamari",
      "division": "Rangpur"
    },
    {
      "upazila": "Jaldhaka",
      "district": "Nilphamari",
      "division": "Rangpur"
    },
    {
      "upazila": "Kishoreganj",
      "district": "Nilphamari",
      "division": "Rangpur"
    },
    {
      "upazila": "Domar",
      "district": "Nilphamari",
      "division": "Rangpur"
    },
    {
      "upazila": "Dimla",
      "district": "Nilphamari",
      "division": "Rangpur"
    },
    {
      "upazila": "Panchagarh Sadar",
      "district": "Panchagarh",
      "division": "Rangpur"
    },
    {
      "upazila": "Debiganj",
      "district": "Panchagarh",
      "division": "Rangpur"
    },
    {
      "upazila": "Boda",
      "district": "Panchagarh",
      "division": "Rangpur"
    },
    {
      "upazila": "Atwari",
      "district": "Panchagarh",
      "division": "Rangpur"
    },
    {
      "upazila": "Tetulia",
      "district": "Panchagarh",
      "division": "Rangpur"
    },
    {
      "upazila": "Badarganj",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Mithapukur",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Gangachara",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Kaunia",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Rangpur Sadar",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Pirgachha",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Pirganj",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Taraganj",
      "district": "Rangpur",
      "division": "Rangpur"
    },
    {
      "upazila": "Thakurgaon Sadar Upazila",
      "district": "Thakurgaon",
      "division": "Rangpur"
    },
    {
      "upazila": "Pirganj Upazila",
      "district": "Thakurgaon",
      "division": "Rangpur"
    },
    {
      "upazila": "Baliadangi Upazila",
      "district": "Thakurgaon",
      "division": "Rangpur"
    },
    {
      "upazila": "Haripur Upazila",
      "district": "Thakurgaon",
      "division": "Rangpur"
    },
    {
      "upazila": "Ranisankail Upazila",
      "district": "Thakurgaon",
      "division": "Rangpur"
    },
    {
      "upazila": "Ajmiriganj",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Baniachang",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Bahubal",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Chunarughat",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Habiganj Sadar",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Lakhai",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Madhabpur",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Nabiganj",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Shaistagonj Upazila",
      "district": "Habiganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Moulvibazar Sadar",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Barlekha",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Juri",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Kamalganj",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Kulaura",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Rajnagar",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Sreemangal",
      "district": "Maulvibazar",
      "division": "Sylhet"
    },
    {
      "upazila": "Bishwamvarpur",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Chhatak",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Derai",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Dharampasha",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Dowarabazar",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Jagannathpur",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Jamalganj",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Sulla",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Sunamganj Sadar",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Shanthiganj",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Tahirpur",
      "district": "Sunamganj",
      "division": "Sylhet"
    },
    {
      "upazila": "Sylhet Sadar",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Beanibazar",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Bishwanath",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Dakshin Surma Upazila",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Balaganj",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Companiganj",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Fenchuganj",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Golapganj",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Gowainghat",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Jaintiapur",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Kanaighat",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Zakiganj",
      "district": "Sylhet",
      "division": "Sylhet"
    },
    {
      "upazila": "Nobigonj",
      "district": "Sylhet",
      "division": "Sylhet"
    }
  ]

