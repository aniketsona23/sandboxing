import vimarsh from "../Assets/students/vimarsh.jpg"
import pranav from "../Assets/students/pranav.jpg"
import smrithi from '../Assets/students/smrithi.jpeg';
import vishnu from '../Assets/students/vishnu.jpeg';
import aashishkanted from '../Assets/students/aashishkanted.jpg'
import arjunputhli from '../Assets/students/arjunputhli.jpg'
import ritwik from '../Assets/students/ritwik.jpg'
import nitya from '../Assets/students/nitya.jpg'

import arya from '../Assets/students/arya.jpeg'
import raghav from '../Assets/students/raghav.jpeg'
import rajdeep from "../Assets/students/rajdeep.jpeg"
import samar from '../Assets/students/samar.jpeg'
import vishnuganti from '../Assets/students/vishnuganti1.jpeg'
import adarsh from '../Assets/students/adarsh.jpeg'
import ajinkya from "../Assets/students/ajinkya.jpeg"
import om from "../Assets/students/om.jpeg"


import aniket from "../Assets/students/aniket.webp"

import varinder from '../Assets/faculty/varinder1.jpeg';

let student = [
  {
    name:"Om Jaiswal",
    email:"f20220483@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/om-jaiswal-b4716a190",
    image:om
  },
  {
    name:"Aniket Sonawane",
    email:"f20220031@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/aniket-sonawane-3a87b9249/",
    image:aniket
  },
  {
    name:"Ajikya Deshpande",
    email:"f20220746@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/ajinkya-deshpande-6ab13b265",
    image:ajinkya
  },

  {
    name:"Adarsh Pai",
    email:"f20220698@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/adarsh-pai-063050263",
    image:adarsh
  },

  {
    name:"Arya Kulkarni",
    email:"f20220557@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/arya-kulkarni-a68b55251",
    image:arya
  },
  {
    name:"Raghav Mohak Kumar",
    email:"f20220137@goa.bits-pilani.ac.in",
    linkedIn:"http://www.linkedin.com/in/raghav-mohan-kumar-427557246",
    image:raghav
  },
  {
    name:"Rajdeep Naha",
    email:"f20221218@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/rajdeep-naha-a6a032257",
    image:rajdeep
  },
  {
    name:"Vimarsh Shah",
    email:"f20221060@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/vimarshshah",
    image:vimarsh
  },
  {
    name:"Pranav Saxena",
    email:"f20220257@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/pranav-saxena13",
    image:pranav
  },
  {
    name:"Samar Jalil Siddiqui",
    email:"f20221135@goa.bita-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/samar-jalil-siddiqui-96b852299/",
    image:samar
  },
  {
    name:"Vishnu Ganti",
    email:"f20220579@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/vishnu-ganti-223898258",
    image:vishnuganti
  },
  {
    name: 'Smrithi Lokesh',
    mobile: '+916361694968',
    email: 'f20212018@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/smrithi-ls-0894b7219',
    image: smrithi,
  },
  {
    name: 'Vishnu Vardhan Reddy Peddireddy',
    mobile: '+918790830151',
    email: 'f20211199@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/',
    image: vishnu,
  },
  {
    name: 'Aashish Kanted',
    mobile: '+919840530003',
    email: 'f20211912@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/aashish-kanted-7a3707225',
    image: aashishkanted,
  },
  {
    name: 'Arjun Puthli',
    mobile: '+919594333307',
    email: 'f20212249@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/mwlite/in/arjun-puthli-810938189',
    image: arjunputhli,
  },
  {
    name: 'Ritwik',
    mobile: '+919999326476',
    email: 'f20220470@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ritwik-sharma-609a38268',
    image: ritwik,
  },
  {
    name: 'Nitya Ahuja',
    mobile: '+919606031958',
    email: 'f20212293@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/nitya-ahuja-516240237/',
    image: nitya,
  },
];

let faculty = [
  {
    image: varinder,
    name: 'Dr. Varinder Singh',
    url: 'https://www.bits-pilani.ac.in/goa/varinder-singh/',
  }
];

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

student.sort(compare);
// faculty.sort(compare);

export { student, faculty };
